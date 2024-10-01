## Exercícios :books:

### Exercício 1 - Mão na massa :dart:

Copie os códigos HTML e CSS disponíveis abaixo:

```
<!DOCTYPE html>
<html lang="pt-br">
  <head>
  <meta charset="UTF-8">
  <title>Media Queries</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Cinzel&family=Raleway:wght@300;700&display=swap" rel="stylesheet">
  <style>
    body {
  align-items: center;
  color: #525252;
  display: flex;
  flex-flow: column wrap;
  font-family: Raleway, sans-serif;
  justify-content: center;
  overflow: hidden;
  width: 100vw;
}

h1 {
  font-family: Cinzel, serif;
  font-size: 48px;
}

h3 {
  font-size: 25px;
  margin: 0;
}

p {
  font-size: 18px;
  font-weight: 300;
}

p.trick {
  color: white;
  font-size: 14px;
}

p strong {
  font-weight: 700;
}

.card p:nth-last-child(1) {
  align-self: flex-end;
  font-size: 14px;
}

.cards {
  display: flex;
  flex-flow: row wrap;
}

.card {
  border-radius: 5px;
  color: white;
  display: none;
  flex-flow: row wrap;
  height: 200px;
  margin: 20px;
  padding: 20px;
  width: 200px;
}

.card:nth-of-type(1) {
  background-color: #0fa36b;
}

.card:nth-of-type(2) {
  background-color: #0255c2;
}

.card:nth-of-type(3) {
  background-color: #41197f;
}
  </style>
  </head>
  <body>
    <header>
      <h1 id="mySpotrybefy">✨ Trybe Tricks ✨</h1>
      <p>Vamos fazer algumas divs desaparecerem hoje?</p>
    </header>
    <main>
      <section class="cards">
        <div class="card">
          <h3>Primeira div</h3>
          <p>E será a primeira participante de hoje!</p>
          <p>Essa div só poderá aparecer caso nossa tela tenha <strong>largura mínima</strong> de 500px.</p>
        </div>
        <div class="card">
          <h3>Segunda div</h3>
          <p>Mas ela deveria aparecer aqui, não é mesmo?</p>
          <p>Pois é! Só que essa div deverá aparecer apenas se a largura <strong>estiver entre</strong> 600px e 1000px.</p>
        </div>
        <div class="card">
          <h3>Terceira div</h3>
          <p>Vamos para nosso Grand Finale!</p>
          <p>Para nosso grande truque, vamos precisar que essa div <strong>não apareça</strong> entre 650px e 950px.</p>
        </div>
        <div class="dont-show">
          <p>Quem gostou pediu bis!</p>
          <p>Sem alterar o CSS já escrito, como fazer para que o texto que contém a classe '.trick' apareça na tela quando estiver com uma largura menor que 500px?</p>
        </div>
      </section>
    </main>
    <footer>
      <p>Trybe Tricks, criando pessoas desenvolvedoras que fazem mágica com as mãos!</p>
    </footer>
    <p class="trick">Floreio! Como você conseguiu fazer aparecer mais essa caixa de texto?</p>
  </body>
</html>
```

- Para os exercícios a seguir, não é necessário alterar o arquivo HTML, apenas o CSS. 😉

- A primeira `div` só poderá aparecer caso nossa tela tenha largura mínima de `500px`.

- A segunda `div` só poderá aparecer caso a largura esteja entre `600px` e `1000px`.

- A terceira `div` não deverá aparecer caso nossa tela tenha largura entre `650px` e `950px`.

- Sem alterar o CSS já escrito, faça com que o texto dentro do elemento que contém a classe trick apareça somente quando a tela estiver com uma largura menor que `500px`.

---
