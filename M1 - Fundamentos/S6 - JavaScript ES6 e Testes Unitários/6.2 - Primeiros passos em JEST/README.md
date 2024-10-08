## Exercícios :books:

### Exercício 1 - Jest 🎯

Copie a função já implementada e desenvolva os testes. Separe a função e o teste em arquivos diferentes para evitar qualquer tipo de problema.

A função removeItem(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item, caso ele exista no array.

- Verifique se a chamada `removeItem([1, 2, 3, 4], 3)` retorna o array esperado.
- Verifique se a chamada `removeItem([1, 2, 3, 4], 3)` não retorna o array [1, 2, 3, 4].
- Verifique se a chamada `removeItem([1, 2, 3, 4], 5)` retorna o array esperado.

```
// removeItem.js

function removeItem(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}
```

---

### Exercício 2 - myFizzBuzz 🎯

Copie a função já implementada e desenvolva os testes. Separe a função e o teste em arquivos diferentes para evitar qualquer tipo de problema.

A função myFizzBuzz(num) recebe um número num como parâmetro. Assim:

- Caso num seja um número divisível por 3 e 5, a função retorna `"fizzbuzz"`.
- Caso num seja um número divisível apenas por 3, a função retorna `"fizz"`.
- Caso num seja um número divisível apenas por 5, a função retorna `"buzz".`
- Caso num seja um número que não é divisível nem por 3 nem por 5, a função retorna o `próprio número num.`
- Caso num não seja um número, a função retorna `false`.
  Realize os testes da função `myFizzBuzz(num)` para cada um dos cenários acima.

---

### Exercício 3 - encodeDecode 🎯

Considere o código a seguir para realizar o próximo exercício:
JS:

```
// encodeDecode.js

const mapString = (objectMap, string) => {
  const splitString = string.split('');
  const mappedArray = [];

  for (let index = 0; index < splitString.length; index += 1) {
    const character = splitString[index];
    const mappedValue = objectMap[character];

    if (mappedValue) {
      mappedArray.push(mappedValue);
    } else {
      mappedArray.push(character);
    }
  }

  return mappedArray.join('');
}

const encode = (string) => {
  const map = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  return mapString(map, string);
}

const decode = (string) => {
  const map = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  return mapString(map, string);
}
```

Para as funções `encode` e `decode`, crie os seguintes testes em Jest:

- Teste se `encode` e `decode` são funções.
- Para a função `encode`, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4, 5, respectivamente.
- Para a função `decode`, teste se os números 1, 2, 3, 4, 5 são convertidos nas vogais a, e, i, o, u, respectivamente.
- Teste se as demais letras e os demais números não são convertidos para cada caso.
- Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.

---

### Exercício 4 - TechList 🎯

A função `techList` recebe como parâmetros um array contendo uma lista de tecnologias e uma string com um nome. Para cada tecnologia no array, a função cria, em ordem alfabética, um objeto com a seguinte estrutura:

```
{
  tech: 'nomeTecnologia',
  name: name,
}
```

Implemente a função techList a partir dos testes a seguir. É importante nunca alterar os testes ou as variáveis já escritas no código.

```
const techList = require('./techList.js');

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologia deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

module.exports = techList;
```

---

### Exercício 5 - hydrate 🎯

A função `hydrate` recebe uma string no formato “número bebida” e retorna a sugestão de quantos copos de água você deve beber para se hidratar. Para cada bebida, deve-se tomar um copo de água, a fim de evitar ressaca. Exemplo de saída:

```
// string recebida
'1 cerveja'
// retorno da função
'1 copo de água'

// string recebida
'1 cerveja, 2 shots e 1 catuaba'
// retorno da função
'4 copos de água'

// string recebida
'2 caipirinhas'
// retorno da função
'2 copos de água'
```

Implemente a função `hydrate` a partir dos testes a seguir. É importante nunca alterar os testes ou as variáveis já escritas no código.

```
const hydrate = require('./hydrate.js');

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cerveja e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});
```

---
