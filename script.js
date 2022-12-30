const cells = document.querySelectorAll(".cell");
const output = document.querySelector(".output");
//1. add listener to each button and output relative values

cells.forEach((element) => {
  element.addEventListener("click", (e) => {
    //2. put the value in the output
    if (e.target.innerText === "AC") {
      //click AC to clear the output
      output.innerText = "";
    } else if (e.target.innerText === "=") {
      calculate(output.innerText);
    } else if (e.target.innerText === "DEL") {
      //click the DEL to delte last number
      output.innerText = output.innerText.slice(0, -1);
    } else output.innerText += e.target.innerText;
  });
});

//click the = to calculate
//calcutate function
function calculate(a, b) {
  switch ((a, b)) {
    case "+":
      return a + b;
    case "*":
      return a * b;
    case "-":
      return a - b;
    case "÷":
      return a / b;
  }
}
