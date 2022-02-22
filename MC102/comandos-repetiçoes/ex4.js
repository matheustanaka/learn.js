// Escreva um programa que leia um número inteiro positivo
// (n > 1) e imprima sua fatoração em números primos.

let n = Number(prompt("Digite um número"));
let divisor = 2;

while (n != 1) {
  if (n % divisor == 0) {
    console.log(divisor);
    n = n / divisor;
  } else {
    divisor++;
  }
}
