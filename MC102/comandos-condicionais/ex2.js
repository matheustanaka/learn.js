/*Escreva um programa que, dados três números inteiros,
imprima o maior deles.
 */

const number1 = Number(prompt("digite um número:"))
const number2 = Number(prompt("digite um número:"))
const number3 = Number(prompt("digite um número:"))

if(number1 > number2 && number1 > number3) {
  console.log(number1);
}
else if(number2 > number3) {
  console.log(number2);
}
else {
  console.log(number3)
}