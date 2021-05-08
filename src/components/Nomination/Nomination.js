import React from 'react';
import './Nomination.scss';

const Nomination = ({ movie, removeNomination }) => {

    return (
        <div className="Nomination" key={movie.imdbID}>
            <img src={movie.Poster} alt="Movie poster" />

            <h3>{movie.Title} ({movie.Year})</h3>
            <button onClick={() => { removeNomination(movie) }}>
                Remove
            </button>
        </div>
    )
}

export default Nomination;