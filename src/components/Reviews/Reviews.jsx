import { getMovieRewies } from 'api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [review, setReview] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieRewies(movieId).then(setReview);
  }, [movieId]);

  if (!review) {
    return;
  }

  return (
    <div>
      <ul>
        {review.length === 0 && <div>Not found</div>}
        {review.map(({ id, content, author }) => (
          <li key={id}>
            <p>Author: {author}</p>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
