const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let books = [];
let reviews = [];

// Endpoint to get all books
app.get('/books', (req, res) => {
  res.json(books);
});

// Endpoint to add a new book
app.post('/books', (req, res) => {
  const book = req.body;
  books.push(book);
  res.status(201).json(book);
});

// Endpoint to get all reviews
app.get('/reviews', (req, res) => {
  res.json(reviews);
});

// Endpoint to add a new review
app.post('/reviews', (req, res) => {
  const review = req.body;
  reviews.push(review);
  res.status(201).json(review);
});

app.listen(port, () => {
  console.log(`Book review app listening at http://localhost:${port}`);
});