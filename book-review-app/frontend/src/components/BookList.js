import React from 'react';

const BookList = ({ books }) => {
  return (
    <div>
      <h2>Books</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}>{book.title} by {book.author}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;