import React from 'react';
import {Container} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";

import './App.css';
import Navbar from "./Components/Navbar";
import EndGame from "./Components/EndGame";
import Game from "./Components/Game";
import {scoreUp, showEndGame} from "./redux/action";

function App() {
  const isEndGame = useSelector(({game}) => game.showEndGame);
  const score = useSelector(({game}) => game.score);
  const dispatch = useDispatch();

  const handleEndGame = (boolean) => {
    if (boolean) {
      dispatch(scoreUp());
    } else if(score){
      dispatch(showEndGame(false));
    }else {
      dispatch(showEndGame(true));
    }
  };

  return (
    <div className="App">
      <Navbar score={score}/>
      <Container maxWidth="sm">
        <Game endGame={handleEndGame}/>
        {isEndGame ? <EndGame newGame={handleEndGame}/> : null}
      </Container>
    </div>
  );
}

export default App;
