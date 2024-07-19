let fatorial = 1;

// Nesse caso vamos começar em 10 e decrementar 1 a cada loop
for (let index = 10; index > 0; index -= 1) {
  fatorial *= index;
}

console.log(fatorial);
