const mongoose = require('mongoose')

const logSession = mongoose.model('logSession')

module.exports = {
    async index(req, res) {
        const  logsession = await logSession.find()

        return res.json(logsession)
    },

    async store(req, res) {
        const logsession = await logSession.create(req.body)

        return res.json(logsession)
    },

    async show(req, res) {
        const logsession = await logSession.findById(req.params.id)

        return res.json(logsession)
    },

    async update(req, res) {
        const logsession = await logSession.findByIdAndUpdate(req.params.id, req.body, { new:true })

        return res.json(logsession);
    },

    async destroy(req, res) {
        await logSession.findByIdAndRemove(req.params.id)

        return res.send()
    }
}