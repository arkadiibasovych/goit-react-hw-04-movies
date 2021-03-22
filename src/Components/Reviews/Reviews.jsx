import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../../services/filmsAPI';

import s from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState();
  const { movieId } = useParams();
  useEffect(() => {
    fetchReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <>
      {reviews > 0 ? (
        <ul className={s.list}>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h2>{author}</h2>
              <span>{content}</span>
            </li>
          ))}
        </ul>
      ) : (
        <h3>No reviews was found</h3>
      )}
    </>
  );
};

export default Reviews;
