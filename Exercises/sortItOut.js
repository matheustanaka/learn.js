function sortItOut(array) {
    // Esta function deve receber um array numÃ©rico que se encontra fora de ordem, 
    // e ordena-lo do menor para o maior SEM usar a function sort().
    // Exemplo de array para usar como teste : [1,6,15,23,5,2,32,10]
  
    array = [1, 6, 15, 23, 5, 2, 32, 10];
    let temp; //troca de elementos
    for (let i = 0; i < array.length; i++) {
      // console.log("Primeiro loop: " + array[i]);
      for (let j = i; j < array.length; j++) {
        //  console.log("Segundo loop: " + array[j])
        if (array[i] > array[j]) {
          temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }
    }
    console.log(array)
  }
  
  sortItOut();