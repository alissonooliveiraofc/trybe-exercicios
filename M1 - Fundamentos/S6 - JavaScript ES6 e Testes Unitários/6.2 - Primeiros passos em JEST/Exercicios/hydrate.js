const hydrate = (string) => {
  let sum = 0;
  const arrayNumbers = string.match(/\d+/g);

  for (let index = 0; index < arrayNumbers.length; index += 1) {
    sum += Number(arrayNumbers[index]);
  }

  return sum === 1 ? `${sum} copo de água` : `${sum} copos de água`;
};

console.log(hydrate("1 cerveja"));

module.exports = hydrate;
