import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { FaFilm } from 'react-icons/fa';
import { Container, Header, Logo, Link } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <FaFilm />
          <span>GoWatch Movie</span>
        </Logo>

        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>

      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  );
};
