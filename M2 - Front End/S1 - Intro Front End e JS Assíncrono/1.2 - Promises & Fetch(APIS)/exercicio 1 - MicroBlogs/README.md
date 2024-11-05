# Exercício - MicroBlogs

Neste exercício, você irá trabalhar com a API [DummyJSON](https://dummyjson.com) para recuperar informações de usuários e seus posts. O objetivo é preencher um select com os usuários e, ao selecionar um usuário, exibir seus posts e comentários.

## Passos

1. **Recuperar Usuários**

   - Faça um fetch para a API `https://dummyjson.com/users` para recuperar as informações das pessoas usuárias.
   - Após receber os dados, passe o array retornado pela API com as informações das pessoas usuárias para a função `fillUsersSelect` para que o select da página seja atualizado.

2. **Recuperar Posts do Usuário Selecionado**

   - Na estrutura inicial do projeto já existe o `eventListener` para o evento `change` do select que dispara a função `clearPage`.
   - Depois da chamada dessa função, faça um fetch para a API `https://dummyjson.com/posts/user/{userID}`. Lembre-se que você deve pegar o id da pessoa selecionada através do atributo `value` do select.
   - A requisição feita no item anterior irá retornar um array com os posts da pessoa selecionada. Após receber as informações da API, utilize a função `fillPosts`, passando a lista de posts recebida, para exibir os posts na tela.
     - ℹ️ O primeiro item do array será o post destacado.
     - Os demais posts entram na lista de posts relacionados.

3. **Recuperar Comentários do Post Destacado**

   - Ainda usando a lista de posts retornada pela requisição do item 2, pegue o id do primeiro post da lista (esse será o post destacado) e faça uma requisição para URL `https://dummyjson.com/posts/{featuredPost.id}/comments` para pegar os comentários do post destacado.
     - 💡 Dica: lembre-se de usar o `return` e retornar essa chamada de fetch. Dessa forma será possível encadear mais um `.then` em sequência.
   - Depois de receber da API os comentários do primeiro post, use a função `fillFeaturedPostComments` para exibi-los. Você deve passar para essa função o array de comentários recebido no retorno da API.

4. **Tratamento de Erros**
   - Adicione um `.catch` ao final do encadeamento de todos os `.then`. Caso aconteça algum erro, esse `.catch` deverá chamar a função `fillErrorMessage` e passar a mensagem de erro.

## Estrutura do Projeto

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Microblogs</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1>Microblogs</h1>
    <div class="select-section">
      <select name="users-select" id="users-select" required>
        <option value="" disabled selected>Select a person</option>
      </select>
    </div>
    <div id="posts-section" class="invisible">
      <div id="featured-post">
        <h2 id="featured-post-title"></h2>
        <p id="featured-post-body"></p>
        <div id="featured-post-comments"></div>
      </div>
      <div id="related-posts-section"></div>
    </div>
    <div class="error-section">
      <p id="error-message" class="invisible"></p>
    </div>
    <script type="module" src="./index.js"></script>
    <script type="module" src="./utils/updateUI.js"></script>
  </body>
</html>
```

---
