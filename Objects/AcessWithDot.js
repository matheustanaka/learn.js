// DATA
var person = [];

// ASSIGNTMENT WITH DOTS
person.name = "Mrs. White";

var person = {
  name: "Mrs. White",
};

var who = person.name;

who; // return Mrs. White

// PASS BY REFERENCE
person.name = "Mr. White";

who; // return Mr.White

/*
    1 - Primitive values = String, number, boolean, null, undefined, these kind of things
    2- non-primitive values = Object, array, function, promise, thing like that

    Primitives values get pass by value and they are compared by value.
    Non-Primitive values get pass by reference, Non-primitive values are mutable data types. The value of an object can be changed after it gets created.
    
*/
