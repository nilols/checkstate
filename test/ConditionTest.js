import Model from '../lib/model/Model'
import State from '../lib/model/State'
import Action from '../lib/model/Action'
import Coverage from '../lib/condition/Coverage'
import assert from 'assert'

describe('condition', () => {
  it('coverage', () => {
    let state = 'source'
    let model = new Model('model', function() {return true})
      .addAction(
        new State('source', function() {return 'source' == state}),
        new State('target', function() {return 'target' == state}),
        new Action('action', function() {return state = 'target'}))
    let coverage = new Coverage([model])
    assert.equal(coverage.hasMoreActions, true, 'should have more actions')
    model.elements['source'].count = 1;
    assert.equal(coverage.hasMoreActions, true, 'should have more actions')
    model.elements['action'].count = 1;
    assert.equal(coverage.hasMoreActions, true, 'should have more actions')
    model.elements['target'].count = 1;
    assert.equal(coverage.hasMoreActions, false, 'should not have more actions')
  })
})
