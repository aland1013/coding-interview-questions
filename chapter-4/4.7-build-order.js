/*
input:
  projects: a, b, c, d, e, f
  dependencies: (a,d), (f,b), (b,d), (f,a), (d,c)
output: f, e, a, b, d, c
*/

class Graph {
  constructor() {
    this.vertices = {};
  }

  addVertex(id) {
    this.vertices[id] = new Set();
  }

  addEdge(v1, v2) {
    if (
      !this.vertices.hasOwnProperty(v1) ||
      !this.vertices.hasOwnProperty(v2)
    ) {
      console.log('error - invalid vertex');
      return;
    }
    this.vertices[v1].add(v2);
  }

  getNeighbors(id) {
    return this.vertices[id];
  }
}

const findOrder = (graph) => {
  let result = [];

  while (result.length !== Object.keys(graph.vertices).length) {
    for (let v in graph.vertices) {
      if (graph.vertices[v].size === 0 && !result.includes(v)) result.push(v);
      for (let val of result) {
        if (graph.vertices[v].has(val)) graph.vertices[v].delete(val);
      }
    }
  }

  return result;
};

// tests
let g = new Graph();
g.addVertex('a');
g.addVertex('b');
g.addVertex('c');
g.addVertex('d');
g.addVertex('e');
g.addVertex('f');
g.addEdge('a', 'd');
g.addEdge('f', 'b');
g.addEdge('b', 'd');
g.addEdge('f', 'a');
g.addEdge('d', 'c');

console.log(g.vertices);

console.log(findOrder(g));
