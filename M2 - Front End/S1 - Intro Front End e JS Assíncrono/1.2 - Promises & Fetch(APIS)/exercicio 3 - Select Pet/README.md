Vamos criar uma aplicação que exibe fotos aleatórias de cães e gatos. Você poderá escolher qual tipo de animal quer ver a imagem, ou pode escolher a opção “Surprise me” e deixar a sorte definir qual pet será exibido. Gostou da ideia? Vamos para as etapas necessárias:

## Etapas para criar a aplicação

1. Crie um novo projeto usando o npm. Instale e configure o Vite para usá-lo como web server.
2. Crie uma nova página que tenha os seguintes elementos:

- Um botão com o texto **Get random dog**;
- Um botão com o texto **Get random cat**;
- Um botão com o texto **Surprise me**;
- Uma imagem que deve ter como texto alternativo **Random pet**. Essa imagem começará com o atributo `src` vazio.

3. Quando o botão **Get random dog** for clicado, faça uma requisição para a API [Dog CEO](https://dog.ceo/api/breeds/image/random). Essa API irá retornar um objeto com a imagem de um cachorro aleatório. Utilize a tag de imagem criada no item 2 para exibir a imagem retornada pela API.
4. Quando o botão **Get random cat** for clicado, faça uma requisição para a API [The Cat API](https://api.thecatapi.com/v1/images/search). Essa API irá retornar um objeto com a imagem de um gato aleatório. Utilize a tag de imagem criada no item 2 para exibir a imagem retornada pela API.
5. Quando o botão **Surprise me** for clicado, faça duas requisições: uma para a API de imagens de gatos e outra para a API de imagens de cachorros. Exiba somente a imagem da API que retornar primeiro. Ignore o resultado da segunda requisição e também ignore o resultado caso alguma requisição retorne com erro.

💡 **Dica:** Lembre-se dos métodos usados para lidar com várias promises. Qual deles pode ser usado quando queremos o retorno da promise que resolve primeiro, ignorando os casos de erro?

📚 **Documentação das APIs:**

- [Dog API](https://dog.ceo/dog-api/documentation/)
- [Cat API](https://thecatapi.com/docs/)
