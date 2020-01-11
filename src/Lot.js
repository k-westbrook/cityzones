import React from 'react';
import { connect } from 'react-redux';
import LotMenu from './LotMenu';



function Lot(props) {
  console.log(props.lot.imageUrl)
  const { lot } = props;
  return (
    <div className='lot-card' style={{ backgroundImage: `url("${lot.imageUrl}")` }}>
      {(lot.built || lot.lotType === 'empty') ?
        <div>
          <p>{lot.lotType}, {lot.id}</p>
          <p>{lot.propertyValue}, {lot.propertyValueString}</p>
          <p>LEVEL:{lot.lotUpgrade}</p>
        </div>
        :
        <p>Building...{lot.lotType}, {lot.id}, {lot.monthsToBuild} ,{lot.built} </p>
      }

      <LotMenu lot={lot} built={lot.built} />
    </div >
  )
}

const mapState = (state) => {
  return {
    grid: state.game.grid

  }
}

export default connect(mapState)(Lot);
