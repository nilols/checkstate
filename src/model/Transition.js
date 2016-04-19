import Element from './Element';

export default class Transition extends Element {
  constructor(id, name, action, events = []) {
    super(id, name);
    this._action = action;
    this._events = events;
  }
  get action() {
    return this._action;
  }
  get events() {
    return this._events;
  }
}
