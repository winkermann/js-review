/*
Escreva uma função que recebe um número e retorne o seguinte: 
- Número divisível por 3 = Fizz
- Número divisível por 5 = Buzz
- Número divisível por 3 e 5 = FizzBuzz
- Número não divisível por 3 e 5 = retorna o próprio número
- Checar se o input é do típo number = retornar o próprio número
- Use a função com números de 0 a 100
*/

const fizzBuzz = (n) => {
  if (typeof n !== 'number') return n;
  if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
  if (n % 3 === 0) return 'Fizz'
  if (n % 5 === 0) return 'Buzz'
  return n;
}

for (let i = 0; i <= 100; i++) {
  console.log(i, fizzBuzz(i))
}