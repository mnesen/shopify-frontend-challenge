import React from 'react';
import './NominationsContainer.scss';

import Banner from '../Banner/Banner';
import Nomination from '../Nomination/Nomination';

const NominationContainer = ({ nominations, removeNomination }) => {

    return (
        <div className="NominationsContainer">

            {nominations.length > 0 ? <h4>Nominations ({nominations.length}/5):</h4> : <h4>Nominations</h4>}

            {nominations.map((movie, index) =>
                <Nomination movie={movie} removeNomination={removeNomination} key={movie.imdbID}/>
            )}
            {nominations.length>=5 ? <Banner /> : ""}
        </div>
    )
}

export default NominationContainer;
