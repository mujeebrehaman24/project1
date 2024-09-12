const mongoose = require('mongoose');

let Registeruser = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    // DOB: {
    //     type: String,
    //     required: true,
    // },

    // sunshine: {
    //     type: String,
    //     required: true,
    // },

    // location: {
    //     type: String,
    //     required: true,
    // },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    // gender: {
    //     type: String,
    //     required: true,
    // },

    password : {
        type: String,
        required: true,
    },

    confirmpassword: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Registeruser', Registeruser)