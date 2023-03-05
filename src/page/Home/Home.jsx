import { useState, useEffect } from 'react';
import { MovieList, Loader, Message } from 'components';
import { fetchMovieTrendingList } from 'services/Api';
import MovieApiError from 'assets/something-wrong-min.png';

const Home = () => {
  const [movieList, setMovieList] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    (async () => {
      setStatus('pending');

      try {
        const data = await fetchMovieTrendingList(signal);
        setMovieList(data);
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
  }, []);

  return (
    <>
      <h2>Trending Today</h2>

      {status === 'pending' && <Loader />}

      {status === 'resolved' && <MovieList items={movieList} />}

      {status === 'rejected' && <Message text={error} image={MovieApiError} />}
    </>
  );
};

export default Home;
