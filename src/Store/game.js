import axios from 'axios';
import history from '../history'
import GridClass from '../GameClasses/GridClass'

/**
 * ACTION TYPES
 */
const SET_NAMES = 'SET_NAMES';


/**
 * INITIAL STATE
 */
const newGridClass = new GridClass();
newGridClass.initializeGrid();
const gameObject = {
  grid: newGridClass,
  mayorName: '',
  cityName: ''
};


/**
 * ACTION CREATORS
 */

export const setNames = (mayorName, cityName) => ({ type: SET_NAMES, mayorName, cityName })



/**
 * THUNK CREATORS
 *///


//Space holder


/**
 * CLASS METHODS
 */


//space holder

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
