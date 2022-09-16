const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }

}, { timestamps: true });

const Books = mongoose.model('book', bookSchema);

module.exports = Books;