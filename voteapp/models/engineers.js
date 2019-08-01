const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image_url: {
        type: String
    },
    title: {
        type: String,
    },
    bio: {
        type: String,
    },
    count: {
        type: Number,
        default: 0
    }
})

module.exports = Engineer = mongoose.model('engineers', UserSchema)