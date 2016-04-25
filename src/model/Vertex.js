import Element from './Element';

export default class Vertex extends Element {
  constructor(id, name, state) {
    super(id, name);
    this._state = state;
  }
  isActive() {
    return this._state();
  }
}
