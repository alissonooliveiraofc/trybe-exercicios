let peça = "alisson";

switch (peça.toLowerCase()) {
  case "peão":
    console.log("Para frente");
    break;

  case "torre":
    console.log("Horizontal e vertical");
    break;

  case "cavalo":
    console.log("Em L");
    break;

  case "bispo":
    console.log("Diagonal");
    break;

  case "rainha":
    console.log("Todos os lados");
    break;

  case "rei":
    console.log("Todos os lados, porém apenas uma casa");
    break;

  default:
    console.log("Peça inválida");
    break;
}
