/*
The spread operator is used to expand the array 
For example: 
*/
var middle = [3, 4, 5];
var arr = [1, 2, 6, 7];

/*
  Spread syntax can be used when all elements from an object 
  or array need to be included in a list of some kind.
*/
var middle = [3, 4, 5];
var arr = [1, 2, ...middle, 6, 7];
//Output: 1, 2, 3, 4, 5, 6, 7

//Other example
function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];

//Pass all the values inside of array to invoke the sum function.
//so function sum will recieve something like this:
//function sum(1, 2, 3)
console.log(sum(...numbers));
// expected output: 6

console.log(sum.apply(null, numbers));
// expected output: 6
