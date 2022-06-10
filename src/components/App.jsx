import {Routes, Route } from "react-router-dom";
import AppBar from "./AppBar";
import Home from "./Home/Home";
import Movies from "./Movies/Movies";

export const App = () => {
  return (
    <div>
      <AppBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />}/>  
      </Routes>
      
    </div>
  );
};
