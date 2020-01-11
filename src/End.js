import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'




function End(props) {
  const { cityName, mayorName, bankTotal, population, overallPropertyValue } = props;

  const accomplishedIncome = bankTotal > 5000 ? 'yes' : 'no';
  const accomplishedPopulation = population > 1500 ? 'yes' : 'no';
  let won = false;

  if (accomplishedPopulation === 'yes' && accomplishedIncome === 'yes') {
    won = true;
  }

  return (
    <div className='end-container'>
      <div className='end-info'>
        <h2 className='end-header'>Year 3 End</h2>
        <p className='end-data'>Bank Account: {bankTotal}<br />
          Population: {population}<br />
          Overall Property Value {overallPropertyValue} <br />
          Did you finish your income goals? {accomplishedIncome}
          <br />
          Did you finsih your population goals? {accomplishedPopulation}</p>
      </div>
      {won ?
        <div className='end-won'>
          <p>Congrats! You won!</p>
        </div>
        :
        <div className='end-won'>
          <p>Try again, {mayorName}! {cityName} has great promise!</p>
        </div>

      }
    </div>
  )
}


const mapState = (state) => {
  return {
    cityName: state.game.cityName,
    mayorName: state.game.mayorName,
    bankTotal: state.game.bankTotal,
    population: state.game.population,
    month: state.game.month,
    grid: state.game.grid,
    overallPropertyValue: state.game.overallPropertyValue

  }
}

export default connect(mapState)(End);
