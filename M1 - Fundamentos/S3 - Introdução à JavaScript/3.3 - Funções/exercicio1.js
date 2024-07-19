let balance = 1500;

function addBalance(value) {
  balance += value;
  return `Depósito de R$${value.toFixed(
    2
  )} realizado, seu novo saldo é de R$${balance.toFixed(2)}.`;
}

function withdrawBalance(value) {
  balance -= value;
  return `Saque de R$${value.toFixed(
    2
  )} realizado, seu novo saldo é de R$${balance.toFixed(2)}.`;
}

function applyInterest(tax) {
  balance = balance - (balance * tax) / 100;
  return `Juros de ${tax}% aplicado, seu novo saldo é de R$${balance.toFixed(
    2
  )}.`;
}

function division(value) {
  return `Seu novo saldo é de R$${(balance / value).toFixed(2)}.`;
}

console.log(`Saldo Antigo: ${balance.toFixed(2)}`);
console.log(" ");
// console.log(division(2));
