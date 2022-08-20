require('dotenv').config()

const App = require('./app')

async function server () {
  const app = await App.start()
  const port = process.env.PORT_SERVER

  app.listen(port, () => console.log(`🌎 aplicação rodando em http://localhost:${port}`))
}

server()
