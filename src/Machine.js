export default class Machine {
  constructor(models, generator, condition) {
    this._models = models;
    this._generator = new generator(models, condition)
    this.visitStates()
  }
  get isFulfilled() {
    return this._generator.isFulfilled
  }
  get executeNextAction() {
    // validate expected states
    this._generator.nextAction.execute()
    this.visitStates()
  }
  visitStates() {
    for (let model of this._models) {
      for (let state of model.states) {
        if (state.isActive) {
          model.visit(state)
        }
      }
    }
  }
}
