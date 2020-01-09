import LotClass from './LotClass'


export default class GridClass {

  constructor() {
    this.grid = [];
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
        row.push(newLotObject);
        idCount++;
      }
      this.grid.push(row);
    }


  }
}
