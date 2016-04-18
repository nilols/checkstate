import md5 from 'md5';

export default class Element {
  constructor(id = Element.throwIfMissing('id'), fn = Element.throwIfMissing('fn')) {
    this._fn = fn;
    this._id = id;
    this._hash = md5(fn);
  }
  static throwIfMissing(name) {
    throw new Error('Parameter [' + name + '] is not defined');
  }
  get id() {
    return this._id;
  }
  get fn() {
    return this._fn;
  }
  get hash() {
    return this._hash;
  }
}
