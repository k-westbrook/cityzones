import React from 'react';
import { connect } from 'react-redux'
import { setLotTypeClassMethod } from './Store/game'


function LotMenu(props) {

  function handleClick(evt) {
    props.setLotType(props.lot.row, props.lot.column, props.lot.id, evt.target.value)

  }
  return (
    <div className='dropdown-lot-menu'>
      <div>
        <div>
          {(props.lot.lotType === 'empty') ?
            <div className='build-lot-menu'>
              {(props.bankTotal >= 50) &&
                <button onClick={handleClick} value='residential' >Residential</button>
              }
              {(props.bankTotal >= 100) &&
                <button onClick={handleClick}
                  value='commercial'>Commercial</button>
              }
              {(props.bankTotal >= 250) &&
                <button onClick={handleClick} value='hospital'>Hospital</button>
              }
              {(props.bankTotal >= 150) &&
                <button onClick={handleClick} value='school'>School</button>
              }
              {(props.bankTotal < 50) &&
                <p>Not Enough Money</p>
              }
            </div>
            :
            <div>
              {(props.bankTotal >= 50) ?
                <button onClick={handleClick} value='empty'>Destroy</button>

                :
                <div>
                  <p>Not Enough Money</p>
                </div>
              }
            </div>
          }
        </div>
      </div>
    </div>
  )
}
const mapState = (state) => {
  return {
    bankTotal: state.game.bankTotal


  }
}


const mapDispatch = (dispatch) => {
  return {
    setLotType: (row, column, id, type) => dispatch(setLotTypeClassMethod(row, column, id, type))
  }
}


export default connect(mapState, mapDispatch)(LotMenu);
