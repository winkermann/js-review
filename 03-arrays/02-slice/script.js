/* splice(): é utilizado para modificar um array, adicionando ou removendo elementos em posições específicas. 
Diferentemente do método slice(), o splice() altera o array original e retorna um array contendo os elementos removidos (caso algum seja removido).

sintaxe: array.splice(inicio, quantidade, elemento1, elemento2, ..., elementoN);

- inicio: Índice no array onde a modificação deve começar.
- quantidade: Número de elementos a serem removidos a partir do inicio. Se for 0, nenhum elemento é removido.
- elemento1, elemento2, ..., elementoN: Elementos a serem adicionados ao array a partir da posição inicio.
*/

let array = [1, 2, 3, 4, 5];

// Remover um elemento a partir do índice 2
let elementoRemovido = array.splice(2, 1);
console.log(array);  // Resultado: [1, 2, 4, 5]
console.log(elementoRemovido);  // Resultado: [3]

// Adicionar elementos a partir do índice 2
array.splice(2, 0, 'a', 'b');
console.log(array);  // Resultado: [1, 2, 'a', 'b', 4, 5]

// Substituir 2 elementos a partir do índice 1
array.splice(1, 2, 'x', 'y', 'z');
console.log(array);  // Resultado: [1, 'x', 'y', 'z', 4, 5]
