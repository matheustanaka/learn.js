//We use filter when you wanna filter some item inside array
//Filter always returns true, so if the operation is true, filter will returns the value that you are filtering.
//If the operation is false, filter will returns nothing.
//It's very different of map, because in filter you returns an shorter array than the original.
//While with map you have to returns the same size as the original array.
const _ = {};

//USING FOR LOOP
_.filter = function (arr, callback) {
  //create new array
  const storage = [];
  //loop through array
  for (let i = 0; i < arr.length; i++) {
    //check if callback returns true
    if (callback(arr[i], i, arr) === true) {
      //if returns true, push into array
      storage.push(arr[i]);
    }
  }
  return storage;
};

//USING EACH FUNCTION
_.filter = function (array, callback) {
  //create new arrays
  const storage = [];
  //loop through array
  _.each(array, function (item, i, list) {
    //check if cb returns true
    if (callback(item, i, list) === true) {
      //if returns true, push into array
      storage.push(item);
    }
  });
  //return the new array with the values filtered
  return storage;
};

const videoData = [
  {
    name: "Miss Scarlet",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
  {
    name: "Mrs. White",
    present: false,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
  {
    name: "Reverend Green",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
  {
    name: "Rusty",
    present: false,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
  {
    name: "Colonel Mustard",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
];

//SOLVING THE PROBLEM
_.filter(videoData, function (suspectsObject) {
  return suspectsObject.present;
});

let matricula = [
  {
    name: "Matheus Tanaka",
    numMatricula: 12,
    isActive: true,
    date: "12/07/21",
  },
  {
    name: "Joao Tanaka",
    numMatricula: 14,
    isActive: false,
    date: "02/07/21",
  },
  {
    name: "Vanessa",
    numMatricula: 1,
    isActive: true,
    date: "25/07/21",
  },
  {
    name: "Jorge",
    numMatricula: 15,
    isActive: false,
    date: "22/07/21",
  },
];

function isActive(active) {
  return active.isActive === false;
}

function date(date) {
  return date.date === "22/07/21";
}

// matricula.filter(isActive)
// matricula.filter(date)

//Generics function
//Inline Function
// matricula.filter((name) => (name.name[0] === "M"))
//Inline Function
// matricula.filter((num) => (num.numMatricula == 1))

//return all of those names
matricula.filter((name) => name.name.length > 0);
/* 
THE FILTER FUNCTION WILL RETURN A BOOLEAN, 
SO, YOU WILL GIVE A PARAMETER TO THE FUNCTION AND FILTER WILL RETURN TRUE OR FALSE */
/*
  IF THE PARAMETER WILL BE EQUALS TRUE, 
  FILTER WILL RETURN SOMETHING, 
  IF FILTER EQUALS FALSE, 
  THEN WILL RETURN NOTHING
*/
