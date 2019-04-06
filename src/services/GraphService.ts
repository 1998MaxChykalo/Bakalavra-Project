
interface Vertex {
  id: number;
  data?: any;
}

interface Edge {
  from: number;
  to: number;
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
        edges.push({weight: val, from: i, to: j});
      });
    });
    return <Graph> {
      vertices,
      edges
    };
  }
}
