import React from 'react';
import Images from "./Images";

function Game(props) {
  return (
    <div className='game'>
      <Images endGame={props.endGame}/>
    </div>
  );
}

export default Game;