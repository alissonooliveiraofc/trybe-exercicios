## Exercícios :books:

### Exercicio 1 - Find :mag:

Utilize o find para encontrar a música com id igual a '31031685', caso ela exista:

```javascript
const songs = [
  { id: "31031685", title: "Partita in C moll BWV 997" },
  { id: "31031686", title: "Toccata and Fugue, BWV 565" },
  { id: "31031687", title: "Chaconne, Partita No. 2 BWV 1004" },
];

// Adicione seu código aqui
```

### Exercicio 2 - Find :mag:

Você deve desenvolver uma função que realiza a busca de um contato telefônico em uma lista. Sua tarefa é implementar a função `searchContact(contacts, name)`, que recebe uma lista de contatos e o nome do contato a ser encontrado. Se o contato for encontrado, retornar um objeto com todas as informações do contato utilizando spread operator. Se o contato não for encontrado, `retornar a mensagem “Contato não encontrado”.`

```javascript
const contacts = [
  { name: "João", phone: "123456789" },
  { name: "Maria", phone: "987654321" },
  { name: "Pedro", phone: "456123789" },
  { name: "Ana", phone: "789456123" },
  { name: "Carlos", phone: "321654987" },
  { name: "Mariana", phone: "654123987" },
  { name: "Lucas", phone: "987321654" },
  { name: "Laura", phone: "123789456" },
  { name: "Tiago", phone: "789123456" },
  { name: "Beatriz", phone: "456789123" },
];

const searchContact = (contacts, name) => {};
```

---

### Exercício 3 - forEach :arrows_counterclockwise:

Implemente a função `addGender` que adiciona a propriedade `“gender: “Animação”`” em cada objeto do array de cartoons.

```javascript
const cartoons = [
  { title: "Tom & Jerry", ageRating: "Livre" },
  { title: "Scooby-Doo", ageRating: "Livre" },
  { title: "Looney Tunes", ageRating: "Livre" },
  { title: "The Simpsons", ageRating: 12 },
  { title: "Avatar: The Last Airbender", ageRating: "Livre" },
  { title: "Pokémon", ageRating: "Livre" },
  { title: "Dragon Ball Z", ageRating: 12 },
  { title: "Adventure Time", ageRating: "Livre" },
  { title: "Gravity Falls", ageRating: "Livre" },
  { title: "Teen Titans Go!", ageRating: "Livre" },
];
```

---

### Exercício 4 - Find, forEach, Spread Operator :mag::arrows_counterclockwise:

Código JS:

```javascript
// Fonte: <https://restcountries.com/v2/all>

const countries = [
  {
    name: "Anguilla",
    region: "Americas",
    currencies: [{ code: "XCD", name: "East Caribbean dollar" }],
    capital: "The Valley",
    population: 13452,
    area: 91,
  },
  {
    name: "Brazil",
    region: "Americas",
    currencies: [{ code: "BRL", name: "Brazilian Real" }],
    capital: "Brasília",
    population: 213993437,
    area: 8515767,
  },
  {
    name: "Canada",
    region: "Americas",
    currencies: [{ code: "CAD", name: "Canadian Dollar" }],
    capital: "Ottawa",
    population: 38008005,
    area: 9976140,
  },
  {
    name: "China",
    region: "Asia",
    currencies: [{ code: "CNY", name: "Chinese Yuan" }],
    capital: "Beijing",
    population: 1439323776,
    area: 9640011,
  },
  {
    name: "France",
    region: "Europe",
    currencies: [{ code: "EUR", name: "Euro" }],
    capital: "Paris",
    population: 67022000,
    area: 551695,
  },
  {
    name: "India",
    region: "Asia",
    currencies: [{ code: "INR", name: "Indian Rupee" }],
    capital: "New Delhi",
    population: 1393409038,
    area: 3287263,
  },
  {
    name: "Mexico",
    region: "Americas",
    currencies: [{ code: "MXN", name: "Mexican Peso" }],
    capital: "Mexico City",
    population: 126190788,
    area: 1964375,
  },
  {
    name: "Russia",
    region: "Europe/Asia",
    currencies: [{ code: "RUB", name: "Russian Ruble" }],
    capital: "Moscow",
    population: 146599183,
    area: 17098242,
  },
  {
    name: "South Africa",
    region: "Africa",
    currencies: [{ code: "ZAR", name: "South African Rand" }],
    capital: "Pretoria",
    population: 59308690,
    area: 1221037,
  },
  {
    name: "United States",
    region: "Americas",
    currencies: [{ code: "USD", name: "United States Dollar" }],
    capital: "Washington, D.C.",
    population: 331449281,
    area: 9629091,
  },
];
```

1. Adicione a propriedade planet com o valor Earth em todos os países diretamente no array countries.

2. Para cada país, crie um objeto apenas com as informação do nome, código da moeda e nome da moeda. Essas informações devem ser armazenadas em um novo array. Faça esse exercício usando o método forEach, não vale map. 😜

- ex:

```javascript
{
  name: 'United States',
  currencyCode: 'USD',
  currencyName: 'United States Dollar',
}
```

3. Escreva uma função chamada `findCountry` que recebe dois parâmetros: `o array de países` e o `nome do país` desejado. Ao receber esses valores, a função deve retornar o elemento do país desejado. Caso não seja encontrado, a função deve lançar um `erro` com a mensagem: `“País não encontrado!”.`

4. Desenvolva uma função que crie uma cópia do array `countries` e adicione a Alemanha a esse novo array através do spread operator.

```javascript
const newCountry = {
  name: "Germany",
  region: "Europe",
  currencies: [{ code: "EUR", name: "Euro" }],
  capital: "Berlin",
  population: 83190556,
  area: 357386,
};
```

5. Desenvolva uma solução para percorrer o array `countries` e construir uma string para cada país com informações e formatação específicas. As propriedades são passadas como argumentos para a função buildString e adicionadas à string final. A string deverá ser construída com as propriedades `name, capital, currencies.code e currencies.name` separadas por um -.

O resultado final deve ser:

```javascript
Anguilla - The Valley - XCD - East Caribbean dollar
Brazil - Brasília - BRL - Brazilian Real
Canada - Ottawa - CAD - Canadian Dollar
China - Beijing - CNY - Chinese Yuan
France - Paris - EUR - Euro
India - New Delhi - INR - Indian Rupee
Mexico - Mexico City - MXN - Mexican Peso
Russia - Moscow - RUB - Russian Ruble
South Africa - Pretoria - ZAR - South African Rand
United States - Washington -  D.C. - USD - United States Dollar
```

---
