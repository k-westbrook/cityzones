import React, { useEffect, useState } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { setNames } from './Store/game';

function HomePage(props) {

  const [mayorName, setMayorName] = useState('');
  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.setNames(mayorName, cityName);
    props.history.push('/explanation');
  };


  const [cityName, setCityName] = useState('');

  return (
    <div>
      <h1>cityzones</h1>
      <h2>Welcome to cityzones! Build a city today.</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <p>Mayor's Name</p>
            <input type='text' maxLength='15' onChange={evt => setMayorName(evt.target.value)}></input>
          </div>
          <div>
            <p>City name</p>
            <input type='text' maxLength='15' onChange={evt => setCityName(evt.target.value)}></input>
          </div>
          <button>Start Game</button>
        </form>
      </div>
      <div>
        <p>The Mayor's Name is {mayorName}. The city's name is {cityName}</p>
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
