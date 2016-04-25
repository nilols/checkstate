export default class ModelAlgorithm {
  constructor(model) {
    this._model = model;
    this._adjacent = {};
    for (let edge in model.edges) {
      if (!this._adjacent.hasOwnProperty(edge.source.id)) {
        this._adjacent[edge.source.id] = [];
      }
    }
  }
  get model() {
    return this._model;
  }
  getAdjacentVertices(vertex) {
    return this._adjacent[vertex.id];
  }
}
