/**
 * Create an object using breacket and dot notation that represents the characters and related data you may find in a game of Clue.
 */

var game = {};

game.murderer = "??";

//An object has a key and a value
//So what could be the key here? the key is the number of indexes

game["weapons"] = [
  { type: "lasers", location: "lab" },
  { type: "angry cats", location: "bedroom" },
  { type: "dish soap", location: "bathroom" },
];

game.name = [];

game.name[0] = "Miss Scarlet";
game.name.push("Mr. Green");
