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
  actionsByState(state) {
    return this._sources[state.id]
  }
  visit(element) {
    this._elements[element.id].count++;
  }
  addState(state) {
    if (state.id in this._elements) {
      throw new Error('state already exits')
    }
    this._elements[state.id] = {count:0}
    this._states.push(state)
    this._sources[state.id] = []
    return this;
  }
  addAction(source, target, action) {
    if (action.id in this._elements) {
      throw new Error('action already exits')
    }
    if (!(source.id in this._elements)) {
      this.addState(source)
    }
    if (!(target.id in this._elements)) {
      this.addState(target)
    }
    this._elements[action.id] = {}
    this._actions.push(action)
    this._sources[source.id].push(action)
    this._targets[action.id] = target
    return this;
  }
}
