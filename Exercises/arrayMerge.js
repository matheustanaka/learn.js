function arrayMerge(array1,array2){
    // Retornar uma array contendo todos os elementos do array 1 e todos os elementos do array 2 recebidos na function
    // Exemplo: array1 = ["gato", "lebre","cachorro"] array2 = ["tartaruga","esquilo"]
    array1 = ["gato", "lebre","cachorro"];
    array2 = ["tartaruga","esquilo"];

    const newArr = [...array1, ...array2];

    console.log(newArr);
  }
// Output = ["gato","lebre","cachorro","tartaruga","esquilo"]
  arrayMerge();
//Outras formas de resolver: https://dmitripavlutin.com/javascript-merge-arrays/