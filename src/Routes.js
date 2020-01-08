import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './HomePage'


function Routes() {

  return (
    <div className="App">
      <header className="App-header">

        <Switch>

          <Route exact path="/start" component={HomePage} />
          <Route component={HomePage} />
          />
    </Switch>
      </header>
    </div>

  )
}

export default Routes
