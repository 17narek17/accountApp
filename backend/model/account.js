/* eslint-disable */
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const accountSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: false
    },
    createdAt: {
        type: String,
        required: true,
        unique: false
    },
    owner: {
        type: String,
        required: true,
        unique: false
    }
})

const Account = mongoose.model('account', accountSchema)

module.exports = Account