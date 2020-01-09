import React from 'react';
import { connect } from 'react-redux';
import Lot from './Lot';



function Row(props) {

  const { grid } = props.grid;
  return (
    <div>
      {grid.map(lot => {
        return (
          <Lot key={lot.id} />
        )
      })}

    </div>
  )
}


export default Row;
