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

---

### Exercício 3 - Criando 3 layouts diferentes utilizando o mobile first :dart:

HTML:

```
<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Alice's Adventures in Wonderland</title>
<link rel="stylesheet" href="https://unpkg.com/normalize.css@8.0.1/normalize.css" />
<link rel="stylesheet" href="alice.css" />
</head>
<body>
<div class="container">
  <header>
    <p>Alice's Adventures in Wonderland</p>
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  </header>
  <aside class="aside-one">
    <h2>Chapters</h2>
    <ul>
      <li>I. Down the Rabbit-Hole</li>
      <li>II. The Pool of Tears</li>
      <li>III. A Caucus-Race and a Long Tale</li>
      <li>IV. The Rabbit Sends in a Little Bill</li>
      <li>V. Advice from a Caterpillar</li>
      <li>VI. Pig and Pepper</li>
      <li>VII. A Mad Tea-Party</li>
      <li>VIII. The Queen's Croquet-Ground</li>
      <li>IX. The Mock Turtle's Story</li>
      <li>X. The Lobster Quadrille</li>
      <li>XI. Who Stole the Tarts?</li>
      <li>XII. Alice's Evidence</li>
    </ul>
  </aside>
  <aside class="aside-two">
    <h2>Information</h2>
    <ul>
      <li>Title: Alice's Adventures in Wonderland</li>
      <li>Author: Lewis Carroll</li>
      <li>Release Date: June 25, 2008 [EBook #11]</li>
      <li>Last Updated: July 14, 2014</li>
      <li>Language: English</li>
    </ul>
  </aside>
  <article class="main-content">
    <h1>
      CHAPTER I. Down the Rabbit-Hole
    </h1>
    <p>
      Alice was beginning to get very tired of sitting by her sister on the
      bank, and of having nothing to do: once or twice she had peeped into the
      book her sister was reading, but it had no pictures or conversations in
      it, 'and what is the use of a book,' thought Alice 'without pictures or
      conversations?'
    </p>
    <p>
      So she was considering in her own mind (as well as she could, for the hot
      day made her feel very sleepy and stupid), whether the pleasure of making
      a daisy-chain would be worth the trouble of getting up and picking the
      daisies, when suddenly a White Rabbit with pink eyes ran close by her.
    </p>
    <p>
      There was nothing so <i>very</i> remarkable in that; nor did Alice think it so
      <i>very</i> much out of the way to hear the Rabbit say to itself, 'Oh dear! Oh
      dear! I shall be late!' (when she thought it over afterwards, it occurred
      to her that she ought to have wondered at this, but at the time it all
      seemed quite natural); but when the Rabbit actually <i>took a watch out of
        its waistcoat-pocket</i>, and looked at it, and then hurried on, Alice started
      to her feet, for it flashed across her mind that she had never before seen
      a rabbit with either a waistcoat-pocket, or a watch to take out of it, and
      burning with curiosity, she ran across the field after it, and fortunately
      was just in time to see it pop down a large rabbit-hole under the hedge.
    </p>
    <p>
      In another moment down went Alice after it, never once considering how in
      the world she was to get out again.
    </p>
    <p>
      The rabbit-hole went straight on like a tunnel for some way, and then
      dipped suddenly down, so suddenly that Alice had not a moment to think
      about stopping herself before she found herself falling down a very deep
      well.
    </p>
    <p>
      Either the well was very deep, or she fell very slowly, for she had plenty
      of time as she went down to look about her and to wonder what was going to
      happen next. First, she tried to look down and make out what she was
      coming to, but it was too dark to see anything; then she looked at the
      sides of the well, and noticed that they were filled with cupboards and
      book-shelves; here and there she saw maps and pictures hung upon pegs. She
      took down a jar from one of the shelves as she passed; it was labelled
      'ORANGE MARMALADE', but to her great disappointment it was empty: she did
      not like to drop the jar for fear of killing somebody, so managed to put
      it into one of the cupboards as she fell past it.
    </p>
    <p>
      'Well!' thought Alice to herself, 'after such a fall as this, I shall
      think nothing of tumbling down stairs! How brave they'll all think me at
      home! Why, I wouldn't say anything about it, even if I fell off the top of
      the house!' (Which was very likely true.)
    </p>
    <p>
      Down, down, down. Would the fall <i>never</i> come to an end! 'I wonder how many
      miles I've fallen by this time?' she said aloud. 'I must be getting
      somewhere near the centre of the earth. Let me see: that would be four
      thousand miles down, I think&mdash;' (for, you see, Alice had learnt
      several things of this sort in her lessons in the schoolroom, and though
      this was not a <i>very</i> good opportunity for showing off her knowledge, as
      there was no one to listen to her, still it was good practice to say it
      over) '&mdash;yes, that's about the right distance&mdash;but then I wonder
      what Latitude or Longitude I've got to?' (Alice had no idea what Latitude
      was, or Longitude either, but thought they were nice grand words to say.)
    </p>
    <p>
      Presently she began again. 'I wonder if I shall fall right <i>through</i> the
      earth! How funny it'll seem to come out among the people that walk with
      their heads downward! The Antipathies, I think&mdash;' (she was rather
      glad there <i>was</i> no one listening, this time, as it didn't sound at all the
      right word) '&mdash;but I shall have to ask them what the name of the
      country is, you know. Please, Ma'am, is this New Zealand or Australia?'
      (and she tried to curtsey as she spoke&mdash;fancy <i>curtseying</i> as you're
      falling through the air! Do you think you could manage it?) 'And what an
      ignorant little girl she'll think me for asking! No, it'll never do to
      ask: perhaps I shall see it written up somewhere.'
    </p>
    <p>
      Down, down, down. There was nothing else to do, so Alice soon began
      talking again. 'Dinah'll miss me very much to-night, I should think!'
      (Dinah was the cat.) 'I hope they'll remember her saucer of milk at
      tea-time. Dinah my dear! I wish you were down here with me! There are no
      mice in the air, I'm afraid, but you might catch a bat, and that's very
      like a mouse, you know. But do cats eat bats, I wonder?' And here Alice
      began to get rather sleepy, and went on saying to herself, in a dreamy
      sort of way, 'Do cats eat bats? Do cats eat bats?' and sometimes, 'Do bats
      eat cats?' for, you see, as she couldn't answer either question, it didn't
      much matter which way she put it. She felt that she was dozing off, and
      had just begun to dream that she was walking hand in hand with Dinah, and
      saying to her very earnestly, 'Now, Dinah, tell me the truth: did you ever
      eat a bat?' when suddenly, thump! thump! down she came upon a heap of
      sticks and dry leaves, and the fall was over.
    </p>
    <p>
      Alice was not a bit hurt, and she jumped up on to her feet in a moment:
      she looked up, but it was all dark overhead; before her was another long
      passage, and the White Rabbit was still in sight, hurrying down it. There
      was not a moment to be lost: away went Alice like the wind, and was just
      in time to hear it say, as it turned a corner, 'Oh my ears and whiskers,
      how late it's getting!' She was close behind it when she turned the
      corner, but the Rabbit was no longer to be seen: she found herself in a
      long, low hall, which was lit up by a row of lamps hanging from the roof.
    </p>
    <p>
      There were doors all round the hall, but they were all locked; and when
      Alice had been all the way down one side and up the other, trying every
      door, she walked sadly down the middle, wondering how she was ever to get
      out again.
    </p>
    <p>
      Suddenly she came upon a little three-legged table, all made of solid
      glass; there was nothing on it except a tiny golden key, and Alice's first
      thought was that it might belong to one of the doors of the hall; but,
      alas! either the locks were too large, or the key was too small, but at
      any rate it would not open any of them. However, on the second time round,
      she came upon a low curtain she had not noticed before, and behind it was
      a little door about fifteen inches high: she tried the little golden key
      in the lock, and to her great delight it fitted!
    </p>
    <p>
      Alice opened the door and found that it led into a small passage, not much
      larger than a rat-hole: she knelt down and looked along the passage into
      the loveliest garden you ever saw. How she longed to get out of that dark
      hall, and wander about among those beds of bright flowers and those cool
      fountains, but she could not even get her head through the doorway; 'and
      even if my head would go through,' thought poor Alice, 'it would be of
      very little use without my shoulders. Oh, how I wish I could shut up like
      a telescope! I think I could, if I only knew how to begin.' For, you see,
      so many out-of-the-way things had happened lately, that Alice had begun to
      think that very few things indeed were really impossible.
    </p>
    <p>
      There seemed to be no use in waiting by the little door, so she went back
      to the table, half hoping she might find another key on it, or at any rate
      a book of rules for shutting people up like telescopes: this time she
      found a little bottle on it, ('which certainly was not here before,' said
      Alice,) and round the neck of the bottle was a paper label, with the words
      'DRINK ME' beautifully printed on it in large letters.
    </p>
    <p>
      It was all very well to say 'Drink me,' but the wise little Alice was not
      going to do <i>that</i> in a hurry. 'No, I'll look first,' she said, 'and see
      whether it's marked "<i>poison</i>" or not'; for she had read several nice little
      histories about children who had got burnt, and eaten up by wild beasts
      and other unpleasant things, all because they <i>would</i> not remember the
      simple rules their friends had taught them: such as, that a red-hot poker
      will burn you if you hold it too long; and that if you cut your finger
      <i>very</i> deeply with a knife, it usually bleeds; and she had never forgotten
      that, if you drink much from a bottle marked 'poison,' it is almost
      certain to disagree with you, sooner or later.
    </p>
    <p>
      However, this bottle was <i>not</i> marked 'poison,' so Alice ventured to taste
      it, and finding it very nice, (it had, in fact, a sort of mixed flavour of
      cherry-tart, custard, pine-apple, roast turkey, toffee, and hot buttered
      toast,) she very soon finished it off.
    </p>
  </article>
  <footer>
    <h3>Copyright</h3>
    <p>Project Gutenberg's Alice's Adventures in Wonderland, by Lewis Carroll</p>
    <p>This eBook is for the use of anyone anywhere at no cost and with
      almost no restrictions whatsoever. You may copy it, give it away or
      re-use it under the terms of the Project Gutenberg License included
      with this eBook or online at www.gutenberg.org
    </p>
  </footer>
</div>
</body>
</html>
```

CSS:

```
html {
box-sizing: border-box;
}

*, *:before, *:after {
box-sizing: inherit;
}
```

1. Crie três versões de layout diferentes para essa página.
   - Crie um layout para telas pequenas;
   - Crie um layout para telas médias;
   - Crie um layout para telas grandes.

> Anota aí 📝: Preste atenção no conteúdo da página e pense em como mostrá-lo em cada um dos tamanhos de tela.

---
