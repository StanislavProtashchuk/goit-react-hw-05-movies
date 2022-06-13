import { lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import { Loader } from './Loader/Loader';

const AppBar = lazy(() => import('./AppBar/AppBar' /* webpackChunkName: "app-bar" */));
const Home = lazy(() => import('./Home/Home' /* webpackChunkName: "home" */));
const Movies = lazy(() => import('./Movies/Movies' /* webpackChunkName: "movies" */));
const MovieDetailsView = lazy(() => import('./MovieDetailsView/MovieDetailsView' /* webpackChunkName: "movie-details-wiew" */));
const NotFound = lazy(() => import('./NotFound' /* webpackChunkName: "not-found" */));

export const App = () => {
  return (
    <div>
      
      <AppBar />
      <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} /> 
        <Route path='/movies/:filmId/*' element={<MovieDetailsView/>} />
        <Route path='*' element={<NotFound />}/> 
      </Routes>
      </Suspense>
    </div>
  );
};
