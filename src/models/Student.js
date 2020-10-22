const mongoose = require('mongoose')

const AlunoSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phones: {
        type: Array,
        required: true
    },
    cpf: {
        type: String,
        requires: true
    },
    rg: {
        type: String,
        requires: true
    },
    birthdate: {
        type: String,
        requires: true
    },
    registration: {
        type: String,
        requires: true
    },
    classes: {
        type: Array,
        required: false
    },
    evaluations: {
        type: Array,
        required: false
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
})

mongoose.model('Student', AlunoSchema)
