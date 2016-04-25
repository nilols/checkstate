import {Edge, Model, ModelFactory, Vertex} from '../../lib/index';
import DepthFirstSearch from '../../lib/algorithm/DepthFirstSearch';
import assert from 'assert';

describe('DepthFirstSearch', () => {
  it('simple', () => {
    let model = new Model('model', '', function() {return true;})
      .addAction(
        new Vertex('source', '', function() {return 'source' == state;}),
        new Vertex('target', '', function() {return 'target' == state;}),
        new Edge('action', '', function() {state = 'target';}));
    let depthFirstSearch = new DepthFirstSearch(model, model.getStateById('source'));
  });
});
