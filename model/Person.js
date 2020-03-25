const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the Person Schema
const PersonSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    day: {
        type: Number,
        required: true
    },
    month: {
        type: Number,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    image: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    daysLeft: {
        type: Number
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Person = mongoose.model('persons', PersonSchema);