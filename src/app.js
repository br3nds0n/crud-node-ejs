const express = require('express')

const database = require('./infra/database')
const routes = require('./routes/router')

class App {
  constructor () {
    this.express = express()

    this.middlewares()
    this.views()
    this.routes()
  }

  static async start () {
    const app = new App()
    await database.connect()

    return app.express
  }

  middlewares () {
    this.express.use(express.json())
    this.express.use(express.urlencoded({ extended: true }))
  }

  views () {
    this.express.set('view engine', 'ejs')
    this.express.set('views', './src/app/views')
  }

  routes () {
    this.express.use('/', routes)
  }
}

module.exports = App
