const numbers = [4, 9, -1, 16, -5, 25];

const raiz = (array) => {
  return array.map((num) => {
    if (num < 0) {
      num === NaN;
    }

    return Math.sqrt(num);
  });
};

console.log(raiz(numbers));
