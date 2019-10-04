const mongoose = require('mongoose')

const logView = mongoose.model('logView')

module.exports = {
    async index(req, res) {
        const  logview = await logView.find()

        return res.json(logview)
    },

    async store(req, res) {
        const logview = await logView.create(req.body)

        return res.json(logview)
    },

    async show(req, res) {
        const logview = await logView.findById(req.params.id)

        return res.json(logview)
    },

    async update(req, res) {
        const logview = await logView.findByIdAndUpdate(req.params.id, req.body, { new:true })

        return res.json(logview);
    },

    async destroy(req, res) {
        await logView.findByIdAndRemove(req.params.id)

        return res.send()
    }
}