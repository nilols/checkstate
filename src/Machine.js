export default class Machine {
  constructor(models, generator, condition) {
    this._models = models;
    this._generator = new generator(models, condition);
    this.visitStates();
  }
  get models() {
    return this._models;
  }
  get generator() {
    return this._generator;
  }
  get isFulfilled() {
    return this._generator.isFulfilled;
  }
  executeNextAction() {
    // validate expected states
    this.generator.nextAction.execute();
    this.visitStates();
  }
  visitStates() {
    for (let model of this.models) {
      if (model.isActive) {
        for (let state of model.states) {
          if (state.isActive) {
            model.visit(state);
          }
        }
      }
    }
  }
}
