import React, { useEffect, useState } from 'react';
import { fetchMovieDetails } from '../../api';
import './Movie.scss';

const Movie = ({ movie, handleClick, isNominated }) => {

    const [expanded, setExpanded] = useState(false);
    const [movieDetails, setMovieDetails] = useState();

    useEffect(() => {

        const getMovieDetails = async (imdbID) => {
            const movie = await fetchMovieDetails(imdbID);
            setMovieDetails(movie);
        }

        // if movie is expanded and we havent made request to get movie details yet
        if (expanded && !movieDetails) {
            getMovieDetails(movie.imdbID);
        }
    });

    const toggleExpanded = () => {
        setExpanded(!expanded);
    }

    return (
        <div>
            <div className="Movie">
                <img src={movie.Poster} alt="Movie poster" />
                <h4>{movie.Title} ({movie.Year})</h4>

                <div className="Buttons">
                    {expanded ? <i className="fas fa-chevron-up" onClick={toggleExpanded}></i> : <i className="fas fa-chevron-down" onClick={toggleExpanded}></i>}
                    <button
                        onClick={() => { handleClick(movie) }}
                        disabled={isNominated(movie)}
                    >
                        Nominate
                    </button>
                </div>
            </div>

            {expanded && movieDetails &&
                <div className="Movie-Details">

                    <div className="left">
                        <p><span>Awards</span></p>
                        <p>{movieDetails.Awards}</p>

                        <p><span>Box Office</span></p>
                        <p>{movieDetails.BoxOffice}</p>

                        <p><span>Genre</span></p>
                        <p>{movieDetails.Genre}</p>

                        <p><span>Metascore</span></p>
                        <p>{movieDetails.Metascore}</p>
                    </div>

                    <div className="right">
                        <p><span>Production</span></p>
                        <p>{movieDetails.Production}</p>

                        <p><span>Rated</span></p>
                        <p>{movieDetails.Rated}</p>

                        <p><span>Released</span></p>
                        <p>{movieDetails.Released}</p>

                        <p><span>Runtime</span></p>
                        <p>{movieDetails.Runtime}</p>
                    </div>
                </div>
            }
        </div>
    )
}

export default Movie;