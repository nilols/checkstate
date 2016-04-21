export default class Element {
  constructor(id, name, fn) {
    this._id = id;
    this._name = name;
    this._fn = fn;
  }
  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
  get fn() {
    return this._fn;
  }
}
