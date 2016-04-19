import {Transition, Model, State, Coverage, Random} from '../lib/index';
import assert from 'assert';

describe('generator', () => {
  it('random', () => {
    let state = 'source';
    let model = new Model('model', '', function() {return true;})
      .addAction(
        new State('source', '', function() {return 'source' == state;}),
        new State('target', '', function() {return 'target' == state;}),
        new Transition('action', '', function() {state = 'target';}));
    let generator = new Random([model], Coverage);
    assert.equal(generator.isFulfilled, false, 'should have more actions');
    model.elements.source.count = 1;
    assert.equal(generator.nextAction, model.actions[0], 'should return action');
    assert.equal(generator.isFulfilled, false, 'should have more actions');
    model.elements.action.count = 1;
    assert.equal(generator.isFulfilled, false, 'should have more actions');
    model.elements.target.count = 1;
    assert.equal(generator.isFulfilled, true, 'should not have more actions');
  });
});
