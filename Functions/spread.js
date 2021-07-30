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

/*
  Arguments Keyword
*/
const createTuple = function (a, b, c, ...d) {
  console.log(arguments);
  //Output: [it, be, could, anyone, no one]
  return [
    [a, c],
    [b, d],
  ];
};

createTuple("It", "be", "could", "anyone", "no one");

//function (a, b, c, ...d) = it could be anyone no one
//Using arguments keyword
//Output: [it, be, could, anyone, no one]

/*
arguments is an Array-like object accessible inside functions that contains the values of the arguments passed to that function.
*/
function func1(a, b, c) {
  console.log(arguments[0]);
  // expected output: 1

  console.log(arguments[1]);
  // expected output: 2

  console.log(arguments[2]);
  // expected output: 3
}

func1(1, 2, 3);

const add = function (a, b) {
  //if B exists, so the value is 2
  b = b || 2;
  console.log(arguments);
  return a + b;
};
add(3);
//Output:
// [Arguments] { '0': 3 }
// 5
