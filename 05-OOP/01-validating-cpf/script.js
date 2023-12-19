class ValidaCPF {
  constructor(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
      // o valor não pode ser alterado usando atribuição (=)
      writable: false,
      // aparece em iterações de loop / console.log
      enumerable: true,
      // não pode ser alterada ou removida após sua criação
      configurable: false,
      // remove todos os caracteres não numéricos do "cpfEnviado";
      value: cpfEnviado.replace(/\D+/g, '')
    })
  }

  eSequencia() {
    return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
  }

  geraNovoCPF() {
    // remove os dois últimos dígitos do cpf e armazena na variável os nove primeiros dígitos
    const cpfParcial = this.cpfLimpo.slice(0, -2);
    // armazena o primeiro dígito verificador do CPF
    const digito1 = this.geraDigito(cpfParcial);
    // armazena o segundo dígito verificador do CPF
    const digito2 = this.geraDigito(cpfParcial + digito1);
    this.novoCPF = cpfParcial + digito1 + digito2;
  }

  geraDigito(cpfParcial) {
    let total = 0;
    let reverso = cpfParcial.length + 1;

    // "numeroCpf" é uma string que vem do cpfParcial;
    for (let numeroCpf of cpfParcial) {
      total += reverso * Number(numeroCpf);
      reverso--;
    }

    const digito = 11 - (total % 11);
    return digito <= 9 ? String(digito) : '0';

  }

  valida() {
    // verifica se o parâmetro da função validaCPF não é indefinido
    if (!this.cpfLimpo) return false;
    // verifica se o tamanho do CPF é maior/menor que 11 caracteres
    if (this.cpfLimpo.length !== 11) return false;
    // verifica se o número do cpf é uma sequência (111.111.111-11) e retorna falso, uma vez que sem essa verificação esse cpf em sequência é considerado válido.
    if (this.eSequencia()) return false;
    this.geraNovoCPF();

    return this.novoCPF === this.cpfLimpo;
  }
}

const validaCpf = new ValidaCPF('070.987.720-03');
console.log(validaCpf.valida());

if (validaCpf.valida()) {
  console.log('CPF válido');
} else {
  console.log('CPF inválido');
}
