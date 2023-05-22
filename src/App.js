



import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Movie__list from './components/movieList/Movie__list';
import Movie from './pages/movieDetail/Movie';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Header/>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="movie/:id" element={<Movie/>} />
        <Route path="movies/:type" element={< Movie__list/>} />
        <Route path="/*" element={<h1>Error page</h1>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
