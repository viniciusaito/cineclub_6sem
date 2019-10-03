const express = require('express')
const routes = express.Router()

const PersonController = require('./controllers/PersonController')
const ClientController = require('./controllers/ClientController')

routes.get('/people', PersonController.index)
routes.get('/person/:id', PersonController.show)
routes.post('/person', PersonController.store)
routes.put('/person/:id', PersonController.update)
routes.delete('/person/:id', PersonController.destroy)

routes.get('/allclients', ClientController.index)
routes.get('/client/:id', ClientController.show)
routes.post('/client', ClientController.store)
routes.put('/client/:id', ClientController.update)
routes.delete('/client/:id', ClientController.destroy)

module.exports = routes