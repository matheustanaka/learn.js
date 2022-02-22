//  Escreva um programa que leia um número inteiro positivo
// (n > 1) e imprima o número de seus divisores.
const n = Number(prompt("Digite um número"));

let contador = 0;

for (let i = 0; i <= n; i++) {
  if (n % i == 0) {
    contador++;
    console.log(contador);
  }
}
