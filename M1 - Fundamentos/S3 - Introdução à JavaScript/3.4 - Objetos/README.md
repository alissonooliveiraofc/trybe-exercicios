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

### Exercício 5 - Objetos :dart:

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

### Exercício 6 - Manipulação de objetos :dart:

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
