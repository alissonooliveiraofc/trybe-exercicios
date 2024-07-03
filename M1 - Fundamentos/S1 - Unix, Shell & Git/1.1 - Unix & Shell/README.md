# Exercícios :books:

## Exercício 1 - Criação de arquivos e diretórios 🎯

> Dica: Para criação de arquivos vazios, você pode utilizar o comando `touch nome-do-arquivo.extensao.`

- [x] 1. Utilizando o terminal, aplique o comando de criação de diretórios que você aprendeu, crie um diretório chamado `unix_tests` e navegue até ele.
- [x] 2. Crie um arquivo de texto com o nome `trybe.txt`.
- [x] 3. Crie uma cópia do arquivo `trybe.txt` com o nome `trybe_backup.txt`.
- [x] 4. Renomeie o arquivo `trybe.txt`.
- [x] 5. Dentro de `unix_tests`, crie um novo diretório chamado `backup`.
- [x] 6. Mova o arquivo `trybe_backup.txt` para o diretório `backup`.
- [x] 7. Dentro de `unix_tests`, crie um novo diretório chamado `backup2`.
- [x] 8. Mova o arquivo `trybe_backup.txt` da pasta `backup` para a pasta `backup2`.
- [x] 9. Apague a pasta `backup`.
- [x] 10. Renomeie a pasta `backup2` para `backup`.
- [x] 11. Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele.
- [x] 12. Apague o diretório `backup`.
- [x] 13. Limpe o terminal.

Para os próximos dois exercícios, crie, de forma manual, na parte gráfica do seu sistema operacional (através do mouse), um arquivo de texto com o conteúdo abaixo, chamado `skills.txt`:

```
Internet
Unix
Bash
HTML
CSS
JavaScript
React
SQL
```

- [x] Mostre na tela as 5 primeiras skills do arquivo `skills.txt`.
- [x] Mostre na tela as 4 últimas skills do arquivo `skills.txt`.
- [x] Apague todos os arquivos que terminem em `.txt`.

## Exercício 2 - Manipulação & busca 🎯

- [x] 1. Crie um novo diretório chamado `unix_tests_search` e entre nele.
- [x] 2. Na pasta `unix_tests_search`, baixe um arquivo com os nomes de todos os países do mundo utilizando o comando `curl`.

```
mkdir unix_tests_search
cd unix_tests_search
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
```

- [x] 3. Mostre todo o conteúdo do arquivo `countries.txt` na tela.
- [x] 4. Mostre o conteúdo de `countries.txt`, página por página, até encontrar a Zambia.
- [x] 5. Mostre novamente o conteúdo de countries.txt página por página, mas agora utilize um comando para buscar por `Zambia`.
- [x] 6. Busque por `Brazil` no `countries.txt`.
- [x] 7. Busque novamente por `brazil`, mas agora utilizando o lower case.
- [x] 8. Crie um novo arquivo chamado `phrases.txt` e adicione algumas frases à sua escolha. Não precisa criar o arquivo pelo terminal.
- [x] 9. Busque pelas frases que não contenham a palavra `fox`.
- [x] 10. Conte o número de palavras do arquivo `phrases.txt`.
- [x] 11. Conte o número de linhas do arquivo `phrases.txt`.
- [x] 12. Crie os arquivos `empty.tbt` e `empty.pdf`.
- [x] 13. Liste todos os arquivos do diretório `unix_tests_search`.
- [x] 14. Liste todos os arquivos que terminem com `txt`.
- [x] 15. Liste todos os arquivos que terminem com tbt ou `txt`.
- [x] 16. Acesse o manual do comando `ls`.

## Exercício 3 - Comandos de input e output :dart:

- [x] 1. Crie a pasta `unix_tests_skills` e navegue até ela.
- [x] 2. Crie um arquivo de texto pelo terminal com o nome `skills2.txt` e adicione os valores Internet, Unix e Bash, cada um em sua linha.
- [x] 3. Adicione mais 5 itens à sua lista de skills e, depois, imprima a lista ordenada no terminal.
- [x] 4. Conte o número de linhas do arquivo `skills2.txt`.
- [x] 5. Crie um arquivo chamado `top_skills.txt` usando o `skills2.txt`. Ele deve conter as 3 primeiras skills em ordem alfabética.
- [x] 6. Crie um novo arquivo chamado `phrases2.txt` pelo terminal e adicione algumas frases de sua escolha.
- [x] 7. Conte o número de linhas que contêm as letras br.
- [x] 8. Conte o número de linhas que não contêm as letras br.
- [x] 9. Adicione dois nomes de países ao final do arquivo `phrases2.txt`.
- [x] 10. Crie um novo arquivo chamado `bunch_of_things.txt` com os conteúdos dos arquivos `phrases2.txt` e `countries.txt`.
- [x] 11. Ordene o arquivo `bunch_of_things.txt`.

<details>
  <summary><strong>O despertar do terminal - Exercícios bônus</strong> 🎮</summary>
  
  Para finalizar com alta energia, que tal aprender alguns comandos divertidos do Unix?

> De olho na dica 👀: Se você utiliza macOS🍎, vai precisar do gerenciador de pacotes brew instalado. Para isso, siga as orientações neste [link](https://brew.sh/index_pt-br).

- Após instalar o `brew`, instale o factor e o telnet.
- Para instalar o `factor`, execute no terminal: `brew install coreutils`.
- Para instalar o `telnet`, execute no terminal: `brew install telnet`.

- [x] 1. Se você utiliza o Linux🐧, abra o terminal e execute o comando `sudo apt-get install cmatrix`. Para pessoas usuárias de macOS🍎, utilize `brew install cmatrix` no terminal. Depois, execute o comando `cmatrix`. Aperte ctrl+c para voltar ao terminal.

- [x] 2. No sistema Linux, execute o comando `sudo apt-get install fortune`. No macOS🍎, execute `brew install fortune`. Após a instalação, crie um arquivo de texto chamado `fortune.txt` que contenha a sua sorte do dia. Utilize apenas uma linha de comando.

> De olho na dica 👀: Use o comando `fortune` e o operador `>`.

- [x] 3. Conte o número de palavras que a frase da sua sorte do dia tem.

> De olho na dica 👀: Use o comando `wc`.

- [x] 4. Execute o comando `sudo apt-get install sl` em um terminal Linux, ou `brew install sl` em um terminal macOS. Após a instalação, execute o comando `sl`. Agora, tente `sl -F`.

- [x] 5. No sistema Linux, execute o comando `sudo apt-get install cowsay`, ou `brew install cowsay` no macOS. Após a instalação, execute o comando `cowsay` e algo que você queira falar. Agora, faça a vaquinha dizer a frase que está gravada no arquivo fortune.txt.

- [x] 6. Descubra os fatores primos usando o comando factor e, em seguida, o número 42.

- [x] 7. Veja como fica a sua sorte do dia ao contrário. Para isso, utilize o comando `rev`.

- [x] 8. Execute o comando `telnet towel.blinkenlights.nl` e espere alguns segundos.

</details>
