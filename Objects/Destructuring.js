const [a, b] = [true, false];
//Output a = true , b = false.

//Now, if you try to put another const inside of array
const [c, d, e] = [true, false];
//Output c = true , d = false , e = undefined.
//The const "e" is returning undefined because the destructuring follows the order of array.
//So, if you try to put:
const [c, d, e] = [true, false, true];
//Now the const "e" will return true because it follows the order of array.

//You can't reassign const, because const is immutable
//Now let and var is mutable, so you can reassign them with other values.
const a = 10;
//trying to reassign the value of "a"
a = 2;
console.log(a);
//Output: Uncaught TypeError: Assignment to constant variable. at <anonymous>

let b = 5;
//trying to reassign the value of "b"
b = 10;
//the let "b" reassigned the value to 10 instead of 5
console.log(b);
//Output: let b = 10;

/*
ADVICE: properties can be reassigned. For example:
*/
const j = { x: 1 };

j.x = 2;
console.log(j);
//Output: Now the value of the property was CHANGED, because the property can be CHANGED.
//While the const not, because the value of const is immutable.

//If you try to change the value of const J
j = {};
console.log(j);
//Output: Uncaught TypeError: Assignment to constant variable.

//Challenge

//1. Create an object that looks like this:
// {"name": "Rusty", "room":"kitchen", "weapon":"candlestick"}
// 2. Extract out the weapon and location using destructuring

const { name, room, weapon } = {
  //Destructuring the constant
  name: "Rusty",
  room: "kitchen",
  weapon: "candlestick",
};

//Extract out the weapon and location.
console.log(room, weapon);
