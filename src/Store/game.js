import axios from 'axios';
import history from '../history'
import GridClass from '../GameClasses/GridClass'
import LotClass from '../GameClasses/LotClass'

/**
 * ACTION TYPES
 */
const SET_NAMES = 'SET_NAMES';
const SET_LOT_TYPE = 'SET_LOT_TYPE';
const FINISH_TURN = 'FINISH_TURN';

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
  population: 0,
  month: 0,
  numberOfHospitals: 0,
  numberOfSchools: 0
};


/**
 * ACTION CREATORS
 */

export const setNames = (mayorName, cityName) => ({ type: SET_NAMES, mayorName, cityName })
const setLotType = (row, column, newLotObject, cost, population) => ({ type: SET_LOT_TYPE, row, column, newLotObject, cost, population })
const finishTurn = (totalMonthlyIncome, totalHospitals, totalSchools) => ({ type: FINISH_TURN, totalMonthlyIncome, totalHospitals, totalSchools })

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


export const finishTurnClassMethod = (grid) => async dispatch => {

  try {

    let totalMonthlyIncome = grid.calculateIncome();
    let totalSchools = grid.calculateSchools();
    let totalHospitals = grid.calculateHospitals();
    dispatch(finishTurn(totalMonthlyIncome, totalHospitals, totalSchools))

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
    case FINISH_TURN:
      {
        console.log(action)
        let newMonth = state.month + 1;
        let newBankTotal = state.bankTotal + action.totalMonthlyIncome;
        let newPopulationTotal = state.population;
        if (state.population > 20 && state.population / 600 >= action.totalHospitals) {
          newPopulationTotal -= 20;
        }
        return { ...state, month: newMonth, bankTotal: newBankTotal, numberOfHospitals: action.totalHospitals, numberOfSchools: action.totalSchools, population: newPopulationTotal };

      }
    default:
      return state
  }
}
