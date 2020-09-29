const express = require('express')
const mongoose = require('mongoose')
const requiredir = require('require-dir')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

// mongoose.connect('mongodb://localhost:27017/alunos', { useUnifiedTopology: true, useNewUrlParser: true })
// requiredir('./src/')
// app.use('/api', require('./src/routes'))

app.listen(3000, () => {
    console.log("server up and running on port: 3000");
})

