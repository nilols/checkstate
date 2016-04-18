import Element from './Element';

export default class Action extends Element {
  constructor(id, fn, events) {
    super(id, fn);
    this._events = events;
  }
  get events() {
    return this._events;
  }
  execute() {
    this.fn();
  }
}
