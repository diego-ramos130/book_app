'use strict';
const pg = require('pg');
const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

const conString = 'postgres://kris3579:meowmeow@localhost:5432/books_app';
// const conString = 'postgres://localhost:5432';
const client = new pg.Client(conString);
client.connect();

app.set('view engine', 'ejs');


app.get('/', (req, res) =>{
  res.render('index');
} )

app.get('/books',(req, res) => {
  let SQL = 'SELECT title, author, image_url FROM books';
  req.query(SQL)
    .then(data => {
      let bookData = data.rows;
      res.render('index', {items});
    })
    .catch(error => {
      console.error(error);
    })
})

app.use(express.static(__dirname + '/public'));
app.listen(PORT, () => console.log('server up on ', PORT));

function renderBooks(rows) {

} 