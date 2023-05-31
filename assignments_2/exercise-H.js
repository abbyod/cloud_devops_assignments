//Calculate the exponential of the even numbers from 5 to 20 Using a for loop
// and the helper functions provided.
function exponential(number) {
  return number * number;
}

function isEven(number) {
  return number % 2 === 0;
}

function calculate() {
  for (let number =5; number <= 20; number++){
    if (isEven(number)) {
      const result = exponential(number);
      console.log("Exponential of " + number + " is " + result);
    }
  }
}

calculate();