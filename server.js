'use strict';
require('dotenv').config();
const superagent = require('superagent');
const pg = require('pg');
const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({extended:true}))

const client = new pg.Client(process.env.DATABASE_URL)

client.connect();

app.set('view engine', 'ejs');
app.get('/', mainRender)
app.get('/search/', searchBookGo)
app.get('/search/new-book', newBookRender)
app.get('/search/search', searchBookGo)
app.get('/search/result', googleSearchResult)
app.get('/new-book', newBookRender)
app.get('/books/:id', selectBook)
app.post('/books/', newBookPost)
app.post('/books/success', addBookDatabase)

function addBookDatabase(req,res){
  let author = req.body.author || 'DATA NOT FOUND';
  let title = req.body.title || 'DATA NOT FOUND';
  let image_url = req.body.image_url || 'DATA NOT FOUND';
  let isbn = req.body.isbn || 'DATA NOT FOUND';
  let description = req.body.description || 'DATA NOT FOUND';
  
  let SQL = `INSERT INTO books(author, title, image_url, isbn, description) 
  VALUES($1, $2, $3, $4, $5)`;
  let values = [author, title, image_url, isbn, description];
  client.query(SQL, values)
    .then(() => {
      let thisId = `SELECT * FROM books WHERE isbn = $1`
      let thisValues = [req.body.isbn]
      client.query(thisId, thisValues)
        .then(data => {
          let bookInfo = data.rows[0];
          res.render('pages/books/addedbook', { bookInfo });
        })
    })
    .catch(error => {
      throwError(res, error);
    })
}

function searchBookGo(req,res){
  try{
    res.render('pages/searches/new');
  }
  catch(error){
    throwError(res, error);
  }
}
function googleSearchResult(req, res) {
  
  
  let url = 'https://www.googleapis.com/books/v1/volumes';
  let queryString = '';
  queryString += 'q' + '=' + req.query.author_title;
  url = url + '?' + queryString;
  

  superagent.get(url)
    .then(results => {
      let listings = results.body.items.reduce((items, item, idx) => {
        
        let listing = {
          title: item.volumeInfo.title  || null ,
          author: item.volumeInfo.authors  || null ,
          isbn: item.volumeInfo.industryIdentifiers[0].identifier || null,
          image_url: item.volumeInfo.imageLinks.thumbnail  || null,
          description: item.volumeInfo.description  || null
        }
        items.push(listing);
       
        return items;
      },[]);
      res.render('pages/searches/show', {items:listings});
    })
    .catch(error =>{
      throwError(res, error);
    })
}

function newBookPost(req, res) {

  let SQL = `INSERT INTO books(author, title, image_url, isbn, description) 
  VALUES($1, $2, $3, $4, $5)`;
  let values = [req.body.author, req.body.title, req.body.image_url, req.body.isbn, req.body.description];
  client.query(SQL, values)
    .then(() => {
      let thisId = `SELECT * FROM books WHERE isbn = $1`
      let thisValues = [req.body.isbn]
      client.query(thisId, thisValues)
        .then(data => {
          let bookInfo = data.rows[0];
          
          res.render('pages/books/show', { bookInfo });
        })
        .catch(error => {
          console.error(error);
          throwError(res, error);
        })
    })
}


function newBookRender(req, res) {
  try {
    res.render('pages/books/new')
  }
  catch(error) {
    throwError(res, error);
  }
}


function mainRender(req, res) {
  let SQL = 'SELECT title, author, image_url, id FROM books';
  client.query(SQL)
    .then(data => {
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
      res.render('pages/books/show', { bookInfo });
      
    })
    .catch(error => {
      throwError(res, error);
    })
}


function throwError(response, err) {
  console.error(err);
  response.render('pages/error');
}

app.use(express.static(__dirname + '/public'));
app.use('*', (req, res) => res.render('pages/error'));
app.listen(PORT, () => console.log('server up on ', PORT));
