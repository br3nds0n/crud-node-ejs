const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    sexo : String,
    status : String
})

const User = mongoose.model('user', schema);

module.exports = User;