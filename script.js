import Calculator from "./Calculator.js";

//display data
const primaryOperandShow = document.querySelector("[data-primary-operand]");
const secondaryOperandShow = document.querySelector("[data-secondary-operand");
const operationShow = document.querySelector("[data-operation]");

//add listener to each button and output relative values
const calculator = new Calculator(
  primaryOperandShow,
  secondaryOperandShow,
  operationShow
);
document.addEventListener("click", (e) => {
  //put the value in the output
  if (e.target.matches("[data-all-clear]")) {
    //click AC to clear the output
    calculator.clear();
    console.log("clear");
  } else if (e.target.matches(".number")) {
    //click the = to calculate, 还要保存到上方
    calculator.addDigit(e.target.textContent);
  } else if (e.target.matches("[data-delete]")) {
    //click the DEL to delte last number, （计算结果要直接删除）
    calculator.removeDigit();
  } else if (e.target.matches("[data-operation]")) {
    calculator.chooseOperation(e.target.textContent);
  } else if (e.target.matches("[data-equals]")) {
    calculator.evaluate();
  }
});
