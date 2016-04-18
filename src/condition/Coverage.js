export default class Coverage {
  constructor(models) {
    this._models = models;
  }
  get models() {
    return this._models;
  }
  get isFulfilled() {
    for (let model of this.models) {
      for (let state of model.states) {
        if (0 === model.elements[state.id].count) {
          return false;
        }
      }
    }
    return true;
  }
}
