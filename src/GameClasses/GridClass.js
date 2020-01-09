import LotClass from './LotClass'


export default class GridClass {

  constructor(grid = []) {
    this.grid = grid;
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

  calculateIncome() {
    let total = 0;
    let grid = this.grid;
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 5; j++) {

        if (grid[i][j].lotType === 'residential') {
          total += 5;
        } else if (grid[i][j].lotType === 'commercial') {
          total += 25;
        }
      }
    }

    return total;
  }

  calculateSchools() {
    let total = 0;
    let grid = this.grid;
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 5; j++) {

        if (grid[i][j].lotType === 'school') {
          total++;

        }
      }
    }

    return total;
  }


  calculateHospitals() {
    let total = 0;
    let grid = this.grid;
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 5; j++) {

        if (grid[i][j].lotType === 'hospital') {
          total++;

        }
      }
    }

    return total;
  }

  calculateBuilds() {
    let grid = this.grid;
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 5; j++) {

        if (grid[i][j].monthsToBuild > 0) {
          grid[i][j].monthsToBuild -= 1;
          if (grid[i][j].monthsToBuild === 0) {
            grid[i][j].built = true;
          }
        }

      }
    }

    return [...grid];
  }

}



