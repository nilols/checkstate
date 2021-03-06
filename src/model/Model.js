import Edge from './Edge';
import Element from './Element';

export default class Model extends Element {
  constructor(id, name) {
    super(id, name);
    this._elements = {};
    this._adjacent = {};
    this._states = [];
    this._actions = [];
    this._sources = {};
    this._targets = {};
  }
  get elements() {
    return this._elements;
  }
  get states() {
    return this._states;
  }
  get actions() {
    return this._actions;
  }
  get sources() {
    return this._sources;
  }
  get targets() {
    return this._targets;
  }
  getAdjacentStates(state) {
    return this._adjacent[state.id];
  }
  getStateById(id) {
    return this.elements[id];
  }
  actionsByState(state) {
    return this.sources[state.id];
  }
  visit(element) {
    //this.elements[element.id].count++;
  }
  addState(state) {
    if (state.id in this.elements) {
      throw new Error('id already exits');
    }
    this.elements[state.id] = state;
    this.states.push(state);
    this.sources[state.id] = [];
    return this;
  }
  addAction(source, target, action) {
    if (action.id in this.elements) {
      throw new Error('id already exits');
    }
    if (!(source.id in this.elements)) {
      this.addState(source);
    }
    if (!(target.id in this.elements)) {
      this.addState(target);
    }
    this.elements[action.id] = action;
    this.actions.push(action);
    this.sources[source.id].push(action);
    this.targets[action.id] = target;
    return this;
  }
}
