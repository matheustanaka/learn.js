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
    //check if cb returns true
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
