import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import HomePage from './HomePage'
import Explanation from './Explanation'
import GameBoard from './GameBoard'
import End from './End'


function Routes(props) {
  console.log(props)
  const cityName = props.cityName;
  return (
    <div className="App">
      <header className="App-header">

        <Switch>
          <Route exact path="/start" component={HomePage} />
          {/* {cityName.length > 0 && */}
          <Switch>
            < Route exact path='/explanation' component={Explanation} />
            <Route exact path='/play' component={GameBoard} />
            <Route exact path='/end' component={End} />
          </Switch>
          {/* } */}
          <Route component={HomePage} />
          />
    </Switch>
      </header>
    </div>
  )
}

const mapState = (state) => {

  return {
    cityName: state.game.cityName,

  }
}

export default connect(mapState)(Routes);
