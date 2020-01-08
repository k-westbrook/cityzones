import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import Store from './Store';


function App() {
  return (
    <div>
      <Provider store={Store}>
        <Router>
          <Routes />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
