export default class LotClass {

  constructor(lotType = 'empty', propertyValue = null, population = 0, id = null, row = 0, column = 0, built = false, monthsToBuild = 0, lotUpgrade = 1, propertyValueString = 'average') {
    this.lotType = lotType;
    this.propertyValue = propertyValue;
    this.population = population;
    this.id = id;
    this.row = row;
    this.column = column;
    this.built = built;
    this.monthsToBuild = monthsToBuild;
    this.lotUpgrade = lotUpgrade;
    this.propertyValueString = propertyValueString;
  }

}
