const player = {
  name: "Marta",
  lastName: "Silva",
  age: 34,
  medals: {
    golden: 2,
    silver: 3,
  },
  bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
};

const achievements = `A jogadora ${player.name} ${player.lastName} foi eleita a melhor do mundo por ${player.bestInTheWorld.length} vezes.`;

console.log(achievements);
