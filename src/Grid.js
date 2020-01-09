import React from 'react';
import { connect } from 'react-redux';
import Lot from './Lot';
import Row from './Row';



function Grid(props) {

  const { grid } = props.grid;
  let count = -1;
  return (
    <div>
      {grid.map(row => {
        count++;
        return (
          <Row key={count} row={row} />
        )
      })}

    </div>
  )
}

const mapState = (state) => {
  return {
    grid: state.game.grid

  }
}

export default connect(mapState)(Grid);
