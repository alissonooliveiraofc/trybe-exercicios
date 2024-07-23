const customer = {
  firstName: "Alisson",
  age: 29,
  job: "Software Engineer",
};

// Criação da função
const addProperty = (object, key, value) => {
  if (typeof object[key] === "undefined") {
    object[key] = value;
  }
};

addProperty(customer, "email", "alissonooliveiraofc@gmail.com");
addProperty(customer, "fone", "31983482588");
addProperty(
  customer,
  "userGithub",
  "https://www.github.com/alissonooliveiraofc"
);
addProperty(
  customer,
  "linkedIn",
  "https://www.linkedin.com/in/alissonooliveira/"
);

console.log(customer);
