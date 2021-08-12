/*
    É o contexto atual de execução, em que valores e expressões são "visíveis" ou podem ser referenciadas. Se uma variável ou outra expressão não estiver "no escopo atual", então não está disponível para uso. Os escopos também podem ser em camadas em uma hierarquia, de modo que os escopos filhos tenham acesso aos escopos pais, mas não vice-versa.

Uma function serve como um procedimento em JavaScript, e portanto, cria um escopo, de modo que (por exemplo) uma variável definida exclusivamente dentro da função não pode ser acessada de fora da função ou dentro de outras funções.
*/

function exampleFunction() {
    var x = "declared inside function";  // x can only be used in exampleFunction
    console.log("Inside function");
    console.log(x);
}

console.log(x);  // Causes error because it's not inside of the function
//the var X just execute inside function because is not a global variable

//Transform the variable in blobal
var x = "declared outside function";

exampleFunction();

function exampleFunction() {
    console.log("Inside function");
    console.log(x);
}

console.log("Outside function");
console.log(x);
//You can use inside and outside the function