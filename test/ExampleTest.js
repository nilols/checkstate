import {Transition, Model, ModelFactory, State, Machine, Random, Coverage} from '../lib/index';
import assert from 'assert';
import fs from 'fs';

describe('example', () => {
  it('example', () => {
    let state = 'source';
    let model = ModelFactory.create(fs.readFileSync('test/model/example.json'));
    let machine = new Machine([model], Random, Coverage);
    //while (!machine.isFulfilled) {
    //  machine.executeNextAction();
    //}
    //assert.equal(model.elements['target'].count, 1, 'entire model haven\'t been traversed')
  });
});
