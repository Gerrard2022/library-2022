const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    student_id: {
        type: String,
        required: [true, 'Please enter a student id']
    },
    student_name: {
        type: String,
        required: [true, 'Please enter student full name']
    },
    class: {
        type: String,
        required: [true, 'Please enter the student\'s class']
    },
    book_name: {
        type: String,
        required: [true, 'Please enter the book name']
    },
    book_number: {
        type: String,
        required: [true, 'Please enter a book number']
    },
    borrowed_date: {
        type: String,
        required: [true, 'Please enter a borrowed date']
    },
    return_date: {
        type: String,
        required: [true, 'Please enter a return date']
    } 

}, { timestamps: true });

const Borrowed = mongoose.model('borrow', studentSchema);

module.exports = Borrowed;