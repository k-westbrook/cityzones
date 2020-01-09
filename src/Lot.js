import React from 'react';
import { connect } from 'react-redux';



function Lot(props) {

  return (
    <div>

    </div>
  )
}

const mapState = (state) => {
  return {
    grid: state.game.grid

  }
}

export default connect(mapState)(Lot);
