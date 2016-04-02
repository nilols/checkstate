import Action from '../lib/model/Action'
import Model from '../lib/model/Model'
import State from '../lib/model/State'
import md5 from 'md5'
import assert from 'assert'
import fs from 'fs'

describe('model', () => {
  describe('state', () => {
    it('create single instance', () => {
      let state = new State('s', function() {return true})
      assert.equal(state.id, 's', 'failed to validate id')
      assert.equal(state.hash, md5(function() {return true}), 'failed to validate id')
    })
    it('check if state is active', () => {
      let state = new State('s', function() {return true})
      assert.equal(state.isActive, true, 'failed to validate state')
    })
    it('cast exception if id is not defined', () => {
      assert.throws(function() {new State()}, Error, 'Missing parameter')
    })
    it('cast exception if state function is not defined', () => {
      assert.throws(function() {new State('s')}, Error, 'Missing parameter')
    })
  })

  describe('action', () => {
    it('create single instance', () => {
      let action = new Action('a', function() {return true})
      assert.equal(action.id, 'a', 'failed to validate id')
      assert.equal(action.hash, md5(function() {return true}), 'failed to validate id')
    })
    it('cast exception if id is not defined', () => {
      assert.throws(function() {new Action()}, Error, 'Missing parameter')
    })
    it('cast exception if state function is not defined', () => {
      assert.throws(function() {new Action('s')}, Error, 'Missing parameter')
    })
  })

  describe('model', () => {
    it('create single instance', () => {
      let model = new Model('m', function() {return true})
      assert.equal(model.id, 'm', 'failed to validate id')
      assert.equal(model.hash, md5(function() {return true}), 'failed to validate id')
    })
    it('cast exception if id is not defined', () => {
      assert.throws(function() {new Model()}, Error, 'Missing parameter')
    })
    it('cast exception if state function is not defined', () => {
      assert.throws(function() {new Model('s')}, Error, 'Missing parameter')
    })
    it('add state to model', () => {
      let model = new Model('m', function() {return true})
      assert.equal(model.states.length, 0, 'failed to validate id')
      model.addState(new State('s', function() {return true}))
      assert.equal(model.states.length, 1, 'failed to validate id')
    })
    it('add state to model, that already exists', () => {
      let model = new Model('m', function() {return true})
      let state = new State('s', function() {return true})
      model.addState(state)
      assert.throws(function() {model.addState(state)}, Error, 'state already exits')
    })
    it('add action to model', () => {
      let source = new State('s1', function() {return true})
      let target = new State('s2', function() {return true})
      let model = new Model('m', function() {return true})
      model.addState(source)
      model.addState(target)
      assert.equal(model.actions.length, 0, 'failed to validate model')
      model.addAction(source, target, new Action('a', function() {return true}))
      assert.equal(model.actions.length, 1, 'failed to validate model')
    })
    it('add action to model, that already exists', () => {
      let model = new Model('m', function() {return true})
      let source = new State('s', function() {return true})
      let target = new State('t', function() {return true})
      let action = new Action('a', function() {return true})
      model.addAction(source, target, action)
      assert.throws(function() {model.addAction(source, target, action)}, Error, 'action already exits')
    })
    it('parse object', () => {
      let model = Model.parse(JSON.parse(fs.readFileSync('test/model/simple.json')))
      assert.equal(model.states.length, 2, 'failed to validate states')
      assert.equal(model.actions.length, 1, 'failed to validate actions')
      assert.equal(Object.keys(model.elements).length, 3, 'failed to validate elements')
    })
  })
})
