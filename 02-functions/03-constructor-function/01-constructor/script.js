/*
Uma função construtora em JavaScript é uma função que é usada para criar e inicializar objetos. Essa função é geralmente chamada com o operador new e, quando invocada dessa maneira, cria uma instância do tipo de objeto que está sendo construído. A ideia por trás das funções construtoras é fornecer uma maneira conveniente de criar várias instâncias de objetos sem a necessidade de repetir o mesmo código de inicialização.
*/

function Carro(marca, modelo, ano) {
  // Propriedades do objeto sendo construído
  this.marca = marca;
  this.modelo = modelo;
  this.ano = ano;

  // Método do objeto
  this.exibirDetalhes = function() {
      console.log(`Carro: ${this.marca} ${this.modelo} (${this.ano})`);
  };
}

// Criando uma instância usando a função construtora
var meuCarro = new Carro('Toyota', 'Corolla', 2022);

// Chamando o método da instância
meuCarro.exibirDetalhes();

/*
Neste exemplo, Carro é uma função construtora que aceita três parâmetros (marca, modelo, ano) e inicializa as propriedades do objeto usando o operador this. O método exibirDetalhes é adicionado como uma função membro do objeto. Quando você cria uma instância do objeto Carro usando new Carro(...), você está usando a função construtora para criar um novo objeto com as propriedades e métodos especificados.

As funções construtoras são frequentemente usadas em JavaScript para modelar e instanciar objetos que compartilham a mesma estrutura e comportamento.

fonte: chatGPT
*/