const { response } = require('express')
const mongoose = require('mongoose')
const Student = mongoose.model('Student')
const { schema, schemaUpdate } = require('../schemas')
const axios = require('axios')

const CLASSESURL = 'http://ec2-34-238-114-89.compute-1.amazonaws.com:3000'
const EVALUATIONSURL = 'http://ec2-52-67-129-68.sa-east-1.compute.amazonaws.com:8000/api/v1'

module.exports = {

    async redirect(req, res) {    
        res.redirect('/api/docs')
    },

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
                if (req.query.expand == 'turma') {
                    let array = []
                    for(let i=0; i < student.classes.length; i++){
                        const response = await axios.get(`${CLASSESURL}/turma/${student.classes[i]}`)
                        array.push(response.data)
                    }
                    student.classes = array
                    res.status(200)
                    res.send(student)
                }
                else if (req.query.expand = 'avaliacao'){
                    let array = []
                    for(let i=0; i < student.evaluations.length; i++){
                        const response = await axios.get(`${EVALUATIONSURL}/avaliacoes/${student.evaluations[i]}`)
                        array.push(response.data)
                    }
                    student.evaluations = array
                    res.status(200)
                    res.send(student)
                }
                else {
                    res.status(404)
                    res.send('Not Found!')
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