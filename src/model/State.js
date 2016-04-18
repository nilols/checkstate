import Element from './Element';

export default class State extends Element {
  constructor(id, fn) {
    super(id, fn);
  }
  get isActive() {
    return this.fn();
  }
}
