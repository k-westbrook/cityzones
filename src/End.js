import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'




function End(props) {
  const { cityName, mayorName, bankTotal, population } = props;

  const accomplishedIncome = bankTotal > 5000 ? 'yes' : 'no';
  const accomplishedPopulation = population > 1500 ? 'yes' : 'no';
  let won = false;

  if (accomplishedPopulation === 'yes' && accomplishedIncome === 'yes') {
    won = true;
  }

  return (
    <div>
      <h2>Year 3 End</h2>
      <p>Bank Account: {bankTotal}<br />
        Population: {population}<br />
        Did you finish your income goals? {accomplishedIncome}
        <br />
        Did you finsih your population goals? {accomplishedPopulation}</p>
      {won ?
        <div>
          <p>Congrats! You won!</p>
        </div>
        :
        <div>
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
    grid: state.game.grid

  }
}

export default connect(mapState)(End);
