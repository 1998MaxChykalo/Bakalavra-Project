export interface Vertex {
  id: number;
  data?: any;
}

export interface Edge {
  source: number;
  target: number;
  weight: number;
}

export class Graph {
  vertices: Vertex[] = [];
  edges: Edge[] = [];

  constructor(vertices: Vertex[], edges: Edge[]) {
    this.vertices = vertices;
    this.edges = edges;
  }

  public getNeighbors = (vertex: Vertex) => {
    const neighbours: Vertex[] = [];
    this.edges.forEach(edge => {
      if (edge.source === vertex.id) {
        neighbours.push(this.vertices[edge.target]);
      }
    });
    return neighbours;
  };

  public findEdge = (vertex: Vertex, neighbour: Vertex) =>
    this.edges.find(e => e.target === neighbour.id && e.source === vertex.id);
}

export class GraphService {
  static mapAdjacencyMatrixToGraph(adjacencyMatrix: number[][]): Graph {
    const vertices: Vertex[] = [];
    const edges: Edge[] = [];

    adjacencyMatrix.forEach((row, i) => {
      vertices.push({ id: i });
      row.forEach((val, j) => {
        if (i === j || val === 0) return;
        edges.push({ weight: val, source: i, target: j });
      });
    });
    return new Graph(vertices, edges);
  }
}
