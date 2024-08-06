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
