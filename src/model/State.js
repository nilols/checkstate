import Element from './Element';

export default class State extends Element {
  constructor(id, name, fn) {
    super(id, name, fn);
  }
  get isActive() {
    return this.fn();
  }
}
