import {Transition, Model, ModelFactory, State, Machine, Random, Coverage} from '../lib/index';
import assert from 'assert';
import fs from 'fs';

describe('machine', () => {
  it('execute a simple model', () => {
    let state = 'source';
    let model = new Model('model', '', function() {return true;})
      .addAction(
        new State('source', '', function() {return 'source' == state;}),
        new State('target', '', function() {return 'target' == state;}),
        new Transition('action', '', function() {state = 'target';}));
    let machine = new Machine([model], Random, Coverage);
    while (!machine.isFulfilled) {
      machine.executeNextAction();
    }
    assert.equal(model.elements.target.count, 1, 'entire model haven\'t been traversed');
  });
  it('execute multiple models', () => {
    let modelA = ModelFactory.create(fs.readFileSync('test/model/modelA.json'));
    let modelB = ModelFactory.create(fs.readFileSync('test/model/modelB.json'));
    let modelC = ModelFactory.create(fs.readFileSync('test/model/modelC.json'));
    //let machine = new Machine([modelA, modelB, modelC], Random, Coverage)
    //while (!machine.isFulfilled) {
    //  machine.executeNextAction
    //}
  });
});
