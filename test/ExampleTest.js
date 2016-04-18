import Machine from '../lib/Machine';
import ModelFactory from '../lib/model/ModelFactory';
import Model from '../lib/model/Model';
import State from '../lib/model/State';
import Action from '../lib/model/Action';
import Random from '../lib/generator/Random';
import Coverage from '../lib/condition/Coverage';
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
