import React from 'react';
import {Button} from "@material-ui/core";
import Confetti from "react-confetti";

function EndGame({newGame}) {
  const handleClick = () => {

    newGame(false);
  };
  return (
    <div className='end-game'>
      <Confetti/>
      <div className="message">
        <h2>Well Done</h2>
        <p>How about another go?</p>
        <Button
          color='primary'
          onClick={handleClick}
          variant="contained"
        >
          Go Again
        </Button>
      </div>
    </div>
  );
}

export default EndGame;