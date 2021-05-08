import React from 'react';
import Movie from '../Movie/Movie'
import './MoviesContainer.scss';

const MovieContainer = ({ movies, nominations, searchTerm, Nominate }) => {

    const handleClick = (movie) => {
        Nominate(movie);
    }

    const isNominated = (movie) => {
        if(nominations.filter(nominee => nominee.imdbID === movie.imdbID).length > 0 || nominations.length >= 5){
            return true;
        }
        return false;
    }

    return (
        <div className="MoviesContainer">
            {searchTerm? <h4>Results for "<span>{searchTerm}</span>"</h4> : <h4>Results</h4>}
            {movies &&
                movies.map((movie, index) =>
                    <Movie movie={movie} handleClick={handleClick} isNominated={isNominated} key={movie.imdbID} />
                )
            }
        </div>
    )
};

export default MovieContainer;