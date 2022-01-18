/*
    Crie um script que leia o dia, o mês e o ano de nascimento de uma pessoa e mostre uma mensagem com a data formatada.
*/

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Qual o dia do seu nascimento? ", (dia) => {
    rl.question("Qual o seu mês de nascimento?", (mes) => {
        rl.question("Em qual ano você nasceu?", (ano) => {
            console.log(`Você nasceu no dia ${dia} do mês ${mes} no ano de ${ano}`);
            console.log(`${dia}/${mes}/${ano}`);
            rl.close();
        })
    })   
});

rl.on("close", () => {
  console.log("\nGood luck !!!");
  process.exit(0);
});