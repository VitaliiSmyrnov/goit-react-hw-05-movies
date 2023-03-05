import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieReviews } from 'services/Api';
import { Wrapper } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    (async () => {
      setStatus('pending');

      try {
        const data = await fetchMovieReviews(Number(movieId), signal);
        setReviews(data);
        setStatus('resolved');
      } catch (error) {
        if (error.name !== 'CanceledError') {
          setError(error.message);
          setStatus('rejected');
        }
      }
    })();

    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <Wrapper>
      {status === 'pending' && <p>Loading subpage...</p>}

      {reviews?.map(({ id, author, content }) => (
        <li key={id}>
          <p>
            <b>Author: {author}</b>
          </p>
          <p>{content}</p>
        </li>
      ))}

      {status === 'resolved' && reviews.length === 0 && (
        <p>We don't have any reviews for this movie</p>
      )}

      {status === 'rejected' && (
        <p>
          Oops, something went wrong. Please, reload the subpage to try again.
        </p>
      )}
    </Wrapper>
  );
};

export default Reviews;
