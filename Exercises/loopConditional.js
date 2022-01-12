function loopConditional(string, element) {
    // esta function deve retornar o numero de vezes que o elemento aparece na string recebida
    // exemplo: String: "Hoje eu acordei" element: "e" resultado: 3
    string = 'Hoje eu acordei';
    element = 'e';
    let count = 0;
    for (let i = 0; i < string.length; i++) {
      //checando cada posição da string
      console.log(string.charAt(i))
  
      //checando se cada posição da string for igual ao elemento 'e'
      if (string.charAt(i) == element) {
        //o contador vai contar + 1
        count++;
      }
    }
    //retornar o números de vezes que tinha o elemento 'e'
    return console.log("Número de vez que o elemento 'e' apareceu foi: " + count);
  }
  
  loopConditional();