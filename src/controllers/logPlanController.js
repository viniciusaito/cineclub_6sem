const mongoose = require('mongoose')

const logPlan = mongoose.model('logPlan')

module.exports = {
    async index(req, res) {
        const  logplan = await logPlan.find()

        return res.json(logplan)
    },

    async store(req, res) {
        const logplan = await logPlan.create(req.body)

        return res.json(logplan)
    },

    async show(req, res) {
        const logplan = await logPlan.findById(req.params.id)

        return res.json(logplan)
    },

    async update(req, res) {
        const logplan = await logPlan.findByIdAndUpdate(req.params.id, req.body, { new:true })

        return res.json(logplan);
    },

    async destroy(req, res) {
        await logPlan.findByIdAndRemove(req.params.id)

        return res.send()
    }
}