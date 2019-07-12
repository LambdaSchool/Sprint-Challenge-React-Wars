import React from "react";
import Character from "../components/Character";
import { Grid, Dimmer, Loader } from "semantic-ui-react";

const CharacterList = ({ characters, loading }) => {
  return (
    <Dimmer active={loading}>
      <Grid container divided centered>
        {characters.map((char, i) => (
          <Character character={char} key={i} />
        ))}
      </Grid>
    </Dimmer>
  );
};

export default CharacterList;
