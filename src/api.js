import axios from 'axios';

// Used to fetch array of movie objects from OMDB API based on the search string provided
// Note: only provides minimal info on the movies, need to make follow up request with movie ID for more details, see fetchMovieDetails
const fetchMovie = async (search) => {

    const response = await axios.get('https://www.omdbapi.com/', {
        params: {
            apikey: 'fd36052a',
            s: search
        }
    });

    if (response.data.Error) {
        return [];
    }

    return response.data.Search;
};

// Used to make a follow up request to OMDB API to get more specific details about a movie
const fetchMovieDetails = async (imdbID) => {

    const response = await axios.get('https://www.omdbapi.com/', {
        params: {
            apikey: 'fd36052a',
            i: imdbID
        }
    });

    if (response.data.Error) {
        return [];
    }

    return response.data;
}

export {fetchMovie , fetchMovieDetails};