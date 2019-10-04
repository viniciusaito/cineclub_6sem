const mongoose = require('mongoose')

const Employee = mongoose.model('Employee')

module.exports = {
    async index(req, res) {
        const  employee = await Employee.find()

        return res.json(employee)
    },

    async store(req, res) {
        const employee = await Employee.create(req.body)

        return res.json(employee)
    },

    async show(req, res) {
        const employee = await Employee.findById(req.params.id)

        return res.json(employee)
    },

    async update(req, res) {
        const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new:true })

        return res.json(employee);
    },

    async destroy(req, res) {
        await Employee.findByIdAndRemove(req.params.id)

        return res.send()
    }
}