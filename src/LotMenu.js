import React from 'react';
import { connect } from 'react-redux'
import { setLotTypeClassMethod } from './Store/game'


function LotMenu(props) {

  function handleClick(evt) {
    props.setLotType(props.row, props.column, props.lotId, evt.target.value)
  }
  return (
    <div className='dropdown-lot-menu'>
      <div>
        <div>
          {(props.lotType === 'empty') ?
            <div className='build-lot-menu'>
              <button onClick={handleClick} value='residential' >Residential</button>
              <button onClick={handleClick}
                value='commercial'>Commercial</button>
              <button onClick={handleClick} value='hospital'>Hospital</button>
              <button onClick={handleClick} value='school'>School</button>
            </div>
            :
            <div>
              <p>Destroy</p>
            </div>
          }
        </div>
      </div>
    </div>
  )

}

const mapDispatch = (dispatch) => {
  return {
    setLotType: (row, column, id, type) => dispatch(setLotTypeClassMethod(row, column, id, type))
  }
}


export default connect(null, mapDispatch)(LotMenu);
