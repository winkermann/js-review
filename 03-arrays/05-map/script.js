// map():  é utilizado em arrays para criar um novo array contendo os resultados da aplicação de uma função a cada elemento do array original. Ele não modifica o array original, mas retorna um novo array com os resultados.
// sintaxe: novoArray = arrayOriginal.map(callback(elemento, índice, arrayOriginal));

//Dobrar cada elemento de um array:
let numeros = [1, 2, 3, 4, 5];
let numerosDobrados = numeros.map(function(numero) {
  return numero * 2;
});
console.log(numerosDobrados);  // Resultado: [2, 4, 6, 8, 10]

// Criar um Novo Array com Comprimentos de Strings
let palavras = ['cão', 'gato', 'elefante', 'pato', 'leão'];
let comprimentos = palavras.map(function(palavra) {
  return palavra.length;
});
console.log(comprimentos);  // Resultado: [3, 4, 8, 4, 4]

// Transformar Objetos em Apenas Nomes
let pessoas = [
  { nome: 'Alice', idade: 25 },
  { nome: 'Bob', idade: 30 },
  { nome: 'Charlie', idade: 22 }
];
let nomes = pessoas.map(function(pessoa) {
  return pessoa.nome;
});
console.log(nomes);  // Resultado: ['Alice', 'Bob', 'Charlie']
