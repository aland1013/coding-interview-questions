class Graph {
  constructor() {
    this.vertices = {};
  }

  addVertex(id) {
    this.vertices[id] = new Set();
  }

  addEdge(v1, v2) {
    if (
      !Object.keys(this.vertices).includes(v1) ||
      !Object.keys(this.vertices).includes(v2)
    ) {
      console.log('Error - invalid vertex');
      return;
    }
    this.vertices[v1].add(v2);
  }

  getNeighbors(id) {
    return this.vertices[id];
  }

  bfs(startingVert, destinationVert) {
    let queue = [startingVert];
    let visited = new Set();

    while (queue.length > 0) {
      let currentPath = queue.shift();
      let currentVert = currentPath[currentPath.length - 1];

      if (currentVert == destinationVert) {
        return currentPath;
      }

      if (!visited.has(currentVert)) {
        visited.add(currentVert);

        for (let vert of this.vertices[currentVert]) {
          let newPath = [...currentPath];
          newPath.push(vert);
          queue.push(newPath);
        }
      }
    }
  }
}

// tests
let g = new Graph();
g.addVertex('1');
g.addVertex('2');
g.addVertex('3');
g.addVertex('4');
g.addVertex('5');
g.addVertex('6');
g.addVertex('7');

g.addEdge('5', '3');
g.addEdge('6', '3');
g.addEdge('7', '1');
g.addEdge('4', '7');
g.addEdge('1', '2');
g.addEdge('7', '6');
g.addEdge('2', '4');
g.addEdge('3', '5');
g.addEdge('2', '3');
g.addEdge('4', '6');

console.log(g.bfs('1', '6')); // [1, 2, 4, 6]
