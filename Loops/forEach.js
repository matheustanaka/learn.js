//USING FUNCTIONS

function CreateSuspectsObjects(name) {
  return {
    name: name,
    color: name.split(" ")[1],
    speak() {
      console.log("My name is", name);
    },
  };
}

var suspects = ["Miss Scarlet", "Colonel Mustard", "Mrs. White"];

var suspectsList = [];

//USING FOR LOOP
for (var i = 0; i < suspects.length; i++) {
  suspectsList.push(CreateSuspectsObjects(suspects[i]));
}

//USING FOREACH FUNCTIONS
suspects.forEach(function (suspect) {
  suspectsList.push(CreateSuspectsObjects(suspect));
});

//Explanation
const _ = {};

_.each = function (list, callback) {
  if (Array.isArray(list)) {
    //true
    for (var i = 0; i < list.length; i++) {
      //call the callback with a list item
      callback(list[i], i, list);
    }
  } else {
    //object
    for (var key in list) {
      callback(list[key], ley, list);
    }
  }
};

_.each(["matheus", "jorge", "lucas"], function (name, i, list) {
  if (list[i + 1]) {
    console.log(name, "is younger than", list[i + 1]);
  } else {
    console.log(name, "is the oldest");
  }
});
