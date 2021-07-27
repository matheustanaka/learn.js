/*
  An arrow function expression is a compact alternative to a traditional function expression, 
  but is limited and can't be used in all situations.
  
  Differences & Limitations:
  Does not have its own bindings to this or super, and should not be used as methods.
  Does not have arguments, or new.target keywords.
  Not suitable for call, apply and bind methods, which generally rely on establishing a scope.
  Can not be used as constructors.
  Can not use yield, within its body.
*/



//traditional Function
function (a){
  return a + 100;
}

//arrow Function
// 1. Remove the word "function" and place arrow between the argument and opening body bracket
(a) => {
  return a + 100;
}
// 2. Remove the body braces and word "return" -- the return is implied.
(a) => a + 100;
// 3. Remove the argument parentheses
a => a + 100;

//Note: As shown above, the { braces } and ( parentheses ) and "return" are optional, but may be required.


// Traditional Function
function (a, b){
  return a + b + 100;
}

// Arrow Function
(a, b) => a + b + 100;

// Traditional Function (no arguments)
let a = 4;
let b = 2;
function (){
  return a + b + 100;
}

// Arrow Function (no arguments)
let a = 4;
let b = 2;
() => a + b + 100;

/*
  Likewise, if the body requires additional lines of processing, 
  you'll need to re-introduce braces PLUS the "return" 
  (arrow functions do not magically guess what or when you want to "return"):
*/

// Traditional Function
function (a, b){
  let chuck = 42;
  return a + b + chuck;
}

// Arrow Function
(a, b) => {
  let chuck = 42;
  return a + b + chuck;
}

/*
  And finally, for named functions we treat arrow expressions like variables:
*/

// Traditional Function
function bob (a){
  return a + 100;
}

// Arrow Function
let bob = a => a + 100;