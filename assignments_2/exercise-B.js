//In a node REPL, what is the typeof a true or false?
//Pair up and correct the following function so that the output returns 
//"You've given me a bool, thanks!"

function boolChecker(bool) {
  if (typeof bool === "boolean") {
    return "You've given me a bool, thanks!";
  }
  else {
    return "No bool, not cool.";
  }
}

var result = boolChecker(true);
console.log(result);
