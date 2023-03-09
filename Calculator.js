export default class Calculator {
  constructor(primaryOperandShow, secondaryOperandShow, operationShow) {
    this.#primaryOperandShow = primaryOperandShow;
    this.#secondaryOperandShow = secondaryOperandShow;
    this.#operationShow = operationShow;
    this.clear();
  }
  #primaryOperandShow;
  #secondaryOperandShow;
  #operationShow;

  get primaryOperand() {
    //to incase the parsefloat can parse the ',' in the format(displayNumber  ), use 2 different places(dataset & textcontent) to save the value
    return parseFloat(this.#primaryOperandShow.dataset.value);
  }
  set primaryOperand(value) {
    this.#primaryOperandShow.dataset.value = value ?? "";
    this.#primaryOperandShow.textContent = displayNumber(value);
  }

  get secondaryOperand() {
    return parseFloat(this.#secondaryOperandShow.dataset.value);
  }
  set secondaryOperand(value) {
    this.#secondaryOperandShow.dataset.value = value ?? "";
    this.#secondaryOperandShow.textContent = displayNumber(value);
  }

  get operation() {
    return this.#operationShow.textContent;
  }
  set operation(value) {
    this.#operationShow.textContent = value ?? "";
  }

  addDigit(digit) {
    //disable repetitive period symbol
    if (digit === "." && this.#primaryOperandShow.dataset.value.includes(".")) {
      return;
    }
    if (this.primaryOperand === 0) {
      //disable the first 0s
      this.primaryOperand = digit;
      return;
    }
    this.primaryOperand = this.#primaryOperandShow.dataset.value + digit;
  }

  removeDigit() {
    const numberString = this.#primaryOperandShow.dataset.value;
    if (numberString.length <= 1) {
      this.primaryOperand = 0;
      return;
    }
    this.primaryOperand = numberString.substring(0, numberString.length - 1);
  }

  evaluate() {
    let result;
    switch (this.operation) {
      case "+":
        result = this.secondaryOperand + this.primaryOperand;
        break;
      case "*":
        result = this.secondaryOperand * this.primaryOperand;
        break;
      case "-":
        result = this.secondaryOperand - this.primaryOperand;
        break;
      case "÷":
        result = this.secondaryOperand / this.primaryOperand;
        break;
      default:
        return;
    }

    this.clear();
    this.primaryOperand = result;
    return result;
  }

  chooseOperation(operation) {
    console.log(operation);
    //don't reset the operation when you have not finished your operation yet.
    if (this.operation !== "") return;
    this.operation = operation;
    this.secondaryOperand = this.primaryOperand;
    this.primaryOperand = 0;
  }

  clear() {
    this.primaryOperand = 0;
    this.secondaryOperand = null;
    this.operation = null;
  }
}

//format output
const NUMBER_FORMATTER = new Intl.NumberFormat("en");
function displayNumber(number) {
  const stringNumber = number?.toString() || "";
  if (stringNumber === "") return "";
  //seperate the integer and decimal part of the number
  const [integer, decimal] = stringNumber.split(".");
  const formattedInteger = NUMBER_FORMATTER.format(integer);
  if (decimal == null) return formattedInteger;
  return formattedInteger + "." + decimal;
}
