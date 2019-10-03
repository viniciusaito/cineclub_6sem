const mongoose = require('mongoose')

const SessionSchema = new mongoose.Schema({
    three_d:{
        type: Boolean,
        required: true,
    },
    dubbed:{
        type: Boolean,
        required: true
    },
    duration:{
        type: String,
        required: true,
    },
    date:{
        type: String,
        required: true,
    },
    id_employee:{
        type: String,
        required: true,
    },
    id_movie:{
        type: String,
        required: true,
    }
})

mongoose.model("Session", SessionSchema)