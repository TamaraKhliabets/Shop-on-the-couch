import express from 'express';
import bodyParser from 'body-parser';

import * as db from './utils/dbutils';

db.setUpConnection();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/books',(req, res) => {
    db.listBook().then(data => {
        res.send(data);
    });
});

const server = app.listen(7000, () => {
    console.log(`Server is up on port 7000`);
});