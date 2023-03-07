import { Navigate, Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Toaster } from 'react-hot-toast';
import { SharedLayout } from 'components';

const Home = lazy(() => import('page/Home/Home'));
const Movies = lazy(() => import('page/Movies/Movies'));
const MovieDetails = lazy(() => import('page/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>

      <Toaster />
    </>
  );
};
