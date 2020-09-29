const express = require('express')

const routes = express.Router()

const StudentController = require('../controllers/StudentController')

routes.get('/alunos', StudentController.list)
routes.get('/alunos/:id', StudentController.get)
routes.post('/alunos', StudentController.post)
routes.put('/alunos/:id', StudentController.put)
routes.patch('/alunos/:id', StudentController.patch)
routes.delete('/alunos/:id', StudentController.delete)

module.exports = routes