const express = require('express');

const app = express();

//LINHA MT IMPORTANTE
app.use(express.json());

const port = 3004;
const users = [
  {
    id: 1,
    name: 'Rafael',
    active: false
  },
  {
    id: 2,
    name: 'Alisson',
    active: true
  },
  {
    id:3,
    name: 'Lorena',
    active: true
  }
];

//CRIANDO A ROTA RAIZ
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'okay'
  })
});

// CRIANDO ROTA USERS E DEVOLVENDO OBJETO
app.get('/users', (req,res) => {
  return res.status(200).json(users)
});

// PARA DEIXAR DINÂMICO SE USA : (DOIS PONTOS)
app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === id)
  if (!user) {
    res.status(404).json({
      message: `Usuário com o ID ${id} não encontrado!`
    })
  }
  return res.status(200).json({
    user,
  })
});

//FAZENDO CADASTROS
app.post('/users', (req, res) => {
  const { name } = req.body;
  const nextId = users.length+1;
  users.push({ id: nextId, name, active: true })
  return res.status(201).json({
    message: "Pessoa Usuária criada com sucesso!"
  });
})

//CRIANDO ROTA PARA DELETAR
app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  //procuro o id informado
  const idx = users.findIndex((user) => user.id === +id);
  //se nao tiver retorna o 404
  if (idx === -1) {
    return res.status(404).json({
      message: `Usuário com o ID ${id} não existe`
    })
  }
  //quando deletar
  users.splice(idx, 1);
  return res.status(204).json({
    message: 'Deletado com sucesso!'
  })
});

// O EXPRESS FICA OUVINDO EM UMA PORTA A NOSSA ESCOLHA PRA RODAR O BACK-END
app.listen(port, () => console.log('Server rodando na porta 3004'));