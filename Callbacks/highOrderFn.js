/*
    The high order function receive a function as argument or return a function as output
*/
//first is a function as argument, in this case multiplier is our argument
function getMultiplier (multiplier) {
    //returning other function as output, in this case will return the number argument multiplied for multiplier
    return function(number) {
        return number * multiplier;
    }
}

const double = getMultiplier(2);
const triple = getMultiplier(3);

console.log(double(10))
//output: 10 * 2 = 20
console.log(triple(10))
//output: 10 * 3 = 30
