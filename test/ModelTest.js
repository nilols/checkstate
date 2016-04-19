import {Transition, Model, ModelFactory, State} from '../lib/index';
import assert from 'assert';
import fs from 'fs';

describe('model', () => {
  describe('state', () => {
    it('create single instance', () => {
      let state = new State('s', '', function() {return true;});
      assert.equal(state.id, 's', 'failed to validate id');
    });
    it('check if state is active', () => {
      let state = new State('s', '', function() {return true;});
      assert.equal(state.isActive, true, 'failed to validate state');
    });
  });

  describe('action', () => {
    it('create single instance', () => {
      let action = new Transition('a', '', function() {return true;});
      assert.equal(action.id, 'a', 'failed to validate id');
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
      model.addAction(source, target, new Transition('a', function() {return true;}));
      assert.equal(model.actions.length, 1, 'failed to validate model');
    });
    it('add action to model, that already exists', () => {
      let model = new Model('m', function() {return true;});
      let source = new State('s', function() {return true;});
      let target = new State('t', function() {return true;});
      let action = new Transition('a', function() {return true;});
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
