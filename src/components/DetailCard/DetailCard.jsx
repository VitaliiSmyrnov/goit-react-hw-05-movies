import PropTypes from 'prop-types';
import { Wrapper, CardInfo } from './DetailCard.styled';
import NoPoster from 'assets/no-poster.jpg';

export const DetailCard = ({ movie = {} }) => {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movie;

  const genreNames = genres?.reduce(
    (acc, genre) => acc + (acc ? ' | ' : '') + genre.name,
    ''
  );
  const year = release_date.slice(0, 4);
  const poster =
    poster_path !== null
      ? `https://image.tmdb.org/t/p/w500/${poster_path}`
      : NoPoster;

  return (
    <>
      <Wrapper>
        <img src={poster} alt={title} />

        <CardInfo>
          <h2>
            {title} ({year})
          </h2>
          <p>User score: {vote_average.toFixed(1)}</p>
          <p>
            <b>Overview</b>
          </p>
          <p>{overview}</p>
          <p>
            <b>Genres</b>
          </p>
          <p>{genreNames}</p>
        </CardInfo>
      </Wrapper>
      <p>Aditional informamion</p>
    </>
  );
};

DetailCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ),
  }),
};
