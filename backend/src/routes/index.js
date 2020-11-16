const express = require('express')

const routes = express.Router()

const StudentController = require('../controllers/StudentController')

routes.get('/', StudentController.redirect)
routes.get('/api/alunos', StudentController.list)
routes.get('/api/alunos/:id', StudentController.get)
routes.post('/api/alunos', StudentController.post)
routes.put('/api/alunos/:id', StudentController.put)
routes.patch('/api/alunos/:id', StudentController.patch)
routes.delete('/api/alunos/:id', StudentController.delete)

module.exports = routes