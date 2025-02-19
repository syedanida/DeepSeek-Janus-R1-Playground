const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
  db.run('CREATE TABLE books (id INTEGER PRIMARY KEY, title TEXT, author TEXT)');
  db.run('CREATE TABLE reviews (id INTEGER PRIMARY KEY, book_id INTEGER, review TEXT, FOREIGN KEY(book_id) REFERENCES books(id))');
});

module.exports = db;