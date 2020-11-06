const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema({
    id: {
        type: String,
        unique: true
    },
    username: {
        type: String,
        unique: true
    },
    firstName:{
        type: String,
        required: true
    },
    lastName: String,
    createdAT: {
        type: Date,
        default: Date.now()
    },
    createdAT: {
        type: Date,
        default: Date.now()
    },
    isActive: {
        type: Boolean,
        default: true
    }
});
const user = mongoose.model('user', userSchema)
module.exports = user