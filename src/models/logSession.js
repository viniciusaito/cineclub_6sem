const mongoose = require('mongoose')

const logSessionSchema = new mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now,
    },
    id_session:{
        type: String,
        required: true,
    },
    id_employee:{
        type: String,
        required: true
    }
})

mongoose.model("logSession", logSessionSchema)