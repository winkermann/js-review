// filter(): é utilizado em arrays para criar um novo array contendo apenas os elementos que atendem a uma determinada condição. Ele não modifica o array original, mas retorna um novo array com os elementos filtrados.
//sintaxe: novoArray = arrayOriginal.filter(callback(elemento, índice, arrayOriginal));

// filtrar números pares
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosPares = numeros.filter(numero => numero % 2 === 0);
console.log(numerosPares);  // Resultado: [2, 4, 6, 8, 10]

// filtrar palavras com mais de três letras
let palavras = ['cão', 'gato', 'elefante', 'pato', 'leão'];
let palavrasMaisDeTresLetras = palavras.filter(palavra => palavra.length > 3);
console.log(palavrasMaisDeTresLetras);  // Resultado: ['elefante', 'pato', 'leão']

// filtrar objeto com propriedade específica
let pessoas = [
  { nome: 'Alice', idade: 25 },
  { nome: 'Bob', idade: 30 },
  { nome: 'Charlie', idade: 22 },
  { nome: 'David', idade: 35 }
];

let pessoasComMenosDe30Anos = pessoas.filter(pessoa => pessoa.idade < 30);
console.log(pessoasComMenosDe30Anos);
// Resultado: [{ nome: 'Alice', idade: 25 }, { nome: 'Charlie', idade: 22 }]
