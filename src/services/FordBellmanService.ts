import { Graph, Vertex } from "./GraphService";

export class FordBellmanService {
  
}

export default function bellmanFord(graph: Graph, startVertex: Vertex) {
  const distances : any= {};

  // Init all distances with infinity assuming that currently we can't reach
  // any of the vertices except start one.
  distances[startVertex.id] = 0;
  graph.vertices.map((vertex) => {
    if (vertex.id !== startVertex.id) {
      distances[vertex.id] = Infinity;
    }
  });

  // We need (|V| - 1) iterations.
  for (let iteration = 0; iteration < (graph.vertices.length - 1); iteration += 1) {
    // During each iteration go through all vertices.
    Object.keys(distances).forEach((vertexKey) => {
      const vertex = graph.vertices.find(v => v.id === +vertexKey);

      // Go through all vertex edges.
      if (vertex) {
        graph.getNeighbors(vertex).forEach((neighbor) => {
          const edge = graph.findEdge(vertex, neighbor);
          // Find out if the distance to the neighbor is shorter in this iteration
          // then in previous one.
          if (edge) {
            const distanceToVertex = distances[vertex.id];
            const distanceToNeighbor = distanceToVertex + edge.weight;
            if (distanceToNeighbor < distances[neighbor.id]) {
              distances[neighbor.id] = distanceToNeighbor;
            }
          }
        });
      }
    });
  }
  return distances;
}
