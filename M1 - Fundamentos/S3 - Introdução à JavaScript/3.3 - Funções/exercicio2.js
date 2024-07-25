const trybeBankCustomers = ["Oliva", "Nat", "Gus"];

// escreva aqui sua função
function addCustomer(customerName) {
  if (typeof customerName !== "string") {
    console.log("O parâmetro passado  deve ser do tipo string!");
  }

  trybeBankCustomers.push(customerName);
  return "Cliente cadastrado com sucesso!";
}

addCustomer("Alisson");
addCustomer("Lorena");
console.log(trybeBankCustomers);
