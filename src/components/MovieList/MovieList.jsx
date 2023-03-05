import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List, LinkStyled, Info, Title, Rating } from './MovieList.styled';
import NoPoster from 'assets/no-poster.jpg';

export function MovieList({ items = [] }) {
  const location = useLocation();

  return (
    <List>
      {items.map(({ id, poster_path, title, vote_average }) => {
        const poster =
          poster_path !== null
            ? `https://image.tmdb.org/t/p/original${poster_path}`
            : NoPoster;
        const path = location.pathname === '/movies' ? `${id}` : `movies/${id}`;

        return (
          <li key={id}>
            <LinkStyled to={path} state={{ from: location }}>
              <img src={poster} alt={title} />
              <Info>
                <Title>{title.toUpperCase()}</Title>
                <Rating>{vote_average.toFixed(1)}</Rating>
              </Info>
            </LinkStyled>
          </li>
        );
      })}
    </List>
  );
}

MovieList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      original_title: PropTypes.string.isRequired,
      vote_average: PropTypes.number.isRequired,
    })
  ),
};
