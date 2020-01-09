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
  cityName: '',
  bankTotal: 1000,
  population: 0
};


/**
 * ACTION CREATORS
 */

export const setNames = (mayorName, cityName) => ({ type: SET_NAMES, mayorName, cityName })
const setLotType = (row, column, newLotObject, cost, population) => ({ type: SET_LOT_TYPE, row, column, newLotObject, cost, population })


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
    let cost = 100;

    if (type === 'residential') {
      population = 150;
      cost = 50;
    } else if (type === 'school') {
      cost = 150;
    } else if (type === 'hospital') {
      cost = 250;
    }

    let newLotObject = new LotClass(type, 1, population, id, row, column);

    dispatch(setLotType(row, column, newLotObject, cost, population));

  } catch (err) {
    console.log(err);
  }

}


export const finishTurnClassMethod = () => async dispatch => {

  try {

  } catch (err) {
    console.log(err)

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
        let newGridClass = new GridClass(newGrid);
        let newBankTotal = state.bankTotal - action.cost;
        let newPopulationTotal = state.population + action.population;
        return { ...state, grid: newGridClass, bankTotal: newBankTotal, population: newPopulationTotal };
      }
    default:
      return state
  }
}
