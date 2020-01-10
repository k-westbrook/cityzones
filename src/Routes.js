import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import HomePage from './HomePage'
import Explanation from './Explanation'
import GameBoard from './GameBoard'
import End from './End'


function Routes(props) {
  const { started } = props;
  return (
    <div className="App">
      <header className="App-header">

        <Switch>
          <Route exact path="/start" component={HomePage} />
          {started &&
            <Switch>
              < Route exact path='/explanation' component={Explanation} />
              <Route exact path='/play' component={GameBoard} />
              <Route exact path='/end' component={End} />
            </Switch>
          }
          <Redirect to="/start" />
          />
    </Switch>
      </header>
    </div>
  )
}

const mapState = (state) => {

  return {
    started: state.game.started,

  }
}

export default connect(mapState)(Routes);
