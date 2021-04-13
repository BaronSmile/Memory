import React from 'react';
import {Container, makeStyles} from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1em'
  }
}))

function Navbar({score}) {
  const style = useStyle();

  return (
    <Container maxWidth='sm' className={style.root}>
      <div className='game-title'>Memory</div>
      <div className="score">Score:{score}</div>
    </Container>
  );
}

export default Navbar;