// reduce(): é utilizado em arrays para reduzir os elementos do array a um único valor. Ele iterativamente processa cada elemento do array, acumulando um resultado ao longo do caminho. O resultado final é o valor acumulado.
// sintaxe: resultado = arrayOriginal.reduce(callback(acumulador, elemento, índice, arrayOriginal), valorInicial);

// soma de elementos: 
let numeros = [1, 2, 3, 4, 5];
let soma = numeros.reduce(function(acumulador, numero) {
  return acumulador + numero;
}, 0);
console.log(soma);  // Resultado: 15

// encontrar o valor máximo de um array
let valores = [10, 5, 8, 20, 15];
let maximo = valores.reduce(function(acumulador, valor) {
  return Math.max(acumulador, valor);
}, valores[0]);
console.log(maximo);  // Resultado: 20

// O método reduce() é especialmente útil para realizar operações de agregação em arrays, como calcular somas, produtos, médias, encontrar valores máximos ou mínimos, entre outras.

let palavras = ['gato', 'cachorro', 'gato', 'pássaro', 'cachorro', 'gato'];
let contagem = palavras.reduce(function(acumulador, palavra) {
  acumulador[palavra] = (acumulador[palavra] || 0) + 1;
  return acumulador;
}, {});
console.log(contagem);
// Resultado: { gato: 3, cachorro: 2, pássaro: 1 }
