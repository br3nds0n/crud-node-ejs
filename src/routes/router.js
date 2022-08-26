const router = require('express').Router()

const core = require('../app/core/core')
const UserController = require('../app/controller/userController')

// rotas de visualização
router.get('/', core.home)
  .get('/add-user', core.adicionar)
  .get('/update-user', core.atualizar)

// rotas do back-end
router.post('/api/users', UserController.criar)
  .get('/api/users', UserController.obter)
  .delete('/api/users/:id', UserController.deletar)
  .put('/api/users/:id', UserController.atualizar)

module.exports = router
