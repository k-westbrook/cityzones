import React from 'react';
import { connect } from 'react-redux';
import Lot from './Lot';



function Grid(props) {

  const { grid } = props;
  return (
    <div>
      {grid.map(lot => {
        return (
          <Lot />
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
