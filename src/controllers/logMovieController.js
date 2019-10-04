const mongoose = require('mongoose')

const logMovie = mongoose.model('logMovie')

module.exports = {
    async index(req, res) {
        const  logmovie = await logMovie.find()

        return res.json(logmovie)
    },

    async store(req, res) {
        const logmovie = await logMovie.create(req.body)

        return res.json(logmovie)
    },

    async show(req, res) {
        const logmovie = await logMovie.findById(req.params.id)

        return res.json(logmovie)
    },

    async update(req, res) {
        const logmovie = await logMovie.findByIdAndUpdate(req.params.id, req.body, { new:true })

        return res.json(logmovie);
    },

    async destroy(req, res) {
        await logMovie.findByIdAndRemove(req.params.id)

        return res.send()
    }
}