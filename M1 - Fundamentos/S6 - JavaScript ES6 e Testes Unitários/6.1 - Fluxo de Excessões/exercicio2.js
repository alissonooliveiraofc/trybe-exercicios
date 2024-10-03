const studentRegister = (name, age) => {
  try {
    validateNullInputs(name, age);
    verifyAge(name, age);

    if (name && age >= 18) {
      return `${name}, seja bem-vindo(a) à AuTrybe!`;
    }
  } catch (error) {
    return error.message;
  }
};

const validateNullInputs = (name, age) => {
  if (!name || !age) {
    throw new Error("Todas as informações são necessárias!");
  }
};

const verifyAge = (name, age) => {
  if (name && age < 18) {
    throw new Error(
      "Ops, infelizmente nesse momento você não pode fazer as aulas!"
    );
  }
};

console.log(studentRegister("Carlos", 18)); // Fluxo completo
console.log(studentRegister("Carlos", 12)); // Fluxo de exceção
console.log(studentRegister("Renan")); // Fluxo de exceção
