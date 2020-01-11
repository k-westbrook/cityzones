import React from 'react';
import { connect } from 'react-redux'
import { setLotTypeClassMethod } from './Store/game'


function LotMenu(props) {

  function handleClick(evt) {
    if (evt.target.value !== 'upgrade') {
      props.setLotType(props.lot.row, props.lot.column, props.lot.id, evt.target.value)
    } else {

      props.setLotType(props.lot.row, props.lot.column, props.lot.id, props.lot.lotType, true, props.lot.lotUpgrade)

    }
  }

  return (
    <div className='dropdown-lot-menu'>
      <div>
        <div>
          {(props.lot.lotType === 'empty') ?
            <div className='build-lot-menu'>
              {(props.bankTotal >= 50) &&
                <button className='dropdown-lot-menu-button' onClick={handleClick} value='residential' >Residential</button>
              }
              {(props.bankTotal >= 100) &&
                <button className='dropdown-lot-menu-button' onClick={handleClick}
                  value='commercial'>Commercial</button>
              }
              {(props.bankTotal >= 250) &&
                <button className='dropdown-lot-menu-button' onClick={handleClick} value='hospital'>Hospital</button>
              }
              {(props.bankTotal >= 150) &&
                <button onClick={handleClick} className='dropdown-lot-menu-button' value='school'>School</button>
              }
              {(props.bankTotal < 50) &&
                <p>Not Enough Money</p>
              }
            </div>
            :
            <div>
              <div className='dropdown-lot-menu-data'>
                <p> Type: {props.lot.lotType}
                  <br />
                  Value: {props.lot.propertyValueString}

                </p>
              </div>
              {(props.bankTotal >= 50) ?
                <div>
                  <button className='dropdown-lot-menu-button' onClick={handleClick} value='empty'>Destroy</button>
                  {(props.lot.lotUpgrade < 3 && props.lot.built && (props.lot.lotType === 'residential' || props.lot.lotType === 'commercial')) &&
                    <button className='dropdown-lot-menu-button' value='upgrade' onClick={handleClick}>Upgrade</button>

                  }
                </div>
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
    setLotType: (row, column, id, type, isUpgrade, lotUpgrade) => dispatch(setLotTypeClassMethod(row, column, id, type, isUpgrade, lotUpgrade))
  }
}


export default connect(mapState, mapDispatch)(LotMenu);
