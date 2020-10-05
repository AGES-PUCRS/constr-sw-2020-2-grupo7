const express = require('express')
const mongoose = require('mongoose')
const requiredir = require('require-dir')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./api.yaml');

const app = express()

app.use(cors())
app.use(express.json())

// connect to mongo
mongoose.connect('mongodb://localhost:27017/Aluno?authSource=root',
    {
        "auth": {
          "authSource": "admin"
        },
        "user": "root",
        "pass": "example"
    }
  )

// get models
requiredir('./models')

// get routes
app.use('/api', require('./routes'))
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

// start api
app.listen(3000, () => {
    console.log("server up and running on port: 3000")
})

