import {Routes, Route } from "react-router-dom";
import AppBar from "./AppBar";
import Home from "./Home/Home";

export const App = () => {
  return (
    <div>
      <AppBar />
      <Routes>
        <Route path='/' element={<Home />}/>          
      </Routes>
      
    </div>
  );
};
