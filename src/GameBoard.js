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
      <div className='gameboard-text-container'>
        <div className='gameboard-title'>
          <h1 > City of {props.cityName}</h1>
        </div>
        <div className='gameboard-data-container'>
          <div className='gameboard-data-title'>
            <p >
              City Data</p>
          </div>
          <div className='gameboard-data-text'>
            <p >
              Month: {props.month}
              <br />
              Bank Account: ${props.bankTotal}
              <br />
              Population: {props.population}</p>
          </div>
        </div>
        <div className='gameboard-finish-turn-button-container'>
          <button className='general-button' onClick={handleClick}>Finish Turn</button>
        </div>
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
