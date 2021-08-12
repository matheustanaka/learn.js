/*
In JavaScript, a callback function is a function that is passed into another function as an argument. 
This function can then be invoked during the execution of that higher order function (that it is an argument of).

Since, in JavaScript, functions are objects, functions can be passed as arguments.
*/

const isEven = (n) => {
    return n % 2 == 0;
  }
   
  let printMsg = (evenFunc, num) => {
    const isNumEven = evenFunc(num);
    console.log(`The number ${num} is an even number: ${isNumEven}.`)
  }
   
  // Pass in isEven as the callback function
  printMsg(isEven, 4); 
  // Prints: The number 4 is an even number: True.
  