import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import HomePage from './HomePage'
import Explanation from './Explanation'


function Routes(props) {
  console.log(props)
  const cityName = props.cityName;
  return (
    <div className="App">
      <header className="App-header">

        <Switch>
          <Route exact path="/start" component={HomePage} />
          {cityName.isEmpty &&
            <Route exact path='/explanation' component={Explanation} />
          }
          <Route component={HomePage} />
          />

    </Switch>
      </header>
    </div>

  )


}


const mapState = (state) => {
  console.log(state)
  return {
    cityName: state.game.cityName,

  }
}

export default connect(mapState)(Routes);
