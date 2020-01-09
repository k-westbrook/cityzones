import React from 'react';
import { connect } from 'react-redux';
import LotMenu from './LotMenu';



function Lot(props) {
  const { lot } = props;
  return (
    <div className='lot-card'>
      {(lot.built || lot.lotType === 'empty') ?

        <p>{lot.lotType}, {lot.id}</p>
        :
        <p>Building...{lot.lotType}, {lot.id}</p>
      }

      <LotMenu lot={lot} built={lot.built} />
    </div>
  )
}

const mapState = (state) => {
  return {
    grid: state.game.grid

  }
}

export default connect(mapState)(Lot);
