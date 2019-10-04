const mongoose = require('mongoose')

const Movie = mongoose.model('Movie')

module.exports = {
    async index(req, res) {
        const  movie = await Movie.find()

        return res.json(movie)
    },

    async store(req, res) {
        const movie = await Movie.create(req.body)

        return res.json(movie)
    },

    async show(req, res) {
        const movie = await Movie.findById(req.params.id)

        return res.json(movie)
    },

    async update(req, res) {
        const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new:true })

        return res.json(movie);
    },

    async destroy(req, res) {
        await Movie.findByIdAndRemove(req.params.id)

        return res.send()
    }
}