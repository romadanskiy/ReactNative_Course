import { makeAutoObservable } from 'mobx'
import axios from 'axios';

import ICurrencyData from '../models/ICurrencyData';
import currencyDataList from '../models/CurrencyDataList';

class ExchangeRateStore {
  currencyDataList: ICurrencyData[] = currencyDataList;

  isLoading: boolean = false;

  fromCurrency: ICurrencyData = currencyDataList[0];
  fromCurrencyValue: string = '1';

  toCurrency: ICurrencyData = currencyDataList[1];
  toCurrencyValue: string = '';

  currentRate: number = 63.36;
  get reverseRate() {
    return 1 / this.currentRate;
  }

  setIsLoading = (isLoading: boolean) => {
    this.isLoading = isLoading;
  }

  changeCurrency = (currency: ICurrencyData, isFromCurrency: boolean) => {
    if (isFromCurrency)
      this.setFromCurrency(currency);
    else
      this.setToCurrency(currency);
    this.loadCurrentExcnahgeRate();
  }

  setFromCurrency = (fromCurrency: ICurrencyData) => {
    this.fromCurrency = fromCurrency;
  }

  setFromCurrencyValue = (fromCurrencyValue: string) => {
    this.fromCurrencyValue = fromCurrencyValue;

    if (this.isNullOrEmptyString(fromCurrencyValue)) {
      this.toCurrencyValue = '';
    }
    else {
      let toCurrencyValue = this.roundMoney(+fromCurrencyValue * this.currentRate);
      this.toCurrencyValue = toCurrencyValue.toString();
    }
  }

  setToCurrency = (toCurrency: ICurrencyData) => {
    this.toCurrency = toCurrency;
  }

  setToCurrencyValue = (toCurrencyValue: string) => {
    this.toCurrencyValue = toCurrencyValue;

    if (this.isNullOrEmptyString(toCurrencyValue)) {
      this.fromCurrencyValue = '';
    }
    else {
      let fromCurrencyValue = this.roundMoney(+toCurrencyValue * this.reverseRate);
      this.fromCurrencyValue = fromCurrencyValue.toString();
    }
  }

  setCurrentRate = (rate: number) => {
    this.currentRate = rate;

    if (this.isNullOrEmptyString(this.fromCurrencyValue))
      return;

    let toCurrencyValue = this.roundMoney(+this.fromCurrencyValue * this.currentRate);
    this.toCurrencyValue = toCurrencyValue.toString();
  }

  swapCurrencies = () => {
    [this.fromCurrency, this.toCurrency] = [this.toCurrency, this.fromCurrency];
    this.setCurrentRate(this.reverseRate);
  }

  loadCurrentExcnahgeRate = () => {
    this.setIsLoading(true);
    axios
      .get('https://api.apilayer.com/fixer/latest', {
        headers: {
          apikey: 'PqG0ih2iRYz0KP5Ybj7XIvhi7nqXGlRA',
        },
        params: {
          base: this.fromCurrency.code,
          symbols: this.toCurrency.code,
        }
      })
      .then((response) => {
        this.setCurrentRate(response.data.rates[this.toCurrency.code]);
      });
    this.setIsLoading(false);
  }

  isNullOrEmptyString = (value: string) => {
    return value === null || value.trim() === '';
  }

  roundMoney = (value: number) => {
    return Math.ceil(value * 100) / 100;
  }

  constructor() {
    makeAutoObservable(this, {
      isNullOrEmptyString: false,
      roundMoney: false,
    });
  }
}

export default new ExchangeRateStore();