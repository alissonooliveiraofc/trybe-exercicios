# Exercícios :books:

## Exercício 1 - Box Model 🎯

Vamos reproduzir esse esquema de itens no seu browser! Copie os códigos abaixo e cole-os no seu VS Code, criando um arquivo index.html e um arquivo style.css.

Você provavelmente não conhece algumas das propriedades utilizadas nesse código, mas não se preocupe, por enquanto se concentre nas classes que você deve alterar de acordo com as instruções dos comentários.

index.html:

```
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exercício: box model</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="caixa width-and-height" style="background: #036b52">A</div>
  <div class="caixa width-and-height padding" style="background: #41197f;">B</div>
  <div class="caixa width-and-height padding margin" style="background: #444955">C</div>
  <div class="caixa width-and-height padding margin border" style="background: #3898EC">D</div>
</body>
</html>
```

style.css:

```
.caixa {
  color: white;
  display: inline-block;
  line-height: 50px;
  text-align: center;
  vertical-align: top;
}

.width-and-height {
  height: 50px;
  width: 50px;
}

/* insira na classe abaixo um padding de 20px para aplicá-lo aos itens B, C e D */
.padding {

}

/* insira na classe abaixo uma margem de 30px para aplicá-la aos itens C e D */
.margin {

}

/* insira na classe abaixo uma borda com valor '5px solid black' para aplicá-la ao item D */
.border {

}
```

Se você tiver curiosidade para saber sobre as propriedades `display`, `text-align` e `vertical-align`, sinta-se livre para consultar as documentações do MDN e da W3Schools.

Mas não se preocupe, iremos falar melhor sobre posicionamento dos elementos em alguns instantes.

O importante é que você tenha compreendido bem como funciona o box model do CSS, que é base para todos esses assuntos! Se tiver alguma dúvida não hesite em perguntar.

---

## Exercício 2 - Posicionamento de Elementos 🎯

Que tal praticarmos como manipular o posicionamento de elementos? Utilize o HTML e CSS a seguir como ponto de partida para resolver os exercícios:

index.html:

```
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <title>Mario</title>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <h1>Exercício do Mario</h1>
    <img src="https://bit.ly/39HLUyi" alt="jumpMario" class="super-mario" />
    <img src="https://bit.ly/3arGfMc" alt="goomba" class="goomba" />
    <img src="https://bit.ly/3AVnjks" alt="bowser" class="bowser" />
    <p class="speach">
      Goomba, do something!
    </p>
    <img src="https://bit.ly/3tmxgED" alt="baloon" class="baloon" />
  </body>
</html>
```

style.css:

```
.super-mario {
  width: 200px;
}

.goomba {
  width: 100px;
}

.baloon {

}

.speach {
  font-size: 25px;
}

.bowser {
  width: 200px;
}
```

Personagens pertencentes à Nintendo©

- [x] Posicione o Mário acima do Goomba.
- [x] Posicione a tag p para que fique dentro do balão de fala.
- [x] Posicione o balão para que se torne uma fala de Bowser

---

## Exercício 3 - Agrupamento de Seletores e Pseudo-classes 🎯

Copie o código HTML abaixo e faça o que for pedido:

index.html:

```
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <title>Agrupando Seletores</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>Lista dos Melhores Sites que já vi</h1>
    <p>Top 3 dos melhores sites que existem na web</p>
    <p>Principais motivos para eu gostar deles</p>
  </body>
</html>
```

- [x] Adicione uma lista ordenada dos 3 melhores sites que você conhece.
- [x] Crie um arquivo no mesmo diretório e nomeie-o de ‘style.css’.
- [x] Nesse arquivo .css, adicione os estilos para que:

* O texto das tags `‘h1’` e `‘p’` estejam centralizados.
* A cor de fundo da sua lista mude quando o cursor estiver sobre o item.
* A fonte do item mude quando ele for clicado.

- [x] Adicione uma lista não ordenada com, pelo menos, 3 características que você gosta.
- [x] No ‘style.css’, adicione a propriedade ‘list-style: none’ para ambas as listas.

---

## Exercício 4 - 🚀 Para fixar

Para este exercício, você não deve atribuir nenhuma classe ou id aos componentes, mas apenas utilizar pseudo-classes para individualizar cada elemento!

index.html:

```
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Pseudo-classes</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Paleta de Cores</h1>
  <p>Vamos criar uma paleta de cores com as divs abaixo:</p>
  <div>
    <h3>Cor primária</h3>
  </div>
  <div>
    <h3>Cor Secundária</h3>
  </div>
  <div>
    <h3>Cor Complementar</h3>
  </div>
  <div>
    <h3>Cor Escura</h3>
  </div>
  <div>
    <h3>Cor Clara</h3>
  </div>
</body>
</html>
```

- [x] Estilize as divs para que, ao passar o cursor por cima das mesmas, elas ganhem uma borda.
- [x] Faça cada div ter uma cor própria.
- [x] Estilize cada uma das tags h3.
- [x] Faça a terceira div ser maior que as demais.
- [x] Deixe as tags ímpares h3 com o texto em itálico.

## Exercício 5 - 🚀 Para fixar - Combinações e Classes Descendentes

index.html:

```
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
    <title>#GoTrybe</title>
  </head>
  <body>
    <h1><em>Combinações e Classes Descendentes</em></h1>
    <br />
    <h3>Top 5 frases memoráveis:</h3>
    <ol>
      <li><em>Com grandes poderes vêm grandes responsabilidades.</em> - Tio Ben (Homem Aranha)</li>
      <li><em>Houston, temos um problema.</em> - Jack Swigert</li>
      <li><em>Sempre parece impossível até que esteja feito.</em> - Nelson Mandela</li>
      <li><em>Parte da jornada é o fim.</em> - Tony Stark (Homem de Ferro)</li>
      <li><em>Às vezes, o melhor que podemos fazer é começar novamente.</em> - Steve Rogers (Capitão América)</li>
    </ol>
    <h3>As maiores linguagens de programação:</h3>
    <ul>
      <li>Python</li>
      <li>Java</li>
      <li>JavaScript</li>
      <li>C#</li>
      <li>C / C++</li>
    </ul>
    <h3>Maiores aliados de uma pessoa desenvolvedora:</h3>
    <ul>
      <li>
        <a href="https://pt.stackoverflow.com/" target="_blank">StackOverflow</a>
      </li>
      <li>
        <a href="https://www.w3schools.com/" target="_blank">W3Schools</a>
      </li>
      <li>
        <a href="https://developer.mozilla.org/pt-BR/" target="_blank">MDN Web Docs</a>
      </li>
      <li>
        <a href="https://devdocs.io/" target="_blank">DevDocs</a>
      </li>
      <li>
        <a href="https://app.betrybe.com/" target="_blank">Trybe</a>
      </li>
    </ul>
  </body>
</html>
```

Crie o arquivo `style.css` e resolva os seguintes exercícios:

- [x] Faça com que todos os itens de Listas Ordenadas tenham uma cor de fundo amarela. Se a numeração do item for PAR, faça a cor de fonte ser verde. Se o número for considerado ÍMPAR, utilize a propriedade text-transform para deixar o texto maiúsculo. (Dica: combinar classes pode ser útil aqui).
- [x] Faça todas as tags Header (h1, h2…) possuírem cor de fonte vermelha e, se alguma delas estiver em itálico, aumente seu tamanho para 40px e acrescente uma borda de 1px preta e sólida.
- [x] Faça todas as li’s terem 20px de tamanho de fonte e, para todo texto em itálico dentro de alguma li, utilize a propriedade font-weight para deixá-lo negrito.
- [x] Na listagem de linguagens de programação, faça com que as 3 primeiras da lista possuam cor de fonte azul e, se alguma possuir “java\*” no texto, utilize uma cor de fundo rosa.
- [x] (Bônus) Para cada link na lista de aliados da pessoa desenvolvedora, faça com que ao passar o mouse sobre cada um, o texto fique em negrito e assuma a cor de fonte “temática do site”

**Dica 1:** Utilize o seletor :hover para controlar o passar do mouse.

**Dica 2:** Sugestão de cores padrão. StackOverflow (laranja), W3Schools (verde), MDN (preta), DevDocs (amarela), Trybe (verde).

---

## Exercício 6 - Layout e Box Model no seu Portfólio Web 🎯

Antes de começar, você deve seguir estas instruções e fazer o setup para o exercício de hoje:

1. Entre no diretório que você criou no dia anterior;
2. Procure a tag <style></style>, onde você fez as alterações ontem. Mova todo o conteúdo da tag style e coloque em um arquivo style.css;
3. Adicione as novas alterações dentro do arquivo style.css;
4. Não se esqueça de importar esse arquivo na sua página;
5. Depois de importar o arquivo style.css, você já pode remover a tag style do seu documento.
6. Lembre-se que para executar o seu código enquanto o desenvolve você deve utilizar a extensão Live Server, para saber mais sobre ela acesse nosso conteúdo sobre isso.

### Requisitos

Seu Portfólio Web deve ter um layout usando Box Model com as informações a seguir:

- Coloque seu nome, sua foto e a descrição que você escreveu sobre você dentro de blocos;
- A descrição deve ficar ao lado da foto;
- Centralize seu nome na página;
- Use padding e coloque uma cor de fundo na sua foto que seja diferente da cor de fundo do resto da página;
- Adicione margin e padding nos elementos que julgar necessário;
- Coloque estilo somente nos itens ímpares da lista das suas habilidades.

### Dicas

Use a função de “Inspecionar” do browser para analisar o estilo de outras páginas web;

Você pode fazer alterações direto no console do browser, depois de inspecionar algum elemento na página:

Na aba “Elementos”, à direita, tem uma lista com os seletores CSS aplicados ao elemento;
Você pode adicionar novas regras CSS a esse elemento especificamente, escrevendo-as dentro de element.style no console do browser;
Lembre-se de que as alterações não são salvas, então se você recarregar a página elas vão se perder.

### Atualizando seu Portfólio Web para o mundo ver!

Agora que você usou layout e Box Model no seu Portfólio Web, chegou o momento de atualizar tudo que você fez e colocar no seu GitHub Pages! 🎉

Para isso, basta você atualizar seu projeto usando o que você aprendeu de Git.
