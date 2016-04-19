import Element from './Element';

export default class State extends Element {
  constructor(id, name, fn) {
    super(id, name);
    this._fn = fn;
  }
  get isActive() {
    return this._fn();
  }
}
