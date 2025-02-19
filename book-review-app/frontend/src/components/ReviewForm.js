import React, { useState } from 'react';

const ReviewForm = ({ addReview }) => {
  const [bookTitle, setBookTitle] = useState('');
  const [content, setContent] = useState('');
  const [reviewer, setReviewer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addReview({ bookTitle, content, reviewer });
    setBookTitle('');
    setContent('');
    setReviewer('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Review</h2>
      <div>
        <label>Book Title:</label>
        <input
          type="text"
          value={bookTitle}
          onChange={(e) => setBookTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Review:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Reviewer:</label>
        <input
          type="text"
          value={reviewer}
          onChange={(e) => setReviewer(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Review</button>
    </form>
  );
};

export default ReviewForm;