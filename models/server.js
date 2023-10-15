const cors = require('cors')
const express = require('express')
const PORT = process.env.PORT

class Server {
  constructor () {
    this.app = express()
    this.port = PORT
    this.usersPath = '/api/users'

    // Inicialización de middleware
    this.middleware()

    // Inicialización de rutas
    this.routes()
  }

  middleware () {
    // CORS
    this.app.use(cors())

    // Lectura y parseo de body. Es necesario para poder trabajar con el JSON.
    this.app.use(express.json())

    // Directorio "public" archivo de entrada "index.html"
    this.app.use(express.static('public'))
  }

  routes () {
    this.app.use(this.usersPath, require('../routes/user'))
  }

  listen () {
    this.app.listen(this.port, () => {
      console.log(`Server listening on port ${this.port}`)
    })
  }
}

module.exports = Server
