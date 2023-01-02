let arr = [];
let tempCalc = [];
let tempFunction = [];
let storedCalc = 0;
let finalResult = [];

let numbers = [];
let operators = [];

const calcBtn = document.querySelectorAll(".div-btn button");

function getResult(arr) {
  let result = arr[0];
  for (let i = 1; i < arr.length; i += 2) {
    if (arr[i] === "+") {
      result += arr[i + 1];
    } else if (arr[i] === "-") {
      result -= arr[i + 1];
    } else if (arr[i] === "*") {
      result *= arr[i + 1];
    } else if (arr[i] === "/") {
      result /= arr[i + 1];
    }
  }
  return result;
}

calcBtn.forEach((button) => {
  button.addEventListener("click", function () {
    if (["+", "-", "*", "/"].includes(button.textContent)) {
      operators.push(button.textContent);
    } else if (/^\d+$/.test(button.textContent)) {
      numbers.push(parseInt(button.textContent));
    }

    switch (button.textContent) {
      case "=":
        tempCalc.push(Number(numbers.join("")));
        for (i = 0; i < tempCalc.length; i++) {
          tempFunction.push(tempCalc[i], operators[i]);
          // console.log(`TEST${i}: `, tempCalc[i], operators[i])
        }
        tempFunction.pop();
        finalResult = getResult(tempFunction);
        console.log("finalResult: ", finalResult);
        break;
      case "+":
      case "-":
      case "*":
      case "/":
        tempCalc.push(Number(numbers.join("")));
        numbers = [];
        break;
    }
    console.log("tempFunction: ", tempFunction);
    console.log("storedCalc: ", storedCalc);

    return arr;
  });
});
