import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'




function Explanation(props) {
  const { cityName, mayorName } = props;

  const handleClick = () => {
    props.history.push('/play')
  }
  return (
    <div className='explanation-container'>
      <div className='explanation'>
        <h1 className='explanation-title'>Welcome to {cityName}</h1>
        <div className='explanation-text-container'>
          <p className='explanation-text'>Thank you Mayor {mayorName} for stepping in for me... I was supposed to create a city but I have found out that I need to take care of a sick family member. You job is to build the city up, grow its propulation, and make money. You will be able to build residential zones, commercial zones, schools, and hospitals.</p>
          <p className='explanation-text'><u>Residental zones</u> can make money from property taxes. <u>Commercial zones</u> can make money from corporate taxes. <u>Schools</u>can increase how much money businesses make. <u>Hospitals</u> can help your citizens and prevent population decrease. Remember that property taxes are based on property values. Having schools and hospitals near residential zones will help! Think about what would attract you to live in a city!</p>
          <p className='explanation-text' >
            You will begin in January 2020. Each turn, you will be able to build as many things as you want if you have the money. After you finish your turn and hit finished, a month will pass in time. Keep in mind that the properties take time to build so you may want to start building some things and not make any changes for several turns.</p>
        </div>
      </div>
      <button className='general-button' onClick={handleClick}>Start Playing!</button>

    </div >
  )
}


const mapState = (state) => {
  return {
    cityName: state.game.cityName,
    mayorName: state.game.mayorName

  }
}

export default connect(mapState)(Explanation);
