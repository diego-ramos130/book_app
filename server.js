'use strict';
const pg = require('pg');
const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

const conString = 'postgres://kris3579:meowmeow@localhost:5432/books_app';
//const conString = 'postgres://localhost:5432/books_app';
const client = new pg.Client(conString);
// const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
app.set('view engine', 'ejs');


/* app.get('/', (req, res) =>{
  res.render('index');
} ) */

app.get('/books/:id', (req, res) => {
  let SQL = 'SELECT * FROM books WHERE id = $1'
  let values = [req.params.id];
  client.query(SQL, values)
    .then(data => {
      let bookInfo = data.rows[0];
      res.render('pages/show', { bookInfo });
    })
    .catch(error => {
      throwError(res, error);
    })
})

app.get('/', (req, res) => {
  let SQL = 'SELECT title, author, image_url, id FROM books';
  client.query(SQL, function (error, result) {
    console.log(result);
  });
  client.query(SQL)
    .then(data => {
      console.log(data); //undef
      let books = data.rows;
      res.render('index', { books });
    })
    .catch(error => {
      console.error(error);
      throwError(res, error);
    })
})


function throwError(response, err) {
  response.render('pages/error');
  // type of error using err parameter?
}

app.use(express.static(__dirname + '/public'));

app.use('*', (req, res) => res.render('pages/error'));

app.listen(PORT, () => console.log('server up on ', PORT));