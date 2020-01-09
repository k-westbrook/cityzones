import LotClass from './LotClass'


export default class GridClass {

  constructor() {
    this.grid = [];
  }

  initializeGrid() {
    let newLotObject;
    let row;
    for (let i = 0; i < 6; i++) {
      newLotObject = new LotClass();
      row = [];
      for (let j = 0; j < 5; j++) {
        row.push(newLotObject);
      }
      this.grid.push(row);
    }


  }
}
