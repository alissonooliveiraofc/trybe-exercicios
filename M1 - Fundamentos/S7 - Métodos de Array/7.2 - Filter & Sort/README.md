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
