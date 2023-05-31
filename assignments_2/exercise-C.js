function numberChecker(num) {
  if (num > 20) {
    return `${num} is greater than 20`;
  } else if (num === 20) {
    return `${num} is equal to 20`;
  } else if (num < 20) {
    return `${num} is less than 20`;
  } else {
    return `${num} isn't even a number :(`;
  }
}

//this function checks numbers to see if they are greater than 20
//if the number entered is greater than 20, it will return a message saying so 
//if it is equal to 20, it will it will return a message saying so 
//if it is less tham 20, it will return a message saying so 
//if a number is not entered, it will return a message saying the value entered is not a number