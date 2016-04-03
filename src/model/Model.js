import Action from './Action'
import State from './State'

export default class Model extends State {
  constructor(id, fn) {
    super(id, fn)
    this._elements = {}
    this._states = []
    this._actions = []
    this._sources = {}
    this._targets = {}
  }
  get elements() {
    return this._elements
  }
  get states() {
    return this._states
  }
  get actions() {
    return this._actions
  }
  get sources() {
    return this._sources
  }
  get targets() {
    return this._targets
  }
  actionsByState(state) {
    return this.sources[state.id]
  }
  visit(element) {
    this.elements[element.id].count++;
  }
  addState(state) {
    if (state.id in this.elements) {
      throw new Error('id already exits')
    }
    this.elements[state.id] = {count:0}
    this.states.push(state)
    this.sources[state.id] = []
    return this;
  }
  addAction(source, target, action) {
    if (action.id in this.elements) {
      throw new Error('id already exits')
    }
    if (!(source.id in this.elements)) {
      this.addState(source)
    }
    if (!(target.id in this.elements)) {
      this.addState(target)
    }
    this.elements[action.id] = {count:0}
    this.actions.push(action)
    this.sources[source.id].push(action)
    this.targets[action.id] = target
    return this;
  }
  static parse(file) {
    let json = JSON.parse(file)
    let model = new Model(json.id, eval('(' + json.function + ')'))
    let states = {}
    for (let state of json.states) {
      states[state.id] = new State(state.id, eval('(' + state.function + ')'))
      model.addState(states[state.id])
    }
    for (let action of json.actions) {
      model.addAction(
        states[action.source],
        states[action.target],
        new Action(action.id, eval('(' + action.function + ')')))
    }
    return model
  }
}
