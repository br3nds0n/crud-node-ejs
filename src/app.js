const express = require('express')

const database = require('./infra/database')

class App {
    constructor () {
      this.express = express()
  
      this.middlewares()
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
      this.express.set("view engine", "ejs")
    }
  }
  
  module.exports = App
