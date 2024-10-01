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

### Exercício 2 - Criando layouts para dispositivos móveis e impressão :dart:

HTML:

```
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Kitten Kare</title>
  <link rel="stylesheet" href="kitten-kare.css" />
</head>
<body>
  <div id="container">
    <header id="header">
      <h1>
        Kitten Kare
      </h1>
    </header>
    <nav id="navigation">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
      </ul>
    </nav>
    <main id="content-container">
      <article id="content">
        <h2>
          Welcome!
        </h2>
        <img src="https://placekitten.com/400/400">
        <p>The domestic cat (Felis catus or Felis silvestris catus, informally Felis domesticus) is a
          small, usually furry, domesticated, carnivorous mammal. It is often called the housecat when kept as an indoor
          pet, or simply the cat when there is no need to distinguish it from other felids and felines. Cats are
          valued by humans for companionship and ability to hunt vermin and household pests. They are primarily
          nocturnal.
        </p>
        <p>Cats are similar in anatomy to the other felids, with strong, flexible bodies, quick reflexes, sharp
          retractable claws, and teeth adapted to killing small prey. As crepuscular predators, cats use their acute
          hearing and ability to see in near darkness to locate prey. Not only can cats hear sounds too faint for human
          ears, they can also hear sounds higher in frequency than humans can perceive. This is because the usual prey
          of cats (particularly rodents such as mice) make high frequency noises, so the hearing of the cat has evolved
          to pinpoint these faint high-pitched sounds. Cats also have a much better sense of smell than humans.
        </p>
        <p>Despite being solitary hunters, cats are a social species, and cat communication includes the use of a
          variety of vocalizations (meowing, purring, trilling, hissing, growling and grunting) as well as pheromones
          and types of cat-specific body language.
        </p>
      </article>
      <aside id="aside">
        <h3>
          Cat Body Types
        </h3>
        <ul>
          <li>Oriental</li>
          <li>Foreign</li>
          <li>Semi-Foreign</li>
          <li>Semi-Cobby</li>
          <li>Cobby</li>
        </ul>
      </aside>
    </main>
    <footer id="footer">
      Copyright © Kitten Kare, 2019
    </footer>
  </div>
</body>
</html>
```

CSS:

```
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

#container {
  margin: 0 auto;
  width: 100%;
  background: #fff;
}

#header {
  background: #ccc;
  padding: 20px;
}

#header h1 {
  margin: 0;
}

#navigation {
  width: 100%;
  background: #333;
}

#navigation ul {
  display: flex;
  margin: 0;
  padding: 0;
}

#navigation ul li {
  list-style-type: none;
  display: flex;
}

#navigation li a {
  padding: 5px 10px;
  color: #fff;
  text-decoration: none;
  width: 100%;
}

#navigation li a:hover {
  background: #383;
}

#content-container {
  width: 100%;
  background: #FFF;
  display: flex;
}

#content {
  width: 60%;
  padding: 20px 0;
  margin: 0 0 0 4%;
}

#content h2 {
  margin: 0;
}

#aside {
  width: 33%;
  padding: 20px 0;
  margin: 0 3% 0 0;
}

#aside h3 {
  margin: 5px;
}

#footer {
  background: #ccc;
  text-align: right;
  padding: 20px;
  height: 1%;
}
```

1. Crie uma versão de layout para impressão.

   - Os elementos `id header`, `navigation` e `footer` devem desaparecer.
   - O elemento `id='aside'` deve ser mostrado abaixo do conteúdo principal.

2. Crie uma versão de layout para telas pequenas.
   - O elemento `id='aside'` deve desaparecer.
   - As imagens não devem exceder a largura da tela.
   - Os itens dentro do elemento navigation devem aparecer cada um em sua própria linha.
   - O elemento `id header` deve ser fixo, de forma que fique aparecendo sempre no topo da tela, mesmo após a pessoa usuária rolar a página.
