/**
 * Bracket notation can also be used to create properties.
 * Functionally, bracket notation is the same as dot notation.
 * However, the syntax looks entirely different. Both notations are interchangeable.
 */
var person = [];

person.name = "Mrs. White";

var who = person.name;

//Use bracket [0] just because is a number, so when you're using string use dot, for example: person.name
person[0] = "I was not in the Billiards room";

//If you try to run this, you will get an error that plea is not defined
person[plea] = "I would never!";

//But now, if you try like that
person["plea"] = "I would never!";
//You will can run the code because the plea was defined
