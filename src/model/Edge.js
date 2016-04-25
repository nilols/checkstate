import Element from './Element';

export default class Edge extends Element {
  constructor(id, name, action, events = []) {
    super(id, name);
    this._action = action;
    this._events = events;
  }
  get events() {
    return this._events;
  }
  execute() {
    return this._action();
  }
}
