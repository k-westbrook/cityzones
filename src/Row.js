import React from 'react';
import { connect } from 'react-redux';
import Lot from './Lot';



function Row(props) {

  return (
    <div className='lot-row'>
      {props.row.map(lot => {
        return (
          <Lot key={lot.id} lot={lot} />
        )
      })}

    </div>
  )
}


export default Row;
