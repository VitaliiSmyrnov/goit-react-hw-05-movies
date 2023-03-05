import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieCast } from 'services/Api';
import { getSortedCast } from 'utils/getSortedCast';
import { Wrapper } from './Cast.styled';
import NoPhoto from 'assets/no-photo.jpg';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    (async () => {
      setStatus('pending');

      try {
        const data = await fetchMovieCast(Number(movieId), signal);
        setCast(getSortedCast(data));
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

      {cast?.map(({ id, profile_path, name, character }) => {
        const photo =
          profile_path !== null
            ? `https://image.tmdb.org/t/p/w500/${profile_path}`
            : NoPhoto;

        return (
          <li key={id}>
            <img src={photo} alt={name} />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        );
      })}

      {status === 'resolved' && cast.length === 0 && (
        <p>We don't have any cast for this movie</p>
      )}

      {status === 'rejected' && (
        <p>
          Oops, something went wrong. Please, reload the subpage to try again.
        </p>
      )}
    </Wrapper>
  );
};

export default Cast;
