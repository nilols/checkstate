import {Edge, Model, Vertex, Coverage, Random} from '../lib/index';
import assert from 'assert';

describe('generator', () => {
  it('random', () => {
    /*
    let state = 'source';
    let model = new Model('model', '', function() {return true;})
      .addAction(
        new Vertex('source', '', function() {return 'source' == state;}),
        new Vertex('target', '', function() {return 'target' == state;}),
        new Edge('action', '', function() {state = 'target';}));
    let generator = new Random([model], Coverage);
    assert.equal(generator.isFulfilled, false, 'should have more actions');
    model.elements.source.count = 1;
    assert.equal(generator.nextAction, model.actions[0], 'should return action');
    assert.equal(generator.isFulfilled, false, 'should have more actions');
    model.elements.action.count = 1;
    assert.equal(generator.isFulfilled, false, 'should have more actions');
    model.elements.target.count = 1;
    assert.equal(generator.isFulfilled, true, 'should not have more actions');
    */
  });
});
