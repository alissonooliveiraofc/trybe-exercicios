## Exercicios Filter & Sort :pencil:

### Exercício 1 - Filter

O array de objetos people, contêm elementos que representam pessoas com as propriedades `name` e `age`. Utilize o método `filter` para filtrar as pessoas que têm a idade igual ou superior a 30.

```javascript
const people = [
  { name: "João", age: 25 },
  { name: "Maria", age: 30 },
  { name: "Pedro", age: 20 },
  { name: "Ana", age: 35 },
];
```

---

### Exercício 2 - Filter e Destructuring

Considere o seguinte array de objetos que representa uma lista de jogadores de basquete:

```javascript
const players = [
  { name: "Michael Jordan", height: 198, team: "Chicago Bulls" },
  { name: "LeBron James", height: 203, team: "Los Angeles Lakers" },
  { name: "Kobe Bryant", height: 198, team: "Los Angeles Lakers" },
  { name: "Stephen Curry", height: 191, team: "Golden State Warriors" },
  { name: "Kevin Durant", height: 211, team: "Brooklyn Nets" },
];
```

Utilizando o método `filter` e `array destructuring`, crie uma função `filterHighPlayers` que retorna um novo array contendo apenas os jogadores com altura igual ou superior a 200 centímetros.

---

### Exercício 3 - Sort

1. Utilize o `sort` para ordenar o array pela idade das pessoas em ordem crescente.

```javascript
const people = [
  { name: "Mateus", age: 18 },
  { name: "José", age: 16 },
  { name: "Ana", age: 23 },
  { name: "Cláudia", age: 20 },
  { name: "Bruna", age: 19 },
];

// Adicione seu código aqui

console.log(people);
```

2. Modifique o `sort` do exercício anterior para que ordene o array pela idade das pessoas em ordem decrescente.

---

### Exercício 4 - Exercícios Bônus

Use o seguinte código como base:

```javascript
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
```

- Utilizando o método `filter` e object destructuring, crie uma função `filterStrongPokemons` que retorna um novo array contendo apenas os Pokémons com nível superior a 30.

- Utilizando os métodos `filter` e `map` encadeados, crie uma função `getStrongPokemonNames` que retorna um novo array contendo apenas os nomes dos Pokémons com nível superior a 50.

- Utilize o método `sort` para ordenar o array de Pokémons em ordem crescente com base no nível de cada Pokémon.

- Utilizando o método `sort` e default destructuring, crie uma função chamada `sortPokemons` que retorna o array de Pokémons ordenado por nível em ordem decrescente. Caso dois Pokémons tenham o mesmo nível, a ordenação deve ser feita pelo nome em ordem alfabética crescente.

---
