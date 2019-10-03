const mongoose = require('mongoose')

const logMovieSchema = new mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now,
    },
    id_movie:{
        type: String,
        required: true,
    },
    id_employee:{
        type: String,
        required: true
    }
})

mongoose.model("logMovie", logMovieSchema)