export default class Coverage {
  constructor(models) {
    this._models = models
  }
  get hasMoreActions() {
    for (let model of this._models) {
      for (let state of model.states) {
        if (0 == model.elements[state.id].count) {
          return true;
        }
      }
    }
    return false;
  }
}
