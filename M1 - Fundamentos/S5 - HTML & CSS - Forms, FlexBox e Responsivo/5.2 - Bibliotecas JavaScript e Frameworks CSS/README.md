## Exercícios :books:

### Exercício 1 - Vamos praticar Bootstrap 🎯

- Crie um arquivo chamado form.html e cole o conteúdo do formulário abaixo:
  HTML:

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário - TrybeTravel</title>
  </head>
  <body>
    <h1 id="title">Formulário Trybe Travel</h1>

    <form id="main-form">
      <fieldset>
      <label for="fullName">Nome Completo:</label>
      <input
        type="text"
        id="fullName"
        name="fullName"
        placeholder="Digite seu nome completo"
        maxlength="40"
        minlength="10"
        required
      />
      <label for="email" class="form-label">Endereço de E-mail:</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Digite seu e-mail"
        maxlength="50"
        minlength="10"
        required
      />

      <label for="destination1">Cidade</label>
      <input
        type="radio"
        id="destination1"
        className="radios"
        name="destinations"
        value="Cidade"
        required
      />
      <label for="destination2">Campo</label>
      <input
        type="radio"
        id="destination2"
        className="radios"
        name="destinations"
        value="Campo"
        required
      />
      <label for="destination3">Praia</label>
      <input
        type="radio"
        id="destination3"
        className="radios"
        name="destinations"
        value="Praia"
        required
      />
      <label for="destination4">Montanhas</label>
      <input
        type="radio"
        id="destination4"
        className="radios"
        name="destinations"
        value="Montanhas"
        required
      />
      <label for="question">
        Por que você deveria ser a pessoa desenvolvedora a ganhar o concurso
        TrybeTravel
      </label>
      <br />
      <textarea
        name="why"
        id="question"
        cols="60"
        rows="10"
        placeholder="Digite sua resposta vencedora aqui"
        maxlength="500"
      >
      </textarea>
      <label for="date">Qual a melhor data para realizar sua viagem?</label>
      <input type="date" id="date" />
      <br />
      <label for="promo">Gostaria de receber outras incríveis oportunidades oferecidas pela Trybe.
      </label>
      <input type="checkbox" name="promo" id="promo" />
      <br />
      <label for="agreement">Concordo que imagens de minhas férias poderão ser usadas na divulgação de concursos futuros.
      </label>
      <input type="checkbox" name="agreement" id="agreement" required />
      </fieldset>
      <button type="submit" id="submit-btn" disabled>Enviar</button>
      <button type="reset" id="clear-btn">Limpar</button>
    </form>
  </body>
</html>
```

- Adicione o framework escolhido ao formulário. Para isso, acesse a documentação do framework e siga as instruções para uso. Por exemplo, para adicionar estilos com o Bootstrap, você pode utilizar o link `CDN`, como no exemplo abaixo:

```
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
```

- Estilize o formulário.

---
