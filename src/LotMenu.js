import React from 'react';



function LotMenu(props) {
  return (
    <div className='dropdown-lot-menu'>
      <div>
        <div>
          {(props.lotType === 'empty') ?
            <div className='build-lot-menu'>
              <p>Residential</p>
              <p>Commercial</p>
              <p>School</p>
              <p>Hospital</p>

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


export default LotMenu;
