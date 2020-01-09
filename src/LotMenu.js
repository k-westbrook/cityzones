import React from 'react';



function LotMenu(props) {

  function handleClick(evt) {

    console.log(evt.target.value)
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


export default LotMenu;
