import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { Suspense, useState, useEffect } from 'react';
import { fetchMovieDetails } from 'services/Api';
import { BackLink, DetailCard, Loader, Message } from 'components';
import { Wrapper } from './MovieDetails.styled';
import MovieApiError from 'assets/something-wrong-min.png';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const location = useLocation();
  const [from, setFrom] = useState(location.state?.from ?? { pathname: '/' });

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    (async () => {
      setStatus('pending');

      try {
        const data = await fetchMovieDetails(Number(movieId), signal);
        setMovie(data);
        setStatus('resolved');
      } catch (error) {
        if (error.name !== 'CanceledError') {
          setError(
            'Oops, something went wrong. Please, reload the page to try again.'
          );
          setStatus('rejected');
        }
      }
    })();

    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <>
      <Wrapper>
        <BackLink to={from}>Go Back</BackLink>

        {status === 'pending' && <Loader />}

        {status === 'resolved' && (
          <>
            <DetailCard movie={movie} />
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
          </>
        )}

        {status === 'rejected' && (
          <Message text={error} image={MovieApiError} />
        )}
      </Wrapper>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
