//carregar o módulo express
const express = require('express')
//executar o express
const app = express()
//definir a porta do servidor
const porta = process.env.PORT || 3535

//definir a pasta dos assests (css, images,etc)
app.use(express.static('./assets/'))

//carregar o consign e configura-lo
const consign = require('consign')
consign().include('./routes').into(app)

//definir uma pasta diferente da views para armazenar os conteudos
//app.Set('views','[nomedapasta'])

//exportar as variáveis app e porta
module.exports = {app,porta}