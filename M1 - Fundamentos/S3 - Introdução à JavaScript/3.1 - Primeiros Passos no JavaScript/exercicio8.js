let angulo1 = 60;
let angulo2 = 60;
let angulo3 = 60;

if (
  typeof angulo1 !== "number" ||
  angulo1 < 0 ||
  typeof angulo2 !== "number" ||
  angulo2 < 0 ||
  typeof angulo3 !== "number" ||
  angulo3 < 0
) {
  console.log("Erro! Ângulo Invalido!");
} else if (angulo1 + angulo2 + angulo3 === 180) {
  console.log(true);
} else {
  console.log(false);
}
