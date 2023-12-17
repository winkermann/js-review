// Suplerclass
function Account(branch, accountNumber, balance) {
  this.branch = branch;
  this.accountNumber = accountNumber;
  this.balance = balance;
}

// Métodos genéricos compartilhados entre os diferentes tipos de contasAccount.p

Account.prototype.withdraw = function (amount) {
  if (amount > this.balance) {
    console.log('Sorry, but you cant complete this transaction due to insufficient funds');
    console.log(`Current balance: R$${this.balance.toFixed(2)}`)
    return;
  } 
  this.balance -= amount;
  console.log(`Branch: ${this.branch}\nAccount Number: ${this.accountNumber}`)
  console.log(`Withdrawal amount: R$${amount} | Current balance: R$${this.balance.toFixed(2)}`)
};

Account.prototype.deposit = function (amount) {
  this.balance += amount;
  console.log(`Branch: ${this.branch}\nAccount Number: ${this.accountNumber}`)
  console.log(`Deposit amount: R$${amount} | Current balance: R$${this.balance.toFixed(2)}`)
};

Account.prototype.balance = function () {
  console.log(`Branch: ${this.branch}\nAccount Number: ${this.accountNumber}`)
  console.log(`Current balance: R$${this.balance.toFixed(2)}`)
  return this.balance;
};

// Cria uma classe filha chamada CurrentAccount que herda os parâmetros da super classe
function CurrentAccount(branch, accountNumber, balance, accountLimit) {
  Account.call(this, branch, accountNumber, balance);
  this.accountLimit = accountLimit;
}
// linka o construtor da conta corrente com o construtor da super classe
CurrentAccount.prototype = Object.create(Account.prototype);
CurrentAccount.prototype.constructor = CurrentAccount;

// Sobrescreve o método sacar para a conta corrente. 
// A conta corrente tem um limite para ficar negativa. 
CurrentAccount.prototype.withdraw = function (amount) {
  if (amount > (this.balance + this.accountLimit)) {
    console.log('Sorry, but you cant complete this transaction due to insufficient funds');
    console.log(`Current balance: R$${this.balance.toFixed(2)}`)
    return;
  } 
  this.balance -= amount;
  console.log(`Branch: ${this.branch}\nAccount Number: ${this.accountNumber}`)
  console.log(`Current balance: R$${this.balance.toFixed(2)}`)
};

console.log('********** CURRENT ACCOUNT **********')
const currentAccount = new CurrentAccount(3177, 2851, 0, 100);
currentAccount.deposit(10);
currentAccount.withdraw(110);
currentAccount.withdraw(10);
console.log();

// Cria uma classe filha chamada SavingAccount que herda os parâmetros da super classe
function SavingAccount(branch, accountNumber, balance) {
  Account.call(this, branch, accountNumber, balance);
}
// linka o construtor da conta corrente com o construtor da super classe
SavingAccount.prototype = Object.create(Account.prototype);
SavingAccount.prototype.constructor = SavingAccount;

console.log('********** SAVING ACCOUNT **********')
const savingAccount = new SavingAccount(3177, 2851, 0);
savingAccount.deposit(1550);
savingAccount.withdraw(110);
