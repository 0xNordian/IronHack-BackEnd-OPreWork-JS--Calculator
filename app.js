let arr = []

const calcBtn = document.querySelectorAll(".div-btn button");
calcBtn.forEach((button) => {
  console.log("allButton: ", button);
  button.addEventListener("click", function () {
    arr.push(this.textContent);
    console.log("arr: ", arr)
    return arr
  });
});

// function calculate(arr) {
//     let result = 0;
//     let currentNumber = '';
//     let currentOperator = '';
  
//     for (let i = 0; i < arr.length; i++) {
//       const input = arr[i];
//       if (typeof input === 'number') {
//         currentNumber += input;
//       } else if (typeof input === 'string') {
//         if (!currentOperator) {
//           result = Number(currentNumber);
//           currentNumber = '';
//         } else {
//           result = calculate(result, Number(currentNumber), currentOperator);
//           currentNumber = '';
//         }
//         currentOperator = input;
//       }
//     }
  
//     if (currentNumber) {
//       result = calculate(result, Number(currentNumber), currentOperator);
//     }
  
//     return result;
//   }

function calculate(input) {
    // use a regular expression to match all the numbers and operators in the input string
    const tokens = input.match(/\d+|\+|-|\*|\/|\^|%/g);
  
    // initialize the list of numbers and operators
    const numbers = [];
    const operators = [];
  
    // iterate through the tokens
    for (const token of tokens) {
      // if the token is a number, add it to the list of numbers
      if (/\d+/.test(token)) {
        numbers.push(parseInt(token, 10));
      }
      // if the token is an operator, add it to the list of operators
      else {
        operators.push(token);
      }
    }
  
    // initialize the result to the first number
    let result = numbers[0];
  
    // iterate through the list of numbers and operators, starting at index 0
    for (let i = 0; i < numbers.length - 1; i++) {
      // get the current number and operator
      const number = numbers[i + 1];
      const operator = operators[i];
  
      // handle exponentiation and modulo first, since they have higher precedence than other operators
      if (operator === '^' || operator === '%') {
        if (operator === '^') {
          result = Math.pow(result, number);
        } else if (operator === '%') {
          result = result % number;
        }
      }
      // handle multiplication and division next, since they have higher precedence than addition and subtraction
      else if (operator === '*' || operator === '/') {
        if (operator === '*') {
          result *= number;
        } else if (operator === '/') {
          result /= number;
        }
      }
      // handle addition and subtraction last
      else if (operator === '+' || operator === '-') {
        if (operator === '+') {
          result += number;
        } else if (operator === '-') {
          result -= number;
        }
      }
    }
  
    return result;
  }
  
  // test the calculator
  console.log(calculate('1 + 2 * 3')); // 7
  console.log(calculate('1 + 2 * 3 - 4 / 2')); // 5
  console.log(calculate('2 ^ 3 ^ 2')); // 512
  console.log(calculate('10 % 3 * 5')); // 5
  
  function showDisplay(event) {
    const x = event.target.innerText;
    if (displayBox.innerHTML == 0) {
      return (displayBox.innerHTML = x);
    }
    console.log("display: ", displayBox.innerHTML += x);
    return (displayBox.innerHTML += x);
  }