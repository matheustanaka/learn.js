const fetch = require('node-fetch');
async function objectData(url) {
  // esta function deve conseguir fazer o seguinte:
  // 1) Capturar a informaÃ§Ã£o da url recebida como parametro (Arquivo JSON)
  //  1.1) url a ser utilizada para testes: https://storage.googleapis.com/internship_test/orders.json
  // 2) Escrever um codigo que consiga verificar o valor de todos os produtos
  // 3) Retornar o NOME do produto mais caro.

  // let response = await 

  url = "https://storage.googleapis.com/internship_test/orders.json";
  const response = await fetch(url);
  const data = await response.json();

  var largest = 0;
  var name = "";

  data.forEach((value) => {
    if(value.price > largest) {
      largest = value.price;
      name = value.product;
    } 
  })
console.log("Preço: " + largest + "\nNome do Produto: " + name)

}

objectData();