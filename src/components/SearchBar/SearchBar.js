import React from 'react';
import './SearchBar.scss';

const SearchBar = ({ setSearchTerm }) => {

    const handleChange = (event) => {
        setSearchTerm(event.target.value.trim());
    };

    return (
        <div className="SearchBar" >
            <input onChange={handleChange} placeholder="Search for movies" ></input>
        </div>
    )
}

export default SearchBar;