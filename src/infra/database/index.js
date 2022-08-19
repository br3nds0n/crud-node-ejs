const mongoose = require('mongoose')

class Database {
  static async connect () {
    try {
      const uri = process.env.DATABASE_URI

      await mongoose.connect(uri)
      console.info('📦 conectado com o banco de dados!')
    } catch (error) {
      console.error(error.message)
    }
  }
}

module.exports = Database
