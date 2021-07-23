const weapons = ["candlestick", "revolver", "lead pipe"];

const makeBroken = function (item) {
  return `broken ${item}`;
};

typeof _.map(weapons, makeBroken);

Array.isArray(_.map(weapons, makeBroken));

_.map(weapons, makeBroken);

const _ = {};

_.map = function (list, callback) {
  var storage = [];

  _.each(list, function (v, i, list) {
    storage.push(callback(v, i, list));
  });

  return storage;
};

_.map =
  ([1, 2, 3],
  function (val) {
    return val + 1;
  });
//Output: [2,3,4]

// Practicing
function multiplicaPor2(x) {
  return x * 2;
}

function dividepor3(x) {
  return x / 3;
}

let arr = [15, 12, 3, 24, 21];

// console.log('Array Original')
// console.log(arr)
// console.log('Resultado usando a função Map')
// arr.map(dividepor3);

// console.log('Array Original')
// console.log(arr)
// console.log('Resultado usando a função Map')
// arr.map(multiplicaPor2);

// Fazendo de outra forma

let strings = ["matheusin", "felipin", "bielin"];

console.log("Array original");
console.log(strings);
console.log("Novo Array com os nomes em maiusculo");

//Primeira forma
strings.map((n) => n.toUpperCase());

//Segunda forma, ambas as funções fazem a mesma coisa
strings.map(function toUpperCase(n) {
  return n.toUpperCase();
});
