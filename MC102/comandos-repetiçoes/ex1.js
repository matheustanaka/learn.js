// • Escreva um programa que leia um número inteiro positivo
// (n > 1) e imprima os seus divisores
let n = Number(prompt("Digite um número"));

for (let i = 0; i <= n; i++) {
  if (n % i == 0) {
    console.log(i);
  }
}
