/* Arrays are a data structure. Fundamentally, arrays are an object. 
However, they are commonly used for ordered data like lists. */

// Brackets [] are objects;

var person = [];

// ASSIGNTMENT WITH DOTS
person.name = "Mrs. White";

var who = person.name;

who; // return Mrs. White

// PASS BY REFERENCE
person.name = "Mr. White";

who; // return Mr.White

/*Objects represent “things” with characteristics (aka properties), 
while arrays create and store lists of data in a single variable. */

typeof White === "array"; // return false
typeof White === "object"; // return true

/*
  The only difference between array and object is that array have some methods on them, 
  and methods is just a function.
  For example: array.push(), you're calling a function that push something inside of array 
*/
