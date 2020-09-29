const { response } = require('express')
const mongoose = require('mongoose')
const Student = mongoose.model('Aluno')


module.exports = {

    async list(req, res){
        console.log("\nlisting students ...")
        const students = await Student.find()
        return res.json(students)
    },

    async get(req, res){
        console.log("\ngetting student ...")
        console.log(req.params.id)
        const student = await Student.findById(req.params.id)
        return res.json(student)
    },

    async post(req, res){
        console.log("\ncreating student ...")
        console.log(req.body)
        const student = await Student.create(req.body)
        return res.json(student)
    },

    async put(req, res){
        console.log("\nupdating student ...")
        console.log(req.params.id)
        console.log(req.body)
        const student = await Student.findAndUpdate(req.params.id, req.body, {new: true})
        return res.json(student)
    },

    async patch(req, res){
        console.log("\npartially updating student ...")
        console.log(req.params.id)
        console.log(req.body)
        const student = await Student.findAndUpdate(req.params.id, req.body, {new: true})
        return res.json(student)
    },

    async delete(req, res){
        console.log("\ndeleting student ...")
        console.log(req.params.id)
        await Student.findByIdAndRemove(req.params.id)
        return res.send()
    }
}