export default class LotClass {

  constructor(lotType = 'empty', propertyValue = null, population = 0, id = null, row = 0, column = 0, built = false, monthsToBuild = 0, lotUpgrade = 1, propertyValueString = 'average', imageUrl = 'https://res.cloudinary.com/dmp2crnzz/image/upload/v1578637936/cityzones/empty.jpg') {
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
    this.imageUrl = imageUrl;
  }

}
