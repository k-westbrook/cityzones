import React from 'react';
import Grid from './Grid';
import { connect } from 'react-redux'
import { finishTurnClassMethod } from './Store/game'

function GameBoard(props) {


  return (
    <div>
      <div>
        <h1> Gameboard</h1>
        <div>
          <p>Bank Account: ${props.bankTotal}
            <br />
            Population:{props.population}</p>
        </div>
        <button>Finished Turn</button>
      </div>
      <Grid />
    </div>
  )
}

const mapState = (state) => {
  return {
    bankTotal: state.game.bankTotal,
    population: state.game.population

  }
}

const mapDispatch = (dispatch) => {
  return {
    finishTurn: () => dispatch(finishTurnClassMethod())
  }
}


export default connect(mapState, mapDispatch)(GameBoard);
