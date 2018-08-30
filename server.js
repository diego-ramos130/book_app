'use strict';
const pg = require('pg');
const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({extended:true}))

//const conString = 'postgres://kris3579:meowmeow@localhost:5432/books_app';
//const conString = 'postgres://localhost:5432/books_app';
//const client = new pg.Client(conString);
 const client = new pg.Client(process.env.DATABASE_URL);

client.connect();

app.set('view engine', 'ejs');
app.get('/', mainRender)
app.get('/new-book', newBookRender)
app.get('/books/:id', selectBook)
app.post('/books/', newBookPost)

function newBookPost(req, res){
  console.log(req.body);
  let SQL = `INSERT INTO books(author, title, image_url, isbn, description) 
  VALUES($1, $2, $3, $4, $5)`;
  let values = [req.body.author, req.body.title, req.body.image_url, req.body.isbn, req.body.description];
  client.query(SQL, values)
    .then(() => {
      let thisId = `SELECT * FROM books WHERE isbn = $1`
      let thisValues = [req.body.isbn]
      client.query(thisId, thisValues)
        .then(data => {
          console.log(data.rows[0]);
          let bookInfo = data.rows[0];
          res.render('pages/show', { bookInfo });
        })
        .catch(error => {
          console.error(error);
          throwError(res, error);
        })
    })
}

function newBookRender(req, res){
  try {
    res.render('pages/new')
  }
  catch(error) {
    throwError(res, error);
  }
}

function mainRender(req, res){
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
}

function selectBook(req, res) {
  let SQL = 'SELECT * FROM books WHERE id = $1'
  let values = [req.params.id];
  client.query(SQL, values)
    .then(data => {
      let bookInfo = data.rows[0];
      res.render('pages/show', { bookInfo });
      console.log('the render hath occured!');
    })
    .catch(error => {
      throwError(res, error);
    })
}


function throwError(response, err) {
  response.render('pages/error');
  // type of error using err parameter?
}

app.use(express.static(__dirname + '/public'));
app.use('*', (req, res) => res.render('pages/error'));
app.listen(PORT, () => console.log('server up on ', PORT));
