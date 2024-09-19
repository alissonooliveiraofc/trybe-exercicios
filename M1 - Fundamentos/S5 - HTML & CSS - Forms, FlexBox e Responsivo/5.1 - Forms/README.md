## Exercícios :books:

### Exercício 1 - Para fixar 🎯

- [x] Adicione os campos de entrada para e-mail e senha.
- [x] Adicione um checkbox com o texto “Lembre-me”.
- [x] Adicione um botão com o texto “Entrar”.
- [x] Adicione os placeholder “Digite seu e-mail“ e “Digite sua senha” para os campos de e-mail e senha.
- [x] Adicione o atributo required para os campos de e-mail e senha.
- [x] Adicione o atributo autocomplete="off" para o campo de e-mail.
- [x] Adicione o atributo autofocus para o campo de e-mail.

---

### Exercício 2 - Para fixar 🎯

- [x] Crie um arquivo HTML `index.html`;
- [x] Crie um arquivo JavaScript `script.js`;
- [x] Adicione o `<script src="script.js"></script>` no final do body do HTML;
- [x] Copie esses três elementos em sua página, a saber `a`, `input type="text"`, `checkbox`.
- [x] Em seu arquivo Javascript, adicione os seletores abaixo no começo do arquivo.

Elemento a copiar:

```
<!-- elemento para copiar -->
<a href="www.betrybe.com" target="_blank" id="href">TRYBE</a>
<input type="text" id="input-text"/>
<input type="checkbox" id="input-checkbox" />
```

Seletores:

```
// SELETORES
const inputText = document.querySelector("#input-text");
const inputCheckbox = document.querySelector("#input-checkbox");
const hrefLink = document.querySelector("#href");
```

- Adicione um evento click no elemento a que possui o id href. Na função do evento, implemente o método preventDefault para prevenir o comportamento padrão do elemento. Ou seja, ao clicar no link, nada deve acontecer.

- Adicione um evento click no elemento checkbox que possui o id input-checkbox. Na função do evento, implemente o método preventDefault para prevenir o comportamento padrão do elemento. Ou seja, ao clicar na caixinha, nada deve acontecer.

- Adicione um evento keypress no elemento input type="text" que possui o id input-text. Na função do evento, implemente o método preventDefault de forma que somente o caractere a (letra “a” minúscula) possa ser digitado na caixinha.

> De olho na dica 👀: para capturar a tecla digitada, utilize o event.key.

---
