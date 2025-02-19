import React, { useState, useEffect } from 'react';
import './App.css';
import ReviewComponent from './ReviewComponent';

function App() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [selectedBookId, setSelectedBookId] = useState(null);

  useEffect(() => {
    fetch('/books')
      .then(response => response.json())
      .then(data => setBooks(data.books));
  }, []);

  const addBook = () => {
    fetch('/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, author }),
    })
      .then(response => response.json())
      .then(data => {
        setBooks([...books, { id: data.bookId, title, author }]);
        setTitle('');
        setAuthor('');
      });
  };

  return (
    <div className="App">
      <h1>Book Review App</h1>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={e => setAuthor(e.target.value)}
        />
        <button onClick={addBook}>Add Book</button>
      </div>
      <ul>
        {books.map(book => (
          <li key={book.id} onClick={() => setSelectedBookId(book.id)}>
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
      {selectedBookId && <ReviewComponent bookId={selectedBookId} />}
    </div>
  );
}

export default App;
