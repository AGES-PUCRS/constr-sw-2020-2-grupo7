const { response } = require('express')
const mongoose = require('mongoose')
const Student = mongoose.model('Student')
const { schema, schemaUpdate } = require('../schemas')

module.exports = {

    async list(req, res) {    
        
        try {

            if (Object.keys(req.query).length != 0) {
                const students = await Student.find(req.query)
                res.status(200)
                return res.json(students)
            } 
            
            else {
                const students = await Student.find()
                res.status(200)
                return res.json(students)
            }
        
        } catch {
            res.status(400)
            return res.send('None shall pass')
        }
    },

    async get(req, res) {
        try {

            const student = await Student.findById(req.params.id)

            if(req.query.expand != undefined) {
                if (req.query.expand == 'class') {
                    res.status(200)
                    res.send(student.classes)
                }
                else if (req.query.expand = 'evaluation'){
                    res.status(200)
                    res.send(student.evaluations)
                }
                else {
                    res.status(200)
                    res.send(student.evaluations)
                }
            } else {
                res.status(200)
                return res.json(student)
            }
        }

        catch {
            res.status(404)
            res.send('None shall pass')
        }
    },

    async post(req, res) {
        console.log("\ncreating student ...")

        let { error } = await schema.validate(req.body)
        if (error) return res.status(302).send(error.details)

        try {
            const student = await Student.create(req.body)
            res.status(200)
            console.log(req.body)
            return res.json(student)
        } catch {
            res.status(302)
            res.send('None shall pass')
        }
    },

    async put(req, res) {
        console.log("\nupdating student ...")

        let { error } = await schemaUpdate.validate(req.body)
        if (error) return res.status(400).send(error.details)

        try {
            const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true })
            res.status(200);
            console.log(req.params.id)
            console.log(req.body)
            return res.json(student)
        }
        catch {
            res.status(404)
            res.send('None shall pass')
        }
    },

    async patch(req, res) {
        console.log("\npartially updating student ...")

        let { error } = await schemaUpdate.validate(req.body)
        if (error) return res.status(400).send(error.details)

        try {
            const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true })
            res.status(200)
            console.log(req.params.id)
            console.log(req.body)
            return res.json(student)
        }
        catch {
            res.status(404)
            res.send('None shall pass')
        }
    },

    async delete(req, res) {
        console.log("\ndeleting student ...")

        try {
            await Student.findByIdAndRemove(req.params.id)
            res.status(200)
            console.log(req.params.id)
            return res.send()
        }
        catch {
            res.status(404)
            res.send('None shall pass')
        }
    }
}