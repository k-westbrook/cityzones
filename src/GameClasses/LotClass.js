export default class LotClass {

  constructor(lotType = 'empty', propertyValue = 1, population = 0, id = null, row = 0, column = 0) {
    console.log(id)
    this.lotType = lotType;
    this.propertyValue = propertyValue;
    this.population = population;
    this.id = id;
    this.row = row;
    this.column = column;
  }

}
