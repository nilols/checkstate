import Element from './Element';

export default class Transition extends Element {
  constructor(id, action, events) {
    super(id, action);
    this._events = events;
  }
  get events() {
    return this._events;
  }
  execute() {
    this.fn();
  }
}
