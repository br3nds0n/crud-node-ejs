const userModel = require('../model/userModel')

class UserController {
  async criar (req, res) {
    try {
      const video = req.body
      await userModel.create(video)

      res.redirect('/')
    } catch (error) {
      res.status(400).json({
        details: {
          name: 'bad request',
          description: error.message
        }
      })
    }
  }

  async obter (req, res) {
    if (req.query.id) {
      try {
        const { id } = req.query

        const result = await userModel.findById(id)

        if (!result) {
          res.status(404).json({
            details: {
              name: 'bad request',
              description: 'usuário não encontrado'
            }
          })
        }

        res.status(200).json(result)
      } catch (error) {
        res.status(400).json({
          details: {
            name: 'bad request',
            description: error.message
          }
        })
      }
    } else {
      const users = await userModel.find()

      res.send(users)
    }
  }

  async deletar (req, res) {
    try {
      const { id } = req.query
      const user = await userModel.findById(id)

      await userModel.deleteOne(user)

      res.status(200).end()
    } catch (error) {
      res.status(400).json({
        details: {
          name: 'bad request',
          description: error.message
        }
      })
    }
  }
}

module.exports = new UserController()
