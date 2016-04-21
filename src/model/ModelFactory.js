import Action from './Action';
import State from './State';
import Model from './Model';

export default class ModelFactory {
  static create(file) {
    /*jshint -W061 */
    let json = JSON.parse(file);
    let model = new Model(json.id, '', eval('(' + json.function + ')'));
    let states = {};
    for (let state of json.states) {
      states[state.id] = new State(state.id, '', eval('(' + state.function + ')'));
      model.addState(states[state.id]);
    }
    for (let action of json.actions) {
      model.addAction(
        states[action.source],
        states[action.target],
        new Action(action.id, '', eval('(' + action.function + ')'), action.events));
    }
    /*jshint +W061 */
    return model;
  }
}
