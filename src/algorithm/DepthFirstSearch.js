import ModelAlgorithm from './ModelAlgorithm';

export default class DepthFirstSearch extends ModelAlgorithm {
  constructor(model, root) {
    super(model);
    this._visited = {};
    let states = [root];
    while (states.length) {
      let state = states.pop();
      // if state is not visited
      if (!this.visited(state)) {
        // mark state as visited
        this.mark(state);
        // push all adjacent states onto the stack
        for (let adjacent in this.model.getAdjacentStates(state)) {
          states.push(adjacent);
        }
      }
    }
  }
  mark(state) {
    this._visited[state.id] = true;
  }
  visited(state) {
    return this._visited.hasOwnProperty(state.id);
  }
}
