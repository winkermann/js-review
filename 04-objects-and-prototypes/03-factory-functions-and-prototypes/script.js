// desacoplando os métodos para utilizar composição evitando que o código fique "amarrado" e que a cada instância de um objeto person sejá instanciado os métodos, o que consome recursos.
// isso se chama composição. A composição é uma alternativa à herança e é considerada uma prática mais flexível e modular.
const greeting = {
  greeting() {
    console.log(`${this.name} is greeting you!`);
  }
};

const drink = {
  drink() {
    console.log(`${this.name} is drinking water!`);
  }
};

const eat = {
  eat() {
    console.log(`${this.name} is eating a sandwich!`);
  }
};

// Object.assign() é usado para copiar os valores de todas as propriedades próprias enumeráveis de um ou mais objetos de origem para um objeto de destino. Ele retorna o objeto de destino modificado.
// sintaxe: Object.assign(target, source1, source2, ...);
const personPrototype = Object.assign({}, greeting, drink, eat)

function person(name, lastName) {
  // linka os prototypes com o objeto person
  return Object.create(personPrototype, {
    name: { value: name },
    lastName: { value: lastName },
  });
};

const person1 = person('Winkermann', 'Meschke');
console.log(person1);
const person2 = person('Diego', 'Moura');
console.log(person2);
