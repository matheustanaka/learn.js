/*
    Crie um programa que escreva "Olá, mundo" na tela.  
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What is your name ? ", (name) => {
    console.log(`Hello World ${name}, good to see you bro !!!`);
    rl.close();
});

rl.on("close", () => {
  console.log("\nGood luck !!!");
  process.exit(0);
});