let taxesWithDraw = 0.05;
let taxesDeposit = 0.10;

class Account {
  constructor(number, client, balance,agency, limit){
    this._number = number;
    this._client = client;
    this._balance = balance;
    this._agency = agency;
    this._limit = limit;
  }

  withdrawCash(valueWithDraw) {
     let newBalance = this._balance - valueWithDraw - taxesWithDraw
      return console.log(`Seu Saldo total é de ${newBalance}`)
  }

  deposit(valueDeposit){
      return console.log(`O seu saldo após o deposito é ${this._balance + valueDeposit - taxesDeposit}`)
  }
}

class CurrentAccount extends Account {
  constructor(number, client, balance,agency, accountSpecial){
    super(number, client, balance,agency)
    this._accountSpecial = accountSpecial
  }
  withdrawCash(valueWithDraw) {
    let newBalance = this._balance - valueWithDraw - ( taxesWithDraw / 2)
     return console.log(`Seu Saldo total é de ${newBalance}`)
 }

 deposit(valueDeposit){
  let newBalance = this._balance + valueDeposit -( taxesDeposit / 2)
     return console.log(`O seu saldo após o deposito é ${newBalance}`)
 }
}

class SavingsAccount extends Account {
  constructor(number, client, balance,agency, variation){
    super(number, client, balance,agency,)
    this._variation = variation
  }

  generateIncome() {
    let Income = this._balance + ((5 * this._balance) / 100)
    return console.log(`O seu saldo após o deposito é ${Income}`)
  }
}

// funcionarios

class Employee{
  constructor(name, cpf, salary){
    this._name = name;
    this._cpf = cpf;
    this._salary = salary;
  }
  createCredit(valueCredit){
     return console.log(`${this._name} concendeu um emprestimo a fulano no valor de ${valueCredit}`)
  }
}


class Manager extends Employee {
   
  increaseLimit(valueIncrease, account){
      console.log(`o seu novo limite é ${account._limit + valueIncrease}`)
  }
}

class cashier extends Employee {
   
  validation(account){
   if(account._number < 0 || account._number === undefined){
       return console.log('O numero da conta está incorreto')
   }else if(account._client === "" || account._client === undefined){
     return console.log("O campo cliente está com erro, faça a verificação")
   }else if(account._balance === undefined ){
     return console.log('O saldo nao foi cadastrado corretamente')
   }else if(account._agency === "" || account._agency === undefined){
     return console.log("A agencia nao foi cadastrada corretamente ou está invalida")
   }else if(account._limit != account._limit || account._limit === undefined){
     return console.log("O limite do cliente nao está cadastrado corretamente")
   }else(
     console.log('Cadastro correto')
   )
    
     }
}


