import {Routes, Route } from "react-router-dom";
import AppBar from "./AppBar";
import Home from "./Home/Home";
import Movies from "./Movies/Movies";
import MovieDetailsView from "./MovieDetailsView/MovieDetailsView"
import NotFound from "./NotFound";

export const App = () => {
  return (
    <div>
      <AppBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} /> 
        <Route path='/movies/:filmId' element={<MovieDetailsView/>} />
        <Route path='*' element={<NotFound />}/> 
      </Routes>
      
    </div>
  );
};
