const a = Number(prompt("Digite um número"))
const b = Number(prompt("Digite um número"))
const c = Number(prompt("Digite um número"))

if(a == b) { //Equação do primeiro grau
  if(b == 0) {
    console.log("não existe raíz")
  }
  else {
    const raiz = (-c/b)
    console.log("A raíz é:" + raiz)
  }
}
else {
  const delta = (b ** 2) - (4 * a * c)
  if(delta < 0) {
    console.log("Não existe raízes")
  }
  else if(delta != 0) {
    const raiz1 = (-b + delta ** (1 / 2)) / (2 * a)
    const raiz2 = (-b - delta ** (1 / 2)) / (2 * a)

    console.log("As raízes são:" + raiz1 + " e " + raiz2)    
  }
  else {
    raiz = -b / (2 * a)
    console.log(" A raíz é: " + raiz)
  }
}