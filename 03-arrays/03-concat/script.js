// concat(): é usado para combinar dois ou mais arrays, criando um novo array que contém os elementos dos arrays originais. Este método não modifica os arrays originais, mas cria um novo array contendo cópias dos elementos dos arrays de origem.

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [7, 8, 9];

let novoArray1 = array1.concat(array2, array3);
console.log(novoArray1);  // Resultado: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Além de combinar arrays, você também pode adicionar elementos individuais ao novo array, incluindo-os como argumentos após os arrays.

let array4 = [1, 2, 3];
let novoArray2 = array4.concat('a', 'b', 'c');
console.log(novoArray2);  // Resultado: [1, 2, 3, 'a', 'b', 'c']

// é possível também concatenar arrays utilizando o spread operator (...), que é utlizado para espalhar elementos de um array. 

let array5 = [1, 2, 3];
let array6 = [4, 5, 6];
let novoArray3 = [...array5, ...array6];
console.log(novoArray3);  // Resultado: [1, 2, 3, 4, 5, 6]

let array7 = [1, 2, 3];
let novoArray4 = [...array7, 4, 5, 6, ...['a', 'b', 'c']];
console.log(novoArray4);  // Resultado: [1, 2, 3, 4, 5, 6, 'a', 'b', 'c']
