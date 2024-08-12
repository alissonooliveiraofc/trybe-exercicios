## Exercícios :books:

### Exercício 1 - Buscando Elementos :dart:

Adicione o código a seguir a uma página HTML e adicione uma tag `script`. Você deverá fazer tudo usando somente JavaScript.

```
<main id="parent-of-parent">
  <section id="parent">
    <section id="first-child"></section>
    <section id="where-are-you">
      <section id="first-child-of-child"></section>
    </section>
    Attention!
    <section id="third-child"></section>
    <section id="fourth-and-last-child"></section>
  </section>
</main>
```

- [x] Acesse o elemento `where-are-you`.
- [x] Acesse `parent` a partir de `where-are-you` e adicione uma `color` a ele.
- [x] Acesse o `first-child-of-child` e adicione um texto a ele. Você se lembra dos vídeos da aula anterior? Eles ensinam como fazer isso.
- [x] Acesse o `first-child` a partir de `parent`.
- [x] Acesse o `first-child` a partir de `where-are-you`.
- [x] Acesse o texto `Attention!` a partir de `where-are-you`.
- [x] Acesse o `third-child` a partir de `where-are-you`.
- [x] Acesse o `third-child` a partir de `parent`.

---

### Exercício 2 - Criando Elementos :dart:

Código `html`:

```
<main id="paiDoPai">
  <section id="pai">
    <section id="primeiroFilho"></section>
    <section id="elementoOndeVoceEsta">
      <section id="primeiroFilhoDoFilho"></section>
      <section id="segundoEUltimoFilhoDoFilho"></section>
    </section>
    Atenção!
    <section id="terceiroFilho"></section>
    <section id="quartoEUltimoFilho"></section>
  </section>
</main>
```

- [x] Crie um irmão para elementoOndeVoceEsta.
- [x] Crie um filho para elementoOndeVoceEsta.
- [x] Crie um filho para primeiroFilhoDoFilho.
- [x] A partir desse filho criado, acesse terceiroFilho.

---

### Exercício 3 - Removendo Elementos :dart:

Código html:

```
<main id="father-of-father">
    <section id="parent">
      <section id="first-child">
        <h2>Primeiro Filho</h2>
      </section>
      <section id="where-are-you">
        <h2>Elemento que você deve remover</h2>
      </section>
      <section id="third-child">
        <h2>Terceiro Filho</h2>
      </section>
      <section id="quartoEUltimoFilho">
        <h2>Quarto Filho</h2>
      </section>

    </section>
  </main>
```

- [x] Remova a tag `h2`, filha do elemento `where-are-you`.

---

### Exercício 4 - Aprofunde seu conhecimento :dart:

Código HTML:

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Exercício</title>
    <style>
      section {
        border-color: black;
        border-style: solid;
      }

      .title {
        text-align: center;
      }

      .main-content {
        background-color: yellow;
      }

      .main-content .center-content {
        background-color: red;
        width: 50%;
        margin-left: auto;
        margin-right: auto;
      }

      .main-content .center-content p {
        font-style: italic;
      }

      .main-content .left-content {
        background-color: green;
        width: 60%;
        margin-left: 0;
        margin-right: auto;
      }

      .main-content .left-content .small-image {
        display: block;
        margin-left: auto;
        margin-right: auto;
        border-radius: 100%;
      }

      .main-content .right-content {
        background-color: blue;
        width: 60%;
        margin-left: auto;
        margin-right: 0;
      }

      .main-content .description {
        text-align: center;
      }
    </style>
  </head>
  <body>
    <script>
      // COLOQUE SEU CÓDIGO AQUI
    </script>
  </body>
</html>
```

Seu objetivo nesse novo desafio é criar tags HTML usando a manipulação do DOM com JavaScript. Para isso, utilize a estrutura inicial apresentada a seguir.

Para criar a página inicial da agência de viagens, você deve utilizar apenas código JavaScript, o qual deve ser inserido entre as tags <script> e </script>.

Para dar início à página, você deve criar algumas tags, conforme o passo a passo indicado a seguir:

1. Adicione a tag `h1` com o texto `TrybeTrip - Agência de Viagens` como filho da tag `body`;
2. Adicione a tag `main` com a classe `main-content` como filho da tag `body`;
3. Adicione a tag `section` com a classe `center-content` como filho da tag `main` criada no passo 2;
4. Adicione a tag `p` como filho do `section` criado no passo 3 e coloque algum texto;
5. Adicione a tag `section` com a classe `left-content` como filho da tag main criada no passo 2;
6. Adicione a tag `section` com a classe `right-content` como filho da tag `main` criada no passo 2;
7. Adicione uma imagem com `src` configurado para valor `https://picsum.photos/200` e classe `small-image`. Esse elemento deve ser filho do `section` criado no passo 5;
8. Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, e assim por diante. Essa lista deve ser filha do `section` criado no passo 6;
9. Adicione 3 tags `h3`, todas filhas do `main` criado no passo 2.

---
