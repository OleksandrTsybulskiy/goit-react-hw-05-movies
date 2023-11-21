import { getMovieRewies } from 'api';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Author, List, Text } from './Reviews.styled';

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
      <List>
        {review.length === 0 && <div>Not found</div>}
        {review.map(({ id, content, author }) => (
          <li key={id}>
            <Author>Author: {author}</Author>
            <Text>{content}</Text>
          </li>
        ))}
      </List>
    </div>
  );
};

export default Reviews;
