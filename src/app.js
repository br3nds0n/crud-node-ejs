const express = require('express')
const path = require('path')
const database = require('./infra/database')
const routes = require('./routes/router')
class App {
  constructor () {
    this.express = express()

    this.middlewares()
    this.views()
    this.asserts()
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

  asserts () {
    this.express.use('/css', express.static(path.resolve(__dirname, './app/views/assets/css')))
    this.express.use('/js', express.static(path.resolve(__dirname, './app/views/assets/js')))
  }

  routes () {
    this.express.use('/', routes)
  }
}

module.exports = App
