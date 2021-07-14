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

//First way of destructure
const firstColor = game.suspects[0].color;
const secondColor = game.suspects[1].color;

//Second way of destructure
var [color, color2] = [suspects[0].color, suspects[1].color];

//Third way of destructure
var [{ color: firstColor }, { color: secondColor }] = suspects;
