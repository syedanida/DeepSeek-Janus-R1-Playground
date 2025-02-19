import React, { useState } from 'react';
import BookList from './components/BookList';
import ReviewList from './components/ReviewList';
import BookForm from './components/BookForm';
import ReviewForm from './components/ReviewForm';

function App() {
  const [books, setBooks] = useState([]);
  const [reviews, setReviews] = useState([]);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const addReview = (review) => {
    setReviews([...reviews, review]);
  };

  return (
    <div className="App">
      <h1>Book Review App</h1>
      <BookForm addBook={addBook} />
      <BookList books={books} />
      <ReviewForm addReview={addReview} />
      <ReviewList reviews={reviews} />
    </div>
  );
}

export default App;
