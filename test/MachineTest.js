import Machine from '../lib/Machine'
import Model from '../lib/model/Model'
import State from '../lib/model/State'
import Action from '../lib/model/Action'
import Random from '../lib/generator/Random'
import Coverage from '../lib/condition/Coverage'

describe('machine', () => {
  it('execute a simple model', () => {
    let state = 'source'
    let model = new Model('model', function() {return true})
      .addAction(
        new State('source', function() {return 'source' == state}),
        new State('target', function() {return 'target' == state}),
        new Action('action', function() {return state = 'target'}))
    let machine = new Machine([model], Random, Coverage)
    while (machine.hasMoreActions) {
      machine.executeNextAction
    }
  })
})
