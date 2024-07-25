let num1 = 20;
let num2 = 30;
let num3 = 30;

if (num1 > num2 && num1 > num3) {
  console.log(`${num1} é o maior número`);
} else if (num2 > num1 && num2 > num3) {
  console.log(`${num2} é o maior número`);
} else if (num3 > num1 && num3 > num2) {
  console.log(`${num3} é o maior número`);
} else if (num1 === num2 || num1 === num3) {
  console.log(`O maior número é ${num1}`);
} else if (num2 === num3) {
  console.log(`O maior número é ${num2}`);
}
