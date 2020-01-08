import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './HomePage'


function Routes() {

  return (
    <Switch>

      <Route exact path="/start" component={HomePage} />
      <Route component={HomePage} />
      />
    </Switch>

  )
}

export default Routes
