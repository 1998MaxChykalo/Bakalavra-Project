
interface Vertex {
  id: number;
  data?: any;
}

interface Edge {
  source: number;
  target: number;
  weight: number;
}

class Graph {
  vertices: Vertex[] = [];
  edges: Edge[] = [];

}

export class GraphService {
  static mapAdjacencyMatrixToGraph(adjacencyMatrix: number[][]): Graph {
    const vertices: Vertex[] = [];
    const edges: Edge[] = [];
    adjacencyMatrix.forEach((row, i) => {
      vertices.push({id: i})
      row.forEach((val, j) => {
        if (i === j || val === 0) return;
        edges.push({weight: val, source: i, target: j});
      });
    });
    return <Graph> {
      vertices,
      edges
    };
  }
}
