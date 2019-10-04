const mongoose = require('mongoose')

const Client = mongoose.model('Client')

module.exports = {
    async index(req, res) {
        const  people = await Client.find()

        return res.json(people)
    },

    async store(req, res) {
        const client = await Client.create(req.body)

        return res.json(client)
    },

    async show(req, res) {
        const client = await Client.findById(req.params.id)

        return res.json(client)
    },

    async update(req, res) {
        const client = await Client.findByIdAndUpdate(req.params.id, req.body, { new:true })

        return res.json(client);
    },

    async destroy(req, res) {
        await Client.findByIdAndRemove(req.params.id)

        return res.send()
    }
}