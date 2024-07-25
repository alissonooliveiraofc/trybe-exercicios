let n = 5;

//usando apenas o for
// let line = "";
// let asterisks = "*";

// for (let index = 0; index < n; index += 1) {
//   line += asterisks;
// }

// for (let index = 0; index < n; index += 1) {
//   console.log(line);
// }

// console.log(line);

//usando métodos de strings
let asterisks = "*";

for (let index = 0; index < n; index += 1) {
  console.log(asterisks.repeat(n));
}
