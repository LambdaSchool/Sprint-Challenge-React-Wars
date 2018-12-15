import React from "react";
import "./components/StarWars.css";
import Character from "./Character";

 function CharacterList(props) {
  return (
    <div>
      {props.characters.map(character => (
        <Character character={character} key={character.created} />
      ))}
    </div>
  );
}
 export default CharacterList;