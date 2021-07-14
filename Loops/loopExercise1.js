const game = {
  suspects: [
    {
      name: "Matheus",
      color: "Blue",
    },
    {
      name: "Jorge",
      color: "Red",
    },
  ],
};

var gameLoop = function (game) {
  for (var i = 0; i < game.suspects.length; i++) {
    console.log("OUTER OF LOOP");
    for (var key in game.suspects[i]) {
      console.log("INNER OF LOOP");
      if (game.suspects[i][key] === "Matheus") {
        console.log("found 'em !");
      } else {
        console.log("next time");
      }
    }
  }
};

gameLoop(game);

/*
 OUTPUT:
 OUTER OF LOOP
 INNER OF LOOP
 found 'em !
 INNER OF LOOP
 next time
 OUTER OF LOOP
 INNER OF LOOP
 next time
 INNER OF LOOP
 next time

*/
