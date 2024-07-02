## Exercício 1 - Para fixar 📓

```
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <title>HTML</title>
    <style></style>
  </head>
  <body>
    <h1>Frutas</h1>
    <p>Qual é a sua fruta favorita?</p>
    <ul>
      <li>Maçã</li>
      <li>Banana</li>
      <li>Goiaba</li>
    </ul>
  </body>
</html>
```

- Modifique o tamanho do h1 para 65 pixels;

- Modifique a cor do texto do h1 para laranja;

- Modifique a cor de fundo da lista não ordenada;

- Crie uma classe para modificar a cor de fundo da tag p e da ul ao mesmo tempo.

> Não se esqueça de dar um PUSH no seu repositório para sincronizá-lo com o GitHub!

## Exercício 2 - Propriedades de texto no CSS 📓
```
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <title>HTML</title>
    <style></style>
  </head>
  <body>
    <h1>Cores</h1>
    <p>Qual é a sua cor favorita?</p>
    <ul>
      <li>Amarelo</li>
      <li>Vermelho</li>
      <li>Marrom</li>
    </ul>
  </body>
</html>
```

- Modifique o ```font-family``` do ```h1``` para ```sans-serif```;

- Deixe o parágrafo com o ```font-weight 600```;

- Modifique o ```font-size do body para 16px```;

- Coloque o tamanho do parágrafo com o tamanho de 3 vezes o padrão do ```body```;

- Explore as propriedades ```font-style```, ```line-height```, ```text-align``` e ```text-decoration```;

- Troque a cor de fundo de cada item da lista para a cor correspondente ao texto.

## Exercício 3 - CSS inline e externo

```
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <title>Trybe</title>
    <style>
      h1 {
        color: seagreen;
        font-size: 65px;
        font-family: sans-serif, Helvetica; 
      }

      .cor-de-fundo {
        background-color: whitesmoke;
      }

      p {
        font-weight: 600;
      }

      body {
        font-size: 16px;
      }

      li {
        font-style: italic;
        line-height: 60px;
        text-align: center;
        text-decoration: underline;
        font-size: 2em;
      }

      #verde {
        background-color: green;
      }

      #verde-escuro {
        background-color: seagreen;
      }

      #azul {
        background-color: blue;
      }
    </style>
  </head>
  <body>
    <h1>Trybe</h1>
    <h2 class="cor-de-fundo">Um novo curso para sua vida</h2>
    <p class="cor-de-fundo">A porta de entrada para a sua carreira em tecnologia</p>
    <ul>
      <li id="verde">Ensinamos a programar</li>
      <li id="verde-escuro">Ensinamos a aprender</li>
      <li id="azul">Ensinamos a trabalhar</li>
    </ul>
  </body>
</html>
```

- Coloque todo o CSS da tag style em um arquivo externo.

## Exercício 4 - Estilizando seu Portfólio Web!

1. Entre no diretório do Portfólio que você já começou a fazer;
2. Adicione a tag <style></style>, que é onde você vai colocar suas alterações;
3. Procure uma paleta de cores com a qual você mais se identifique e que você pode gerar nesse site.
4. Lembre-se de que, para executar o seu código enquanto o desenvolve, você deve utilizar a extensão Live Server. Para saber mais sobre ela, acesse nosso conteúdo sobre isso.

### Requisitos
Seu Portfólio Web deve ser estilizado usando as informações a seguir:

* Defina fontes diferentes para o seu nome e para a descrição que você criou;
* Defina uma cor base de background do seu Portfólio Web;
* Altere o estilo das tags que você usou para destacar algumas informações, como sua nacionalidade e a cidade/estado onde mora;
* Coloque tamanhos diferentes para os elementos da lista de habilidades que você criou. Lembre-se de usar classes para cada um dos elementos.