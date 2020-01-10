import React from 'react';
import Grid from './Grid';
import { connect } from 'react-redux'
import { finishTurnClassMethod } from './Store/game'

function GameBoard(props) {


  function handleClick() {
    let currentGrid = props.grid;
    props.finishTurn(currentGrid)
    if (props.month > 35) {
      props.history.push('/end');
    }
  }
  return (
    <div className='gameboard-container'>
      <div>
        <h1 className='gameboard-title'> City of {props.cityName}</h1>
        <div>
          <p>
            Month: {props.month}
            <br />
            Bank Account: ${props.bankTotal}
            <br />
            Population:{props.population}</p>
        </div>
        <button onClick={handleClick}>Finished Turn</button>
      </div>
      <Grid />
    </div>
  )
}

const mapState = (state) => {
  return {
    cityName: state.game.cityName,
    bankTotal: state.game.bankTotal,
    population: state.game.population,
    month: state.game.month,
    grid: state.game.grid

  }
}

const mapDispatch = (dispatch) => {
  return {
    finishTurn: (currentGrid) => dispatch(finishTurnClassMethod(currentGrid))
  }
}


export default connect(mapState, mapDispatch)(GameBoard);
