import axios from 'axios';
import history from '../history'

/**
 * ACTION TYPES
 */
const SET_NAMES = 'SET_NAMES';


/**
 * INITIAL STATE
 */
const gameObject = {
  grid: [],
  mayorName: '',
  cityName: ''
};


/**
 * ACTION CREATORS
 */

export const setNames = (mayorName, cityName) => ({ type: SET_NAMES, mayorName, cityName })



/**
 * THUNK CREATORS
 *///SPACE HOLDEr



/**
 * REDUCER
 */
export default function (state = gameObject, action) {
  switch (action.type) {
    case SET_NAMES:
      return { ...gameObject, mayorName: action.mayorName, cityName: action.cityName }

    default:
      return state
  }
}
