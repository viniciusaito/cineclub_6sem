const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    cpf:{
        type: String,
        required: true
    },
    rg:{
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    bDay: {
        type: Date,
        required: true,
    },
    telephone: {
        type: String
    },
    isAdmin: {
        type: Boolean,
        required: true
    },
    email: {
        type: String
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    postalCode: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    celphone: {
        type: String,
    },
    sex: {
        type: String,
        required: true
    }
})

mongoose.model("Employee", EmployeeSchema)