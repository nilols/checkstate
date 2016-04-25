import {Action, Model, ModelFactory, State} from '../../lib/index';
import DepthFirstSearch from '../../lib/algorithm/DepthFirstSearch';
import assert from 'assert';

describe('DepthFirstSearch', () => {
  it('simple', () => {
    let model = new Model('model', '', function() {return true;})
      .addAction(
        new State('source', '', function() {return 'source' == state;}),
        new State('target', '', function() {return 'target' == state;}),
        new Action('action', '', function() {state = 'target';}));
    let depthFirstSearch = new DepthFirstSearch(model, model.getStateById('source'));
  });
});
