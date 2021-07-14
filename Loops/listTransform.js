/*
  LIST TRANSFORM 
*/

const game = {};
game["suspects"] = [];

// The same below
// const game = {
//   ["suspects"]: [],
// };

// The function Push is adding name and color
game.suspects.push({
  name: "Rusty",
  color: "Orange",
});

// The same below
// const game = {
//   ["suspects"]: [{
//   name: "Rusty",
//   color: "Orange",
// }],
// };

game.suspects[1]({
  name: "Miss Scarlet",
  color: "Red",
});
