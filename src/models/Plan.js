const mongoose = require('mongoose')

const PlanSchema = new mongoose.Schema({
    description:{
        type: String,
        required: true,
    },
    price:{
        type: String,
        required: true
    }
})

mongoose.model("Plan", PlanSchema)