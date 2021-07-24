/*
  Basically, reduce will get all the values of array and transform them in unique object.

  for example: 
  let arr = [2, 4, 6]
  if we use reduce() here, we will reduce the array
  so, imagine that we are using a function that add all the numbers inside of the array.
  now the let arr will return the sum between 2 + 4 + 6
  [2, 4, 6] ---> [12]    
*/

let arr = [2, 4, 6];

const biggestNumber = arr.reduce((biggestNumber, currentNumber) => {
  return biggestNumber + currentNumber;
});

console.log(biggestNumber);
//Output = 12

//Other example
let name = ["Jorge", "Vanesa", "Matheus", "matheustanaka"];

const biggestName = name.reduce((biggestName, currentName) => {
  // console.log(biggestName);
  // console.log(currentName);

  if (currentName.length > biggestName.length) {
    return currentName;
  }

  return biggestName;
}, "");

console.log(biggestName);

//Other example
let names = [
  {
    name: "matheus",
    type: "men",
  },
  {
    name: "jorge",
    type: "men",
  },
  {
    name: "vanessa",
    type: "woman",
  },
];

const namesBySex = names.reduce((namesBySex, currentNames) => {
  namesBySex[currentNames.type] = namesBySex[currentNames.type] || [];
  namesBySex[currentNames.type].push(currentNames);

  return namesBySex;
}, {});

console.log(namesBySex.woman);
