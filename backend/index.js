const express = require('express');
const db = require('./database');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Book Review App Backend is running!');
});

// Endpoint to add a new book
app.post('/books', (req, res) => {
  const { title, author } = req.body;
  db.run('INSERT INTO books (title, author) VALUES (?, ?)', [title, author], function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ bookId: this.lastID });
  });
});

// Endpoint to get all books
app.get('/books', (req, res) => {
  db.all('SELECT * FROM books', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ books: rows });
  });
});

// Endpoint to add a review for a book
app.post('/reviews', (req, res) => {
  const { book_id, review } = req.body;
  db.run('INSERT INTO reviews (book_id, review) VALUES (?, ?)', [book_id, review], function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ reviewId: this.lastID });
  });
});

// Endpoint to get all reviews for a book
app.get('/books/:id/reviews', (req, res) => {
  const bookId = req.params.id;
  db.all('SELECT * FROM reviews WHERE book_id = ?', [bookId], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ reviews: rows });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});