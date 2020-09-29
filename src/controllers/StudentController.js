const mongoose = require('mongoose')
// const Student = mongoose.model('Aluno')


module.exports = {

    async list(req, res){console.log("list")},

    async get(req, res){console.log("get")},

    async post(req, res){console.log("post")},

    async put(req, res){console.log("put")},

    async patch(req, res){console.log("patch")},

    async delete(req, res){console.log("delete")}
}