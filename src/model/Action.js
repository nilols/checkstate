import Element from './Element';

export default class Action extends Element {
  constructor(id, name, fn, events = []) {
    super(id, name, fn);
    this._events = events;
  }
  get execute() {
    return this.fn;
  }
  get events() {
    return this._events;
  }
}
