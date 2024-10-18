const pokemons = [
  { name: "Pikachu", type: "Elétrico", level: 25 },
  { name: "Charizard", type: "Fogo", level: 50 },
  { name: "Bulbasaur", type: "Planta", level: 10 },
  { name: "Gyarados", type: "Água", level: 40 },
  { name: "Alakazam", type: "Psíquico", level: 35 },
  { name: "Snorlax", type: "Normal", level: 50 },
  { name: "Mewtwo", type: "Psíquico", level: 70 },
  { name: "Dragonite", type: "Dragão", level: 55 },
  { name: "Mew", type: "Psíquico", level: 30 },
  { name: "Articuno", type: "Gelo", level: 60 },
  { name: "Zapdos", type: "Elétrico", level: 60 },
  { name: "Moltres", type: "Fogo", level: 60 },
  { name: "Gengar", type: "Fantasma", level: 45 },
  { name: "Machamp", type: "Lutador", level: 50 },
  { name: "Lapras", type: "Água", level: 35 },
  { name: "Venusaur", type: "Planta", level: 45 },
  { name: "Blastoise", type: "Água", level: 55 },
  { name: "Golem", type: "Pedra", level: 40 },
  { name: "Arcanine", type: "Fogo", level: 55 },
  { name: "Jolteon", type: "Elétrico", level: 40 },
];

// FILTRANDO POKEMONS ACIMA DO LEVEL 30
const filterStrongPokemons = (array) =>
  array.filter(({ level }) => level >= 30);

// FILTRANDO NOMES DOS POKEMONS ACIMA DO LEVEL 50
const getStrongPokemonNames = (array) =>
  array.filter(({ level }) => level >= 50).map(({ name }) => ({ name }));

// ORDENANDO POKEMONS POR LEVEL CRESCENTE
pokemons.sort((a, b) => a.level - b.level);

// ORDENANDO POKEMONS POR LEVEL DECRESCENTE
const sortPokemons = (array) =>
  array.sort(
    ({ level: aLevel, name: aName }, { level: bLevel, name: bName }) => {
      if (aLevel === bLevel) {
        return aName.localeCompare(bName);
      }

      return bLevel - aLevel;
    }
  );

console.log(sortPokemons(pokemons));
