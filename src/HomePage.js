import React, { useEffect, useState } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { setNames } from './Store/game';

function HomePage(props) {

  const handleSubmit = (evt) => {

    evt.preventDefault();
    props.setNames(evt.target.mayorName.value, evt.target.cityName.value);
    props.history.push('/explanation');
  };

  return (
    <div className='homepage-container'>
      <div className='homepage-opening-container'>
        <h1 className='homepage-title'>cityzones</h1>
        <h2 className='homepage-tag-line'>Welcome to cityzones! Build a city today.</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <p>Mayor's Name</p>
            <input type='text' maxLength='15' name='mayorName' ></input>
          </div>
          <div>
            <p>City name</p>
            <input type='text' maxLength='15' name='cityName'  ></input>
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
