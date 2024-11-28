# Requisitos

## 1 - Crie o componente `<Header />`

- Este arquivo precisa ser criado na pasta `src/components`.

- Este componente deve ser utilizado no `App` para renderizar uma tag `h1` com o texto 'Tô viajando?'.

**_Aviso_**: Não se esqueça de exportar esse componente.

<details>
  <summary><strong>O que será verificado</strong></summary><br />

- O componente tem uma tag `h1` com o texto 'Tô viajando?'.

- O componente `<Header />` está sendo renderizado no App corretamente.

</details>

---

## 2 - Crie o componente `<Card />`

- Este arquivo precisa ser criado na pasta `src/components`.

- O `Card` deve conter a prop `cityInfo`. Nela, deve haver as chaves do tipo string `city`, `country` e `imageUrl`, todas elas obrigatórias, e a chave do tipo boolean `visited`, que é opcional.

- O `Card` deve renderizar o nome da cidade e o país em que se localiza.
- A imagem deve ser renderizada com a prop `city` como alt.
- Renderize a mensagem "Já Fui!" caso a prop `visited` seja true. Caso contrário, renderize a mensagem "Não Fui."

<br />

<details>
  <summary><strong>O que será verificado</strong></summary><br />

- O componente renderiza as informações de uma cidade já visitada corretamente.

- Ao não passar a chave "visited" na prop "cityInfo", o componente renderiza a mensagem "Não Fui." ao invés de "Já Fui!".

</details>

---

## 3 - Crie o componente `<CardList />`

- Agora, você deverá renderizar os três Cards para três destinos.
- Este arquivo já está criado na pasta `src/components`.
- Este componente deve renderizar três componentes `Card`, cada um deles com a informação das respectivas cidades (um componente `Card` para Rio de Janeiro, um para a Cidade do Cabo e outro para Acapulco) já contidas no arquivo `src/components/CardList.tsx`.

- Renderize esse componente no App.

<details>
  <summary><strong>O que será verificado</strong></summary><br />

- Os cards de 'Rio de Janeiro', 'Cidade do Cabo' e 'Acapulco' são renderizados corretamente no componente `CardList`.

- O componente `CardList` está sendo renderizado no `App` corretamente.

</details>

---

# Exercício extra (esse não é testado pelo avaliador)

<details>
  <summary> Estilize a aplicação adicionando classes que vão aprimorar seus componentes, de modo que cada conteúdo listado seja um Card</summary><br />.

- Para adicionar uma classe de estilização a um elemento HTML, utilize o atributo className:

```js
<div className="card">...</div>
```

</details>
