const mongoose = require('mongoose')

const ClientSchema = new mongoose.Schema({
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
    bDay: {
        type: Date,
        required: true,
    },
    telephone: {
        type: String
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
    },
    id_employee: {
        type: String,
        required: true
    }
})

mongoose.model("Client", ClientSchema)