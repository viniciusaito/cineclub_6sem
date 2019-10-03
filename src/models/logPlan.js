const mongoose = require('mongoose')

const logPlanSchema = new mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now,
    },
    id_plan:{
        type: String,
        required: true,
    },
    id_employee:{
        type: String,
        required: true
    }
})

mongoose.model("logPlan", logPlanSchema)