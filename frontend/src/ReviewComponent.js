import React, { useState, useEffect } from 'react';

function ReviewComponent({ bookId }) {
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState('');

  useEffect(() => {
    fetch(`/books/${bookId}/reviews`)
      .then(response => response.json())
      .then(data => setReviews(data.reviews));
  }, [bookId]);

  const addReview = () => {
    fetch('/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ book_id: bookId, review: reviewText }),
    })
      .then(response => response.json())
      .then(data => {
        setReviews([...reviews, { id: data.reviewId, review: reviewText }]);
        setReviewText('');
      });
  };

  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>{review.review}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Write a review"
        value={reviewText}
        onChange={e => setReviewText(e.target.value)}
      />
      <button onClick={addReview}>Add Review</button>
    </div>
  );
}

export default ReviewComponent;