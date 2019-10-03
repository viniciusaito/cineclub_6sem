const mongoose = require('mongoose')

const logViewSchema = new mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now,
    },
    id_client:{
        type: String,
        required: true,
    },
    id_movie:{
        type: String,
        required: true
    }
})

mongoose.model("logView", logViewSchema)