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
  mayorName: 'Sea',
  cityName: 'Seattle',
  bankTotal: 1000,
  population: 0,
  month: 0,
  numberOfHospitals: 0,
  numberOfSchools: 0,
  overallPropertyValue: 1.0
};


/**
 * ACTION CREATORS
 */

export const setNames = (mayorName, cityName) => ({ type: SET_NAMES, mayorName, cityName })
const setLotType = (row, column, newLotObject, cost, population, built, monthsToBuild) => ({ type: SET_LOT_TYPE, row, column, newLotObject, cost, population, built, monthsToBuild })
const finishTurn = (newGrid, totalMonthlyIncome, totalHospitals, totalSchools, newPopulationTotal, overallPropertyValue) => ({ type: FINISH_TURN, newGrid, totalMonthlyIncome, totalHospitals, totalSchools, newPopulationTotal, overallPropertyValue })

/**
 * THUNK CREATORS
 *///


//Space holder


/**
 * CLASS METHODS
 */

export const setLotTypeClassMethod = (row, column, id, type, isUpgrade = false, currentLotLevel = 1) => async dispatch => {

  try {

    let population = 0;
    let cost = 100;
    let monthsToBuild = 0;
    let built = false;
    let level = currentLotLevel;

    if (type === 'residential') {
      population = 150;
      monthsToBuild = 2;
      if (isUpgrade) {
        cost = 50;
        population += 50;
        monthsToBuild = 1;
        level++;
      }
      cost = 50;
    } else if (type === 'school') {
      cost = 150;
      monthsToBuild = 6;
    } else if (type === 'hospital') {
      cost = 250;
      monthsToBuild = 8;
    } else if (type === 'commercial') {
      monthsToBuild = 4;
      if (isUpgrade) {
        cost = 100
        monthsToBuild = 2;
        level++;
      }
    }


    let newLotObject = new LotClass(type, null, population, id, row, column, built, monthsToBuild, level);

    dispatch(setLotType(row, column, newLotObject, cost, population));

  } catch (err) {
    console.log(err);
  }

}


export const finishTurnClassMethod = (grid) => async dispatch => {

  try {
    let turnDataObject = grid.finishTurn();
    dispatch(finishTurn(turnDataObject.grid, turnDataObject.totalIncome, turnDataObject.totalHospitals, turnDataObject.totalSchools, turnDataObject.population, turnDataObject.overallPropertyValue))

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
        let newGridClass = new GridClass(newGrid, state.population, state.numberOfSchools, state.numberOfHospitals);
        let newBankTotal = state.bankTotal - action.cost;
        return { ...state, grid: newGridClass, bankTotal: newBankTotal };
      }
    case FINISH_TURN:
      {

        let newGrid = action.newGrid;
        let newMonth = state.month + 1;
        let newBankTotal = state.bankTotal + action.totalMonthlyIncome;
        let newPopulationTotal = action.newPopulationTotal;
        if (newPopulationTotal > 20 && newPopulationTotal / 600 >= action.totalHospitals && state.month > 6) {
          newPopulationTotal -= 20;
        }
        let newGridObject = new GridClass(newGrid, newPopulationTotal, action.totalSchools, action.totalHospitals);
        return { ...state, grid: newGridObject, month: newMonth, bankTotal: newBankTotal, numberOfHospitals: action.totalHospitals, numberOfSchools: action.totalSchools, population: newPopulationTotal, overallPropertyValue: action.overallPropertyValue };

      }
    default:
      return state
  }
}
