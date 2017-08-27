const express = require('express');
// const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
// const ObjectID = require('mongodb').ObjectID;
const app = express();
let db = require('./db');
let booksController = require('./controllers/books');


const port = 7000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/books', booksController.all);

// app.get('/books/:id', booksController.find);
//
// app.post('/books', booksController.create);
//
// app.put('/books/:id', booksController.update);
//
// app.delete('/books/:id', booksController.delete);

db.connect('mongodb://toma:mlab123qwe@ds131512.mlab.com:31512/books', function(err) {
  if (err) {
    return console.log(err);
  }
  app.listen(port, function() {
    console.log('Api app starts');
  });
});