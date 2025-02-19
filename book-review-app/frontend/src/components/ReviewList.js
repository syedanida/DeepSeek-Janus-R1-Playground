import React from 'react';

const ReviewList = ({ reviews }) => {
  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <strong>{review.bookTitle}</strong>: {review.content} - {review.reviewer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;