// 705.484.450-52 070.987.720-03
/*
7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.

7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10  9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.
*/

function ValidaCPF(cpfEnviado) {
  // define propriedades específicas de um objeto
  Object.defineProperty(this, 'cpfLimpo', {
    // enumerable: a propriedade aparecerá em iterações de loop/console.log
    enumerable: true,
    // getter para "limpar" o cpf, remover qualquer caracter que não seja número
    get: function () {
      return cpfEnviado.replace(/\D+/g, '');
    }
  });
}

// método para validar o cpf criado direto no prototype
ValidaCPF.prototype.valida = function () {
  // verifica se o parâmetro da função validaCPF não é indefinido
  if (typeof this.cpfLimpo === 'undefined') return false;
  // verifica se o tamanho do CPF é maior/menor que 11 caracteres
  if (this.cpfLimpo.length !== 11) return false;
  // verifica se o número do cpf é uma sequência (111.111.111-11) e retorna falso, uma vez que sem essa verificação esse cpf em sequência é considerado válido.
  if (this.isSequencia()) return false;

  // remove os dois últimos dígitos do cpf e armazena na variável os nove primeiros dígitos
  const cpfParcial = this.cpfLimpo.slice(0, -2);

  // armazena o primeiro dígito verificador do CPF
  const digito1 = this.criaDigito(cpfParcial);
  // armazena o segundo dígito verificador do CPF
  const digito2 = this.criaDigito(cpfParcial + digito1);

  // CPF completo já com os dois digitos verificadores
  const novoCpf = cpfParcial + digito1 + digito2;
  // retorna true se o valor do cpf com os dígitos verificadores for igual ao cpfLimpo.
  return novoCpf === this.cpfLimpo;
};

// cpfParcial porque pode ser cpf com nove ou dez dígitos
ValidaCPF.prototype.criaDigito = function (cpfParcial) {
  // converte o cpfParcial em array
  const cpfArray = Array.from(cpfParcial);
  // pega o tamanhã do array e soma 1 para fazer a contagem regressiva do cálculo de validação do cpf 10,9,8... terminando em 2
  let regressivo = cpfArray.length + 1;

  // o acumulador é iniciado com o valor 0
  // a variavel val é cada dígito do cpf que está armazenado no "cpfLimpo"
  // total é a variável que armazena o valor da soma de do cálculo de todos os dígitos
  const total = cpfArray.reduce((ac, val) => {
    // o acumulador é a soma do regressivo * valor
    // converte o valor de val que é uma string em número
    ac += (regressivo * Number(val));
    // decrementa o regressivo para realizar o cálculo do CPF de acordo com a regra
    regressivo--;
    return ac;
    // valor que inicia o acumulador
  }, 0);

  // calcula o dígito verificador depois do reduce
  const digito = 11 - (total % 11);
  // conforme regra do cálculo de CPF se o dígito for maior que 10 o valor considerado é 0;
  // coloca o 0 e digito como string para fazer a comparação do resultado do cálculo do cpf com a variável "cpfLimpo", uma vez que a variável é uma string
  return digito > 9 ? '0' : String(digito);
};

// método para checar se o cpf é uma sequência (111.111.111-11)
ValidaCPF.prototype.isSequencia = function () {
  // o repeat vai repetir o primeiro caractere da string pelo tamanho do array cpfLimpo
  const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
  // retorna true se a sequência for igual ao valor do cpfLimpo.
  return sequencia === this.cpfLimpo;
};

const cpf = new ValidaCPF('070.987.720-03');

if (cpf.valida()) {
  console.log('CPF válido');
} else {
  console.log('CPF inválido');
}
