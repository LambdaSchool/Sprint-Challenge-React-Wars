import React from 'react';
import './StarWars.css';

import StarWarsCharacters from './StarWarsCharacters';

const StarWarsList = (props) => {
    return(
        <div>
            {props.starwarsChars.map(character =>{
                return <StarWarsCharacters 
                key={character.name}
                characterProps={character}
                />
            })
            }
        </div>
    );
}

export default StarWarsList;