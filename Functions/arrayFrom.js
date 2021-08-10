//OBS - array-like object is when you have an array with index position and non-negative length property to know the number of elements in it
//Objects that have indexed properties and length are called array-like.

//Array-like object looks like:
var arr_like_obj = {
    0 : "we",
    1 : "are",
    2 : "capscode",
    length : 3
}

//Basically, array.from() is a function that will creates a new array instance from array-like or iterable object

console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]

//Syntax
// Arrow function
Array.from(arrayLike, (element) => { ... } )
Array.from(arrayLike, (element, index) => { ... } )

/*
Array.from() lets you create Arrays from:

 - array-like objects (objects with a length property and indexed elements); or
 - iterable objects (objects such as Map and Set).
 - Array.from() has an optional parameter mapFn, which allows you to execute a map() function on each element of the array being created.

More clearly, Array.from(obj, mapFn, thisArg) has the same result
*/

//Examples
//From string
Array.from('foo');
// [ "f", "o", "o" ]

//From Set
const set = new Set(['foo', 'bar', 'baz', 'foo']);
Array.from(set);
// [ "foo", "bar", "baz" ]

//From map 
const map = new Map([[1, 2], [2, 4], [4, 8]]);
Array.from(map);
// [[1, 2], [2, 4], [4, 8]]

const mapper = new Map([['1', 'a'], ['2', 'b']]);
Array.from(mapper.values());
// ['a', 'b'];

Array.from(mapper.keys());
// ['1', '2'];

//Using Arrow Function
// Using an arrow function as the map function to
// manipulate the elements
Array.from([1, 2, 3], x => x + x);
// [2, 4, 6]

// Generate a sequence of Numbers
// Since the array is initialized with `undefined` on each position,
// the value of `v` below will be `undefined`
Array.from({length: 5}, (v, i) => i);
// [0, 1, 2, 3, 4].

Array.from({length: 10}, (v, i) => i);
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].

