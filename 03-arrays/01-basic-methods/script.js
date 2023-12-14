console.log("- - - - - - - - - - PUSH / POP - - - - - - - - - -")
// push(): Adiciona elementos ao final do array
// pop(): remove o último elemento do array
let array1 = [1, 2, 3];
array1.push(4);   // [1, 2, 3, 4]
console.log(array1);
let elementoRemovido1 = array1.pop();  // [1, 2, 3], elementoRemovido = 4
console.log(elementoRemovido1);
console.log(array1);

console.log("- - - - - - - - - - UNSHIFT / SHIFT - - - - - - - - - -")
// unshift(): adiciona elementos ao início do array
// shift(): remove o primeiro elemento do array
let array2 = [2, 3, 4];
array2.unshift(1);  // [1, 2, 3, 4]
console.log(array2);
let elementoRemovido2 = array2.shift();  // [2, 3, 4], elementoRemovido = 1
console.log(elementoRemovido2);
console.log(array2);

console.log("- - - - - - - - - - INDEXOF / LASTINDEXOF - - - - - - - - - -")
// indexOf(): retorna o índice da primeira ocorrência do elemento no array. Retorna -1 se o elemento não estiver presente.
// lastIndexOf(): retorna o índice da última ocorrência do elemento no array. Retorna -1 se o elemento não estiver presente. 
let array4 = [1, 2, 3, 4, 2];
let indice = array4.indexOf(2);  // 1
let ultimoIndice = array4.lastIndexOf(2);  // 4
console.log(indice);
console.log(ultimoIndice);

console.log("- - - - - - - - - - SLICE - - - - - - - - - -")
/* slice(): é utilizado para criar uma cópia superficial (shallow copy) de uma parte de um array.
Ele não modifica o array original, mas retorna um novo array contendo os elementos especificados.
- array.slice(inicio, fim)
- início -> Índice do array onde a extração deve começar. Se o valor for negativo, indica um índice a partir do final do array. Se não for fornecido, o valor padrão é 0 (começa do início do array).
- fim -> Índice do array onde a extração deve terminar. O array resultante incluirá todos os elementos até este índice, mas não incluirá o elemento no índice especificado. Se o valor for negativo, indica um índice a partir do final do array. Se não for fornecido, ou se for maior que o comprimento do array, todos os elementos até o final do array serão incluídos.
*/
let array3 = [1, 2, 3, 4, 5];
let subArray1 = array3.slice(1, 4);
console.log(subArray1);  // Resultado: [2, 3, 4]
let subArray2 = array3.slice(2);
console.log(subArray2);  // Resultado: [3, 4, 5]
let subArray3 = array3.slice(-2);
console.log(subArray3);  // Resultado: [4, 5]
