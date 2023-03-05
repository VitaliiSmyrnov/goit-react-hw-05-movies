import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieSearch } from 'services/Api';
import { SearchBox, MovieList, Loader, Message } from 'components';
import MovieApiError from 'assets/something-wrong-min.png';
import WrongQuery from 'assets/empty-collection-min.png';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('name') ?? '';

  useEffect(() => {
    if (!query) return;
    const controller = new AbortController();
    const { signal } = controller;

    (async () => {
      setStatus('pending');

      try {
        const data = await fetchMovieSearch(query, signal);
        setSearchMovies(data);
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
  }, [query]);

  return (
    <main>
      <SearchBox onSubmit={name => setSearchParams({ name })} />

      {status === 'pending' && <Loader />}

      {status === 'resolved' && <MovieList items={searchMovies} />}

      {status === 'resolved' && searchMovies.length === 0 && (
        <Message text="Nothing found" image={WrongQuery} />
      )}

      {status === 'rejected' && <Message text={error} image={MovieApiError} />}
    </main>
  );
};

export default Movies;
