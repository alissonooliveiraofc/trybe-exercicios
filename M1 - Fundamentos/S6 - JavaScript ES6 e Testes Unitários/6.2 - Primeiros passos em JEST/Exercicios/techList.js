const techList = (array, name) => {
  let data = [];
  if (array.length === 0) {
    return "Vazio!";
  }

  for (let index = 0; index < array.length; index += 1) {
    array.sort();
    data.push({
      tech: array[index],
      name,
    });
  }

  return data;
};

module.exports = techList;
