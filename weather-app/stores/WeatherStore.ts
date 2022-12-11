import { makeAutoObservable } from 'mobx'
import axios from 'axios';

import ICityData from '../models/ICityData';
import cityDataList from '../models/CityDataList';

class WeatherStore {
  cityDataList: ICityData[] = cityDataList;
  selectedCity: ICityData = cityDataList[0];
  currentTemperature: string = '...';

  setSelectedCity = (city: ICityData) => {
    this.selectedCity = city;
    this.loadCurrentTemperature();
  }

  setCurrentTemperature = (temperature: string) => {
    this.currentTemperature = temperature;
  }

  loadCurrentTemperature = () => {
    this.setCurrentTemperature('...');
    axios
      .get('https://api.open-meteo.com/v1/forecast', {
        params: {
          latitude: this.selectedCity.latitude,
          longitude: this.selectedCity.longitude,
          timezone: 'Europe/Moscow',
          current_weather: true,
        }
      })
      .then((response) => {
        this.setCurrentTemperature(response.data.current_weather.temperature);
      });
  }

  constructor() {
    makeAutoObservable(this);
  }
}

export default new WeatherStore();