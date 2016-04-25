import {Edge, Model, Vertex, Coverage} from '../lib/index';
import assert from 'assert';

describe('condition', () => {
  it('coverage', () => {
    /*
    let state = 'source';
    let model = new Model('model', '', function() {return true;})
      .addAction(
        new Vertex('source', '', function() {return 'source' == state;}),
        new Vertex('target', '', function() {return 'target' == state;}),
        new Edge('action', '', function() {state = 'target';}));
    let coverage = new Coverage([model]);
    assert.equal(coverage.isFulfilled, false, 'should have more actions');
    model.elements.source.count = 1;
    assert.equal(coverage.isFulfilled, false, 'should have more actions');
    model.elements.action.count = 1;
    assert.equal(coverage.isFulfilled, false, 'should have more actions');
    model.elements.target.count = 1;
    assert.equal(coverage.isFulfilled, true, 'should not have more actions');
    */
  });
});
