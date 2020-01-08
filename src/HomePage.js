import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { setNames } from './Store/game';

function HomePage() {
  return (
    <div>
      <h1>cityzones</h1>
      <h2>Welcome to cityzones! Build a city today.</h2>
      <div>
        <form>
          <div>
            <p>Mayor's Name</p>
            <input type='text' maxLength='15'></input>
          </div>
          <div>
            <p>City name</p>
            <input type='text' maxLength='15'></input>
          </div>
          <button>Start Game</button>
        </form>
      </div>
    </div>
  );
}

const mapDispatch = (dispatch) => {
  return {
    setNames: (mayorName, cityName) => dispatch(setNames(mayorName, cityName))
  }
}

export default connect(null, mapDispatch)(HomePage);
