import {Action, Model, ModelFactory, State} from '../lib/index';
import assert from 'assert';
import fs from 'fs';

describe('model', () => {

  describe('state', () => {
    it('create single instance', () => {
      let state = new State('id', 'name', function() {return true;});
      assert.equal(state.id, 'id', 'failed to validate id');
      assert.equal(state.name, 'name', 'failed to validate name');
      assert.equal(state.isActive, true, 'failed to validate function');
    });
  });

  describe('action', () => {
    it('create single instance', () => {
      let action = new Action('id', 'name', function() {return true;}, ['EVENT']);
      assert.equal(action.id, 'id', 'failed to validate id');
      assert.equal(action.name, 'name', 'failed to validate name');
      assert.equal(action.execute(), true, 'failed to validate function');
      assert.deepEqual(action.events, ['EVENT'], 'failed to validate function');
    });
  });

  describe('model', () => {
    it('create single instance', () => {
      let model = new Model('m', '', function() {return true;});
      assert.equal(model.id, 'm', 'failed to validate id');
    });
    it('add state to model', () => {
      let model = new Model('m', '', function() {return true;});
      assert.equal(model.states.length, 0, 'failed to validate id');
      model.addState(new State('s', function() {return true;}));
      assert.equal(model.states.length, 1, 'failed to validate id');
    });
    it('add state to model, that already exists', () => {
      let model = new Model('m', '', function() {return true;});
      let state = new State('s', '', function() {return true;});
      model.addState(state);
      assert.throws(function() {model.addState(state);}, Error, 'state already exits');
    });
    it('add action to model', () => {
      let source = new State('s1', '', function() {return true;});
      let target = new State('s2', '', function() {return true;});
      let model = new Model('m', '', function() {return true;});
      model.addState(source);
      model.addState(target);
      assert.equal(model.actions.length, 0, 'failed to validate model');
      model.addAction(source, target, new Action('a', function() {return true;}));
      assert.equal(model.actions.length, 1, 'failed to validate model');
    });
    it('add action to model, that already exists', () => {
      let model = new Model('m', function() {return true;});
      let source = new State('s', function() {return true;});
      let target = new State('t', function() {return true;});
      let action = new Action('a', function() {return true;});
      model.addAction(source, target, action);
      assert.throws(function() {model.addAction(source, target, action);}, Error, 'action already exits');
    });
    it('parse object', () => {
      let model = ModelFactory.create(fs.readFileSync('test/model/simple.json'));
      assert.equal(model.states.length, 2, 'failed to validate states');
      assert.equal(model.actions.length, 1, 'failed to validate actions');
      assert.equal(Object.keys(model.elements).length, 3, 'failed to validate elements');
    });
  });
});
