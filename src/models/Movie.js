const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    releaseDate:{
        type: String,
        required: true
    },
    director:{
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    classification: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    id_employee: {
        type: String,
        required: true
    }
})

mongoose.model("Movie", MovieSchema)