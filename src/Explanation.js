import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'



function Explanation(props) {
  console.log(props)
  return (
    <div>
      <h1>Explanation</h1>
    </div>
  )
}


const mapState = (state) => {
  return {
    gameState: state.game

  }
}

export default connect(mapState)(Explanation);
