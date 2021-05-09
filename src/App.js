import React, { useState, useEffect } from 'react';
import { fetchMovie } from './api';


import Heading from './components/Heading/Heading';
import RepoLink from './components/RepoLink/RepoLink';
import SearchBar from './components/SearchBar/SearchBar';
import MoviesContainer from './components/MoviesContainer/MoviesContainer';
import NominationsContainer from './components/NominationsContainer/NominationsContainer';

import './App.css';

function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState();
  const [nominations, setNominations] = useState(JSON.parse(window.localStorage.getItem("nominations")) || []);
  const [timeoutID, setTimeoutID] = useState();

  useEffect(() => {
    const getMovies = async () => {
      // Delay search input to avoid making too many requests to the OMDB API (Limit: 1000 requests per day)
      // Everytime the search term changes this useEffect runs and sets a new timeoutID, if the user changes the search term before
      // this timeout has finished, clear the timeoutID, therfore not running the code in the setTimeout function which makes the request
      if (timeoutID) {
        clearTimeout(timeoutID);
      }
      setTimeoutID(setTimeout(async () => {
        const movieData = await fetchMovie(searchTerm);
        setMovies(movieData);

      }, 400));
    };

    if (searchTerm) {
      getMovies();
    }
  }, [searchTerm]);

  // Update local storage everytime the nominations state changes
  useEffect(() => {

    window.localStorage.setItem("nominations", JSON.stringify(nominations));

  }, [nominations]);


  const Nominate = (movie) => {
    // push movie onto nominations array
    setNominations([...nominations, movie]);
  };

  const removeNomination = (movie) => {
    const updatedNominations = nominations.filter(nominee => nominee.imdbID !== movie.imdbID);
    setNominations(updatedNominations);
  };

  return (
    <div className="App">

      <RepoLink />

      <Heading />

      <SearchBar
        setSearchTerm={setSearchTerm}
      />

      <MoviesContainer
        movies={movies}
        nominations={nominations}
        searchTerm={searchTerm}
        Nominate={Nominate}
      />
  
      <NominationsContainer
        nominations={nominations}
        removeNomination={removeNomination}
      />

    </div>
  );
}

export default App;
