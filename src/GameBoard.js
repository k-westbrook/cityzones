import React from 'react';
import Grid from './Grid';
import { connect } from 'react-redux'


function GameBoard(props) {


  return (
    <div>
      <h1> Gameboard</h1>
      <p>Bank Account: ${props.bankTotal}</p>
      <Grid />
    </div>
  )
}

const mapState = (state) => {
  return {
    bankTotal: state.game.bankTotal

  }
}


export default connect(mapState)(GameBoard);
