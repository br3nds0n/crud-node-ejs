const router = require('express').Router()

const core = require('../app/core/core')
const UserController = require('../app/controller/userController')

// rotas de visualização
router.get('/', core.home)
  .get('/add-user', core.add_user)

// rotas do back-end
router.post('/api/users', UserController.criar)
  .get('/api/users', UserController.obter)

module.exports = router
