import LotClass from './LotClass'


export default class GridClass {

  constructor(grid = [], population = 0, numberSchools = 0, numberHospitals = 0) {
    this.grid = grid;
    this.population = population;
    this.numberSchools = numberSchools;
    this.numberHospitals = numberHospitals;
  }

  initializeGrid() {
    let newLotObject;
    let row;
    let idCount = 0;

    for (let i = 0; i < 6; i++) {
      row = [];
      for (let j = 0; j < 5; j++) {
        newLotObject = new LotClass();
        newLotObject.id = idCount;
        newLotObject.row = i;
        newLotObject.column = j;
        row.push(newLotObject);
        idCount++;
      }
      this.grid.push(row);
    }
  }

  finishTurn() {
    let grid = this.grid;
    let population = 0;
    let totalHospitals = 0;
    let totalSchools = 0;
    let totalIncome = 0;
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 5; j++) {
        if (grid[i][j].monthsToBuild > 0) {
          grid[i][j].monthsToBuild -= 1;
          if (grid[i][j].monthsToBuild === 0) {
            grid[i][j].built = true;
          }
        }
        if (grid[i][j].lotType === 'residential' && grid[i][j].built) {
          population += 150;
          totalIncome += 5;
        }
        if (grid[i][j].lotType === 'hospital' && grid[i][j].built) {
          totalHospitals++;

        }
        if (grid[i][j].lotType === 'school' && grid[i][j].built) {
          totalSchools++;

        }
        if (grid[i][j].lotType === 'commercial' && grid[i][j].built) {
          totalIncome += 25;
        }

      }
    }
    return { grid: [...grid], population, totalIncome, totalHospitals, totalSchools };
  }

}



