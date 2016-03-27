import Model from '../lib/model/Model'
import State from '../lib/model/State'
import Action from '../lib/model/Action'
import Coverage from '../lib/condition/Coverage'
import Random from '../lib/generator/Random'
import assert from 'assert'

describe('generator', () => {
  it('random', () => {
    let state = 'source'
    let model = new Model('model', function() {return true})
      .addAction(
        new State('source', function() {return 'source' == state}),
        new State('target', function() {return 'target' == state}),
        new Action('action', function() {return state = 'target'}))
    let generator = new Random([model], Coverage)
    assert.equal(generator.hasMoreActions, true, 'should have more actions')
    model.elements['source'].count = 1;
    assert.equal(generator.nextAction, model.actions[0], 'should return action')
    assert.equal(generator.hasMoreActions, true, 'should have more actions')
    model.elements['action'].count = 1;
    assert.equal(generator.hasMoreActions, true, 'should have more actions')
    model.elements['target'].count = 1;
    assert.equal(generator.hasMoreActions, false, 'should not have more actions')
  })
})
