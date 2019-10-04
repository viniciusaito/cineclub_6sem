const mongoose = require('mongoose')

const Session = mongoose.model('Session')

module.exports = {
    async index(req, res) {
        const  session = await Session.find()

        return res.json(session)
    },

    async store(req, res) {
        const session = await Session.create(req.body)

        return res.json(session)
    },

    async show(req, res) {
        const session = await Session.findById(req.params.id)

        return res.json(session)
    },

    async update(req, res) {
        const session = await Session.findByIdAndUpdate(req.params.id, req.body, { new:true })

        return res.json(session);
    },

    async destroy(req, res) {
        await Session.findByIdAndRemove(req.params.id)

        return res.send()
    }
}