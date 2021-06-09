const express = require('express');


const user = [
  {
    name: 'thiago',
    email: 'thiago_morgado@hotmail.com'
  },
  {
    name: 'aline',
    email: 'aline_morgado@hotmail.com'
  },
  {
    name: 'Fernando morgado',
    email: 'fernando_morgado@hotmail.com'
  }
]

const server =  express();
server.use(express.json());
// Essa Rota esta retonando todos os usuario 
server.get('/users', (req, res) => {
  return res.json({user})
})
// Essa routa esta retornando informação do usuario pelo id
server.get('/users/:id', (req,res) => {
  const {id} = req.params;
  return res.json(user[id])
})
// essa rota esta criando usuario no sistema
server.post('/users', (req, res) => {
  const data = req.body;
  user.push(data);
  return res.send({data})
})
// Essa rota esta atualizando os dados do usuario pelo id
server.put('/users/:id', (req, res) => {
  const {id} = req.params;
  
  return res.json(id)
})
server.listen(3333);