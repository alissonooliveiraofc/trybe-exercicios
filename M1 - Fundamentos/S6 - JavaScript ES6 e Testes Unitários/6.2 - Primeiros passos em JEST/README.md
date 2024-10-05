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
