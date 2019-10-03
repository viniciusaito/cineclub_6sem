const express = require("express");
const mongoose = require("mongoose");

// Iniciar 
const app = express();
app.use(express.json())

mongoose.connect( //user@password apos mongodb://
    'mongodb://172.17.242.164:27017/nodeapi',
    { useNewUrlParser: true}
);
require('./src/models/Person')
require('./src/models/Client')

//rotas
app.use('/api', require('./src/routes')) //Use "wildcard" aceita qualquer requisicao

app.listen(8080);