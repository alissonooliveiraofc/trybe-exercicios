## Exercícios para fixação :pencil2:

### Exercício 1 - Reduce :heavy_check_mark:

Faça uma função que some todos os números pares do array numbers usando reduce.

```javascript
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
```

---

### Exercício 2 - Reduce :heavy_check_mark:

Crie uma função usando dados de estudantes, para mostrar na tela um relatório que diz em qual matéria a pessoa foi melhor. Você usará tanto o `map` quanto o `reduce` dentro dele.

```javascript
const students = [
  {
    name: "Jorge",
    lastName: "Silva",
    age: 14,
    turn: "Manhã",
    courses: [
      { name: "Matemática", grade: 67 },
      { name: "Português", grade: 79 },
      { name: "Química", grade: 70 },
      { name: "Biologia", grade: 65 },
    ],
  },
  {
    name: "Mario",
    lastName: "Ferreira",
    age: 15,
    turn: "Tarde",
    courses: [
      { name: "Matemática", grade: 59 },
      { name: "Português", grade: 80 },
      { name: "Química", grade: 78 },
      { name: "Biologia", grade: 92 },
    ],
  },
  {
    name: "Jorge",
    lastName: "Santos",
    age: 15,
    turn: "Manhã",
    courses: [
      { name: "Matemática", grade: 76 },
      { name: "Português", grade: 90 },
      { name: "Química", grade: 70 },
      { name: "Biologia", grade: 80 },
    ],
  },
  {
    name: "Maria",
    lastName: "Silveira",
    age: 14,
    turn: "Manhã",
    courses: [
      { name: "Matemática", grade: 91 },
      { name: "Português", grade: 85 },
      { name: "Química", grade: 92 },
      { name: "Biologia", grade: 90 },
    ],
  },
  {
    name: "Natalia",
    lastName: "Castro",
    age: 14,
    turn: "Manhã",
    courses: [
      { name: "Matemática", grade: 70 },
      { name: "Português", grade: 70 },
      { name: "Química", grade: 60 },
      { name: "Biologia", grade: 50 },
    ],
  },
  {
    name: "Wilson",
    lastName: "Martins",
    age: 14,
    turn: "Manhã",
    courses: [
      { name: "Matemática", grade: 80 },
      { name: "Português", grade: 82 },
      { name: "Química", grade: 79 },
      { name: "Biologia", grade: 75 },
    ],
  },
];
```

Resultado esperado:

```javascript
[
  { name: "Jorge", course: "Português" },
  { name: "Mario", course: "Biologia" },
  { name: "Jorge", course: "Português" },
  { name: "Maria", course: "Química" },
  { name: "Natalia", course: "Português" },
  { name: "Wilson", course: "Português" },
];
```

---

### Exercício 3 - Default Parameters :heavy_check_mark:

Escreva uma função chamada `multiply` que multiplique dois números passados como argumentos. Atribua como default o valor 1, caso não seja passado nenhum valor como segundo parâmetro.

---

### Exercício 4 - Reduce neles! :heavy_check_mark:

Todos os exercícios devem ser realizados utilizando reduce e, se necessário, outra HOF.

Código base para os exercícios:

```javascript
const countries = [
  {
    name: "Afghanistan",
    region: "Asia",
    currencies: [{ code: "AFN", name: "Afghan afghani" }],
    capital: "Kabul",
    population: 40218234,
    area: 652230,
  },
  {
    name: "Aland Islands",
    region: "Europe",
    currencies: [{ code: "EUR", name: "Euro" }],
    capital: "Mariehamn",
    population: 28875,
    area: 1580,
  },
  {
    name: "Albania",
    region: "Europe",
    currencies: [{ code: "ALL", name: "Albanian lek" }],
    capital: "Tirana",
    population: 2837743,
    area: 28748,
  },
  {
    name: "Algeria",
    region: "Africa",
    currencies: [{ code: "DZD", name: "Algerian dinar" }],
    capital: "Algiers",
    population: 44700000,
    area: 2381741,
  },
  {
    name: "American Samoa",
    region: "Oceania",
    currencies: [{ code: "USD", name: "United States Dollar" }],
    capital: "Pago Pago",
    population: 55197,
    area: 199,
  },
  {
    name: "Andorra",
    region: "Europe",
    currencies: [{ code: "EUR", name: "Euro" }],
    capital: "Andorra la Vella",
    population: 77265,
    area: 468,
  },
  {
    name: "Angola",
    region: "Africa",
    currencies: [{ code: "AOA", name: "Angolan kwanza" }],
    capital: "Luanda",
    population: 32866268,
    area: 1246700,
  },
  {
    name: "Anguilla",
    region: "Americas",
    currencies: [{ code: "XCD", name: "East Caribbean dollar" }],
    capital: "The Valley",
    population: 13452,
    area: 91,
  },
];
```

- Crie a função `getPopulation` que retorne a quantidade total da população de todos os países.

> De olho na dica 👀: o valor inicial deve começar com 0, portanto o acumulador é um número.

- Crie a função `longestName` que deve retornar o país com o maior nome.

> De olho na dica 👀: o reduce consegue comparar o valor do primeiro com o segundo parâmetro. Compare o tamanho da string name do primeiro parâmetro com a do segundo parâmetro e retorne aquele que for maior.

```javascript
const expectedResult = {
  name: "American Samoa",
  region: "Oceania",
  currencies: [{ code: "USD", name: "United States Dollar" }],
  capital: "Pago Pago",
  population: 55197,
  area: 199,
};
```

- Crie uma função chamada `totalAreaByRegion` que recebe um parâmetro opcional region com o valor padrão `‘Europe’`. Essa função calcula e retorna a área total de todos os países de uma determinada região.

- Crie uma função chamada `getLargestCountriesByRegion` que retorna um objeto contendo os países com a maior área em cada região. O objeto de retorno deve ter a seguinte estrutura:

```javascript
{
  Asia: { name: 'Afghanistan', area: 652230 },
  Europe: { name: 'Russia', area: 17098242 },
  // ...
}
```

---
