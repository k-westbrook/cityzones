import axios from 'axios';
import history from '../history'
import GridClass from '../GameClasses/GridClass'
import LotClass from '../GameClasses/LotClass'

/**
 * ACTION TYPES
 */
const SET_NAMES = 'SET_NAMES';
const SET_LOT_TYPE = 'SET_LOT_TYPE';


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
const setLotType = (row, column, newLotObject) => ({ type: SET_LOT_TYPE, row, column, newLotObject })


/**
 * THUNK CREATORS
 *///


//Space holder


/**
 * CLASS METHODS
 */

export const setLotTypeClassMethod = (row, column, id, type) => async dispatch => {

  try {

    let population = 0;

    if (type === 'residential') {
      population = 150;
    }

    let newLotObject = new LotClass(type, 1, population, id, row, column);

    dispatch(setLotType(row, column, newLotObject));

  } catch (err) {
    console.log(err);
  }

}
//space holder

/**
 * REDUCER
 */
export default function (state = gameObject, action) {
  switch (action.type) {
    case SET_NAMES:
      return { ...state, mayorName: action.mayorName, cityName: action.cityName }
    case SET_LOT_TYPE:
      {

        let newGrid = [...state.grid.grid];
        newGrid[action.row][action.column] = action.newLotObject;
        let newGridClass = new GridClass(newGrid)
        return { ...state, grid: newGridClass };
      }
    default:
      return state
  }
}
