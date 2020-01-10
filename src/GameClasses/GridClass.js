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
    let totalPropertyValue = 0;
    let propertyCount = 0;

    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 5; j++) {
        if (grid[i][j].monthsToBuild > 0) {
          grid[i][j].monthsToBuild -= 1;
          if (grid[i][j].monthsToBuild === 0) {
            grid[i][j].built = true;
          }
        }
        if (grid[i][j].lotType === 'residential' && grid[i][j].built) {
          let valueMultiplier = this.updatePropertyValueAndPopulationMultiplier(i, j);
          population += 150 * (valueMultiplier.populationMultiplier);
          totalIncome += 5 * (valueMultiplier.propertyValueMultiplier);
          totalPropertyValue += valueMultiplier.propertyValueMultiplier;
          propertyCount++;
          grid[i][j].propertyValue = valueMultiplier.propertyValueMultiplier;
        }
        if (grid[i][j].lotType === 'hospital' && grid[i][j].built) {
          totalHospitals++;

        }
        if (grid[i][j].lotType === 'school' && grid[i][j].built) {
          totalSchools++;

        }
        if (grid[i][j].lotType === 'commercial' && grid[i][j].built) {
          let smartBusinessValue = 1.0;
          if (grid.numberSchools >= 10) {
            smartBusinessValue = 3.0;
          } else if (grid.numberSchools >= 7) {
            smartBusinessValue = 2.0;
          } else if (grid.numberSchools >= 3) {
            smartBusinessValue = 1.5
          }
          smartBusinessValue += grid[i][j].lotUpgrade * (0.25);
          totalIncome += 25 * (smartBusinessValue);
          grid[i][j].propertyValue = smartBusinessValue;

        }

        if (grid[i][j].propertyValue) {
          if (grid[i][j].propertyValue > 2.5) {
            grid[i][j].propertyValueString = 'very high'
          } else if (grid[i][j].propertyValue > 2.0) {
            grid[i][j].propertyValueString = 'high'
          } else if (grid[i][j].propertyValue > 1.5) {
            grid[i][j].propertyValueString = 'above average'
          } else if (grid[i][j].propertyValue > 1.0) {
            grid[i][j].propertyValueString = 'slightly above average'
          } else if (grid[i][j].propertyValue > 0.75) {
            grid[i][j].propertyValueString = 'below average'
          } else if (grid[i][j].propertyValue > 0.5) {
            grid[i][j].propertyValueString = 'low'
          } else {
            grid[i][j].propertyValueString = 'horrible'

          }
        }

      }
    }
    return { grid: [...grid], population, totalIncome, totalHospitals, totalSchools, overallPropertyValue: (totalPropertyValue / propertyCount) };
  }


  updatePropertyValueAndPopulationMultiplier(row, column) {
    let numberHospitals = 0;
    let numberSchools = 0;
    let numberResidential = 0;
    let numberCommercial = 0;
    let numberEmpty = 0;
    let propertyValueMultiplier = 1.0;
    let populationMultiplier = 1.0;

    if (this.grid[row]) {
      if (this.grid[row][column - 1]) {
        if (this.grid[row][column - 1].lotType === 'hospital') {
          numberHospitals++;
        } else if (this.grid[row][column - 1].lotType === 'commercial') {
          numberCommercial++;
        }
        else if (this.grid[row][column - 1].lotType === 'school') {
          numberSchools++;
        } else if (this.grid[row][column - 1].lotType === 'residential') {
          numberResidential++;
        } else {
          numberEmpty++;
        }
      }
      if (this.grid[row][column + 1]) {
        if (this.grid[row][column + 1].lotType === 'hospital') {
          numberHospitals++;
        } else if (this.grid[row][column + 1].lotType === 'commercial') {
          numberCommercial++;
        }
        else if (this.grid[row][column + 1].lotType === 'school') {
          numberSchools++;
        } else if (this.grid[row][column + 1].lotType === 'residential') {
          numberResidential++;
        } else {
          numberEmpty++;
        }
      }
    }


    if (this.grid[row - 1]) {
      if (this.grid[row - 1][column - 1]) {
        if (this.grid[row - 1][column - 1].lotType === 'hospital') {
          numberHospitals++;
        } else if (this.grid[row - 1][column - 1].lotType === 'commercial') {
          numberCommercial++;
        }
        else if (this.grid[row - 1][column - 1].lotType === 'school') {
          numberSchools++;
        } else if (this.grid[row - 1][column - 1].lotType === 'residential') {
          numberResidential++;
        } else {
          numberEmpty++;
        }

      }
      if (this.grid[row - 1][column]) {
        if (this.grid[row - 1][column].lotType === 'hospital') {
          numberHospitals++;
        } else if (this.grid[row - 1][column].lotType === 'commercial') {
          numberCommercial++;
        }
        else if (this.grid[row - 1][column].lotType === 'school') {
          numberSchools++;
        } else if (this.grid[row - 1][column].lotType === 'residential') {
          numberResidential++;
        } else {
          numberEmpty++;
        }

      }
      if (this.grid[row - 1][column + 1]) {
        if (this.grid[row - 1][column + 1].lotType === 'hospital') {
          numberHospitals++;
        } else if (this.grid[row - 1][column + 1].lotType === 'commercial') {
          numberCommercial++;
        }
        else if (this.grid[row - 1][column + 1].lotType === 'school') {
          numberSchools++;
        } else if (this.grid[row - 1][column + 1].lotType === 'residential') {
          numberResidential++;
        } else {
          numberEmpty++;
        }

      }
    }


    if (this.grid[row + 1]) {


      if (this.grid[row + 1][column + 1]) {
        if (this.grid[row + 1][column + 1].lotType === 'hospital') {
          numberHospitals++;
        } else if (this.grid[row + 1][column + 1].lotType === 'commercial') {
          numberCommercial++;
        }
        else if (this.grid[row + 1][column + 1].lotType === 'school') {
          numberSchools++;
        } else if (this.grid[row + 1][column + 1].lotType === 'residential') {
          numberResidential++;
        } else {
          numberEmpty++;
        }

      }

      if (this.grid[row + 1][column]) {
        if (this.grid[row + 1][column].lotType === 'hospital') {
          numberHospitals++;
        } else if (this.grid[row + 1][column].lotType === 'commercial') {
          numberCommercial++;
        }
        else if (this.grid[row + 1][column].lotType === 'school') {
          numberSchools++;
        } else if (this.grid[row + 1][column].lotType === 'residential') {
          numberResidential++;
        } else {
          numberEmpty++;
        }

      }
      if (this.grid[row + 1][column - 1]) {
        if (this.grid[row + 1][column - 1].lotType === 'hospital') {
          numberHospitals++;
        } else if (this.grid[row + 1][column - 1].lotType === 'commercial') {
          numberCommercial++;
        }
        else if (this.grid[row + 1][column - 1].lotType === 'school') {
          numberSchools++;
        } else if (this.grid[row + 1][column - 1].lotType === 'residential') {
          numberResidential++;
        } else {
          numberEmpty++;
        }

      }
    }

    if (numberSchools >= 2) {
      propertyValueMultiplier += 0.5;
    } else if (numberSchools === 0) {
      propertyValueMultiplier -= 0.25;
    } else if (numberSchools === 1) {
      populationMultiplier += 0.25;
      propertyValueMultiplier += 0.25;
    }

    if (numberHospitals >= 1) {
      propertyValueMultiplier += 0.25;
      populationMultiplier += 0.5;
    } else if (numberHospitals === 0) {
      propertyValueMultiplier -= 0.25;
    }

    if (numberResidential >= 5 || numberEmpty >= 7) {
      propertyValueMultiplier += 0.25
    }

    if (numberCommercial >= 4) {
      propertyValueMultiplier -= 0.25;
    } else if (numberCommercial >= 1) {
      populationMultiplier += 0.25;
    }

    propertyValueMultiplier += this.grid[row][column].lotUpgrade * (0.25);

    return { propertyValueMultiplier, populationMultiplier };
  }

}



