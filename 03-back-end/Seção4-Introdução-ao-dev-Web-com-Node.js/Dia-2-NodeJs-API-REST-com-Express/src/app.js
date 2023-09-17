const express = require('express');

const app = express();
const port = 3001;
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

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'okay'
  })
});

app.get('/users', (req,res) => {
  return res.status(200).json(users)
});

app.listen(port, () => console.log('Server rodando na porta 3001'));