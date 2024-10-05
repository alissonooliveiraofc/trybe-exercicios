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
