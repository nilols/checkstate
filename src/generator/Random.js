export default class Random {
  constructor(models, condition) {
    this._models = models
    this._condition = new condition(models)
  }
  get models() {
    return this._models
  }
  get condition() {
    return this._condition
  }
  get isFulfilled() {
    return this.condition.isFulfilled
  }
  get nextAction() {
    let actions = this.findPossibleActions()
    return actions[Math.floor(Math.random() * actions.length)]
  }
  findPossibleActions() {
    let actions = []
    for (let model of this.models) {
      for (let state of model.states) {
        if (state.isActive) {
          actions = actions.concat(model.actionsByState(state))
        }
      }
    }
    return actions
  }
}
