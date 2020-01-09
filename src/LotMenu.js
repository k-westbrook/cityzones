import React from 'react';
import LotTypeMenu from './LotTypeMenu';


function LotMenu() {
  return (
    <div className='dropdown-lot-menu'>
      <div>
        <div>
          <div className='build-lot-menu'>
            <p>Build</p>
          </div>
          <p>Destroy</p>
          <div className='dropdown-lot-type-menu'>
            <LotTypeMenu />
          </div>
        </div>
      </div>
    </div>
  )

}


export default LotMenu;
