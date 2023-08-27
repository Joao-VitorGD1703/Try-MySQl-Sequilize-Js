const express = require('express')
const bodyParser = require('body-parser')
const { result } = require('lodash')

const app = express()

app.use(bodyParser.json())

const port = 3000

app.get('/teste', (req, res)=> res
.status(200)
.send({mensagem: 'api está viva'
}))


app.listen(port, ()=> console.log(`Servidor está rodando na porta: ${port}`))
module.exports = app