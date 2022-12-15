import { makeAutoObservable } from 'mobx'

class CalculatorStore {
  stack: string[] = [];
  prevExpression = '';
  inputExpression = '';
  hasOperation = false;
  hasResult = false;

  constructor() {
    makeAutoObservable(this);
  }

  isOperation = (value: string) => {
    return isNaN(+value);
  }

  updateInputExpression = () => {
    this.inputExpression = this.stack.join('');
  }

  clearPrevExpression = () => {
    this.prevExpression = '';
  }

  clearStack = () => {
    this.stack.splice(0, this.stack.length);
  }

  clearAll = () => {
    this.clearStack();
    this.hasOperation = false;
    this.hasResult = false;
    this.clearPrevExpression();
    this.updateInputExpression();
  }

  removeLastElement = () => {
    let lastvalue = this.stack.pop();
    if (lastvalue && this.isOperation(lastvalue)) {
      this.hasOperation = false;
    }
    this.updateInputExpression();
  }

  calculate = () => {
    if (!this.hasOperation) {
      return;
    }

    let result = '';
    try {
      result = eval(this.inputExpression);
    }
    catch (e) {
      return;
    }

    let expression = this.inputExpression;
    this.clearAll();
    this.prevExpression = expression + '=' + result;
    this.stack.push(...Array.from(result.toString()));
    this.hasResult = true;
    this.updateInputExpression();
  }

  pushValue = (value: string) => {
    if (this.stack.length === 0) {
      if (this.isOperation(value)) {
        this.stack.push('0');
        this.hasOperation = true;
      }
      this.stack.push(value);
    }
    else if (this.hasResult) {
      if (!this.isOperation(value)) {
        this.clearStack();
      }
      else {
        this.hasOperation = true;
      }
      this.stack.push(value);
      this.hasResult = false;
    }
    else {
      let lastValue = this.stack[this.stack.length - 1];
      if (this.isOperation(value)) {
        if (this.hasOperation) {
          if (this.isOperation(lastValue)) {
            this.stack[this.stack.length - 1] = value;
          }
          else {
            this.calculate();
            this.stack.push(value);
            this.hasResult = false;
          }
        }
        else {
          this.stack.push(value);
        }
        this.hasOperation = true;
      }
      else {
        this.stack.push(value);
      }
    }
    this.updateInputExpression();
  }
}

export default new CalculatorStore();