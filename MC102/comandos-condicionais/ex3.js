/*
Escreva um programa que, dados três números inteiros,
imprima os números em ordem crescente.
*/

if(number1 <= number2 && number1 <= number3) {  //number1 é menor
    if(number2 <= number3){
      console.log(number1, number2, number3)
    }
    else {
      console.log(number1, number3, number2)
    }
  }
  else if (number2 <= number3){     //number2 é menor
    if(number2 <= number1) {
      console.log(number2, number1, number3)
    }
    else {
      console.log(number2, number3, number1)
    }
  }
  else {        //number3 é menor
    if(number1 <= number2) {
      console.log(number3, number1, number2)
    }
    else {
      console.log(number3, number2, number1)
    }
  }