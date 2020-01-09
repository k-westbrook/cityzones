import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'




function End(props) {
  const { cityName, mayorName } = props;


  return (
    <div>
      <h2>Welcome to the End!</h2>
    </div>
  )
}


const mapState = (state) => {
  return {
    cityName: state.game.cityName,
    mayorName: state.game.mayorName

  }
}

export default connect(mapState)(End);
