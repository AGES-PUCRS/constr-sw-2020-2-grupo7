const express = require('express')
const mongoose = require('mongoose')
const requiredir = require('require-dir')
const cors = require('cors')

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

// start api
app.listen(3000, () => {
    console.log("server up and running on port: 3000");
})

