// Escreva um programa que, dadas duas datas, determine qual
// delas ocorreu cronologicamente primeiro. Para cada uma das
// duas datas, leia três números referentes ao dia, mês e ano,
// respectivamente

const dia1 = Number(prompt("Digite um dia"))
const mes1 = Number(prompt("Digite um mes"))
const ano1 = Number(prompt("Digite um ano"))

const dia2 = Number(prompt("Digite um dia"))
const mes2 = Number(prompt("Digite um mes"))
const ano2 = Number(prompt("Digite um ano"))

if(ano1 < ano2) {
  console.log(dia1, mes1, ano1)
}
else if (ano2 < ano1) {
  console.log(dia2, mes2, ano2)
}
else if (mes1 < mes2) {
  console.log(dia1, mes1, ano1)
}
else if(mes2 < mes1) {
  console.log(dia2, mes2, ano2)
}
else if(dia1 < dia2) {
  console.log(dia1, mes1, ano1)
}
else {
  console.log(dia2, mes2, ano2)
}