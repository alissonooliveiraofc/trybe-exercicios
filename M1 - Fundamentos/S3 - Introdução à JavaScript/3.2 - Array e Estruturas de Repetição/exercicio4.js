const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let sum = 0;
let average = 0;
let bigger = 0;
let impar = [];

for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
  average = sum / numbers.length;
  if (numbers[index] % 2 !== 0) {
    impar.push(numbers[index]);
  }
}

console.log(`Array: ${numbers}
Soma dos números: ${sum}
Média: ${sum / numbers.length} (${
  average > 20
    ? "O valor da média aritmética é maior que 20"
    : "O valor da média aritmética é menor ou igual a 20"
}).
Maior valor do Array: ${Math.max(...numbers)}
${impar ? `Ímpar: ${impar}` : "Nenhum valor ímpar encontrado"}`);
