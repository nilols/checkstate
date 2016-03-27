import Element from './Element'

export default class Action extends Element {
  constructor(id, fn) {
    super(id, fn)
  }
  execute() {
    this.fn()
  }
}
