let arr = [];
let tempCalc = [];
let tempFunction = [];
let finalResult = [];

let numbers = [];
let operators = [];

const calcBtn = document.querySelectorAll(".div-btn button");
document.querySelector(".div1.display").textContent = "0";


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

function showDisplay(event) {
  const x = event.target.innerText;
  const displayBox = document.querySelector('.div1.display');

  if (displayBox.innerHTML == 0) {
    displayBox.innerHTML = x;
  } else {
    displayBox.innerHTML += x;
  }
}

calcBtn.forEach((button) => {
  button.addEventListener("click", function (event) {
    if (["+", "-", "*", "/"].includes(button.textContent)) {
      operators.push(button.textContent);
    } else if (/^\d+$/.test(button.textContent)) {
      numbers.push(parseInt(button.textContent));
    }

    switch (button.textContent) {
      case "=":
        tempCalc.push(Number(numbers.join("")));
        for (let i = 0; i < tempCalc.length; i++) {
          tempFunction.push(tempCalc[i], operators[i]);
        }
        tempFunction.pop();
        finalResult = getResult(tempFunction);
        document.querySelector(".div1.display").textContent = finalResult;
        console.log("finalResult: ", finalResult);
        break;
      case "c":
        arr = [];
        tempCalc = [];
        tempFunction = [];
        finalResult = [];
        numbers = [];
        operators = [];
        document.querySelector(".div1.display").textContent = 0;
        break;
      case "+":
      case "-":
      case "*":
      case "/":
        tempCalc.push(Number(numbers.join("")));
        numbers = [];
        document.querySelector(".div1.display").textContent +=
          button.textContent;
        break;
      default:
        showDisplay(event);
    }
    return arr;
  });
});
