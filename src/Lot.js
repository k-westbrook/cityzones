import React from 'react';
import { connect } from 'react-redux';
import LotMenu from './LotMenu';



function Lot(props) {
  const { lot } = props;
  return (
    <div className='lot-card'>
      <p>{lot.lotType}, {lot.id}</p>
      <LotMenu lot={lot} />
    </div>
  )
}

const mapState = (state) => {
  return {
    grid: state.game.grid

  }
}

export default connect(mapState)(Lot);
