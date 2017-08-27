let Books = require('../models/books');

exports.all = function(req, res) {
  Books.all(function(err, docs) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(docs);
  });
};

// exports.find = function(req, res) {
//   Books.find(req.params.id, function(err,doc) {
//     if (err) {
//       console.log(err);
//       return res.sendStatus(500);
//     }
//     res.send(doc);
//   });
// };

// exports.create = function(req, res) {
//   let book = {
//     title: req.body.title
//   };
//   Books.create(book, function(err, result) {
//     if (err) {
//       console.log(err);
//       return res.sendStatus(500);
//     };
//     res.send(book);
//   });
// };
//
// exports.update = function(req, res) {
//   Books.update(req.params.id, { title: req.body.title }, function(err, result) {
//       if (err) {
//         console.log(err);
//         return res.sendStatus(500);
//       }
//       res.sendStatus(200);
//     })
// };
//
// exports.delete = function(req, res) {
//   Books.delete(req.params.id, function(err, result) {
//       if (err) {
//         console.log(err);
//         return res.sendStatus(500);
//       }
//       res.sendStatus(200);
//     }
//   );
// }
