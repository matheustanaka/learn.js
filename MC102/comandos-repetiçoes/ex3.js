// Escreva um programa que leia um número inteiro positivo
// (n > 1) e determine se ele é primo.

const n = Number(prompt("Digite um número"));
let contador = 0;
for (let i = 0; i <= n; i++) {
  if (n % i == 0) {
    contador++;
  }
}
if (contador == 2) {
  console.log("é primo pois tem " + contador + " divisores");
} else {
  console.log("é composto pois tem " + contador + " divisores");
}
