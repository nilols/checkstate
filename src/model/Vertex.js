import Element from './Element';

export default class Vertex extends Element {
  constructor(id, name, fn) {
    super(id, name, fn);
  }
  isActive() {
    return this.fn();
  }
}