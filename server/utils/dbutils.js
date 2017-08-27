import mongoose from 'mongoose';
import '../models/Book';

const Book = mongoose.model('Book');

export function setUpConnection() {
    mongoose.connect('mongodb://toma:mlab123qwe@ds131512.mlab.com:31512/books');
}

export function listBook() {
    return Book.find();
}