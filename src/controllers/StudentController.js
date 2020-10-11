const { response } = require('express')
const mongoose = require('mongoose')
const Student = mongoose.model('Aluno')

const Joi = require('joi');

const schema = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    phones: Joi.array() // TODO
        .required(),

    cpf: Joi.string()
        .min(11)
        .max(11)
        .required(),
    rg: Joi.string()
        .min(10)
        .max(10)
        .required(),
    registration: Joi.string()
        .min(9)
        .max(9)
        .required(),
    birthdate: Joi.number()
        .integer()
        .min(1900)
        .max(2015),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
})


module.exports = {


    async list(req, res) {
        console.log("\nlisting students ...")
        try {
            const students = await Student.find()
            res.status(200);
            return res.json(students)
        }
        catch {
            res.status(404);
            res.send('None shall pass');
        }
    },

    async get(req, res) {
        console.log("\ngetting student ...")
        console.log(req.params.id)
        try {
            const student = await Student.findById(req.params.id)
            res.status(200);
            return res.json(student)
        }
        catch {
            res.status(404);
            res.send('None shall pass');
        }
    },

    async post(req, res) {
        console.log("\ncreating student ...")
        console.log(req.body)
        const errorMessage = await schema.validateAsync(req.body)
        if (!errorMessage) {
            const student = await Student.create(req.body)
            res.status(200);
            return res.json(student)
        } else {
            res.status(302);
            res.send(errorMessage)
            // res.send('None shall pass');
        }
    },

    async put(req, res) {
        console.log("\nupdating student ...")
        console.log(req.params.id)
        console.log(req.body)
        try {
            const student = await Student.findAndUpdate(req.params.id, req.body, { new: true })
            res.status(200);
            return res.json(student)
        }
        catch {
            res.status(404);
            res.send('None shall pass');
        }
    },

    async patch(req, res) {
        console.log("\npartially updating student ...")
        console.log(req.params.id)
        console.log(req.body)
        try {
            const student = await Student.findAndUpdate(req.params.id, req.body, { new: true })
            res.status(200);
            return res.json(student)
        }
        catch {
            res.status(404);
            res.send('None shall pass');
        }
    },

    async delete(req, res) {
        console.log("\ndeleting student ...")
        console.log(req.params.id)
        try {
            await Student.findByIdAndRemove(req.params.id)
            res.status(200);
            return res.send()
        }
        catch {
            res.status(404);
            res.send('None shall pass');
        }
    }
}