## Exercícios :books:

### Exercício 1 - 🎯

- [x] Crie uma variável chamada player e atribua a ela um objeto que reúna todas as informações das variáveis listadas.

```
const name = 'Marta';
const lastName = 'Silva';
const age = 34;
const medals = { golden: 2, silver: 3 };
const bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];
```

---

### Exercício 2 - 🎯

- [x] Acesse as chaves `name`, `lastName` e `age` por meio da sintaxe `meuObjeto.chave`, concatene as informações e armazene na variável `message` no seguinte formato: “A jogadora Marta Silva tem 34 anos de idade”.

---

### Exercício 3 - 🎯

- [x] Acesse a chave `bestInTheWorld` por meio da sintaxe `meuObjeto['chave']` e armazene na variável `achievements` a quantidade de títulos no seguinte formato: “A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes”.

---

### Exercício 4 - 🎯

- [x] Adicione as propriedades `email`, `fone`, `userGithub` e `linkedIn` ao objeto customer (do exemplo anterior), chamando a função `addProperty`.

---

### Exercício 5 - Manipulação de objetos :dart:

- [x] Com base neste objeto, faça os exercícios a seguir.

```
const reader = {
  name: 'Julia',
  lastName: 'Pessoa',
  age: 21,
  favoriteBooks: [
    {
      title: 'O Senhor dos Anéis - a Sociedade do Anel',
      author: 'J. R. R. Tolkien',
      publisher: 'Martins Fontes',
    },
  ],
};
```

1.  Acesse as chaves `name`, `lastName` e `title` e exiba informações em um console.log() no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Senhor dos Anéis - a Sociedade do Anel’.”.

2.  Adicione um novo livro favorito na chave `favoriteBooks`, que é um `array` de objetos. Atribua a essa chave um objeto que contenha as seguintes informações:

```
{
  title: 'Harry Potter e o Prisioneiro de Azkaban',
  author: 'JK Rowling',
  publisher: 'Rocco',
}
```

3. Acesse as chaves `name` e `favoriteBooks` e faça um `console.log()` no seguinte formato:

> Julia tem {quantidade} livros favoritos.

`{quantidade}` corresponde à quantidade de livros favoritos, sendo um número gerado automaticamente pelo seu código. Caso a quantidade seja igual a 1, a frase deve ser:

> Julia tem 1 livro favorito.

---

### Exercício 6 - Manipulação de objetos 2 :dart:

- [x] Imagine que você seja responsável por cuidar do sistema de entrega de um restaurante e que precise enviar mensagens com as informações da compra. Para isso, use o seguinte código:

```
const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (fullOrder) => {
  // Adicione abaixo as informações necessárias.
}

console.log(customerInfo(order));

const orderModifier = (fullOrder) => {
  // Adicione abaixo as informações necessárias.
}

console.log(orderModifier(order));
```

1. Complete a função `customerInfo()` para que seu retorno seja: `'Olá, Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, Rua das Flores, Número: 389, AP: 701.'`.

> De olho na dica 👀: Note que o parâmetro da função já está sendo passado na chamada da função.

2. Complete a função `orderModifier()` para que seu retorno seja: `'Olá, Luiz Silva, o valor total de seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.'`

- Modifique o nome da pessoa compradora para Luiz Silva;
- Modifique o valor total da compra para R$ 50,00.

---

### Exercício 7 - Manipulação de objetos 3 :dart:

- [x] Suponha que você esteja trabalhando para uma escola e precise fazer algumas atualizações no sistema. Para isso, considere a seguinte base de dados:

```
const school = {
  lessons: [
    {
      course: 'Python',
      students: 20,
      professor: 'Carlos Patrício',
      shift: 'Manhã',
    },
    {
      course: 'Kotlin',
      students: 10,
      professor: 'Gabriel Oliva',
      shift: 'Noite',
    },
    {
      course: 'JavaScript',
      students: 738,
      professor: 'Gustavo Caetano',
      shift: 'Tarde',
    },
    {
      course: 'MongoDB',
      students: 50,
      shift: 'Noite',
    },
  ]
};
```

1. Crie uma função que obtenha o valor da chave de acordo com sua posição no array. Essa função deve possuir dois parâmetros: o objeto e a posição no array.
2. Crie uma função que retorne a soma do número total de estudantes em todos os cursos.
3. Crie uma função que verifica se uma determinada chave existe em todos os elementos do array `lessons`. O retorno deve ser um booleano (true ou false). Essa função deve possuir dois parâmetros: o objeto e o nome da chave.
4. Crie uma função para alterar o turno para noite no curso de Python. Essa função deve ter três parâmetros: a base de dados a ser modificada, o nome do curso e o novo valor da chave.

---

### Exercício 8 - Manipulação de objetos 4 :dart:

- [ ] Por meio do array de frutas chamado basket, crie um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor.

Por exemplo, o array `['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva']` deverá retornar:

```
{
  Melancia: 3,
  Abacate: 1,
  Uva: 1
}
```

Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: `Sua cesta possui: x Melancias, x Abacates....`

O array basket a ser utilizado:

```
const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];
```

---
