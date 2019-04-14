import * as React from "react";
import { AppState } from "../store";
import { connect } from "react-redux";
import { GraphService } from "../services/GraphService";

import { interpolate, extent, scaleLinear, sum } from "d3";

import { ForceGraph2D, ForceGraph3D } from "react-force-graph";
import bellmanFord from "../services/FordBellmanService";
import { Graph } from "./../services/GraphService";
// interface Props {
//   adjacencyMatrix: number[][];
// }

const sumColumns = (matrix = []) => {
  const res = [];
  if (matrix[0] && matrix[0].length) {
    for (let i = 0; i < matrix.length; i++) {
      res[i] = 0;
      for (let j = 0; j < matrix[i].length; j++) {
        res[i] += matrix[j][i];
      }
    }
  }
  return res;
};

export const GraphPageComponent = ({ adjacencyMatrix, users }) => {
  const graph = GraphService.mapAdjacencyMatrixToGraph(adjacencyMatrix);

  const verticesWeight = sumColumns(adjacencyMatrix);
  const r = scaleLinear()
    .range([1, 6])
    .domain(extent(verticesWeight));
  // const width = scaleLinear().range([1, 4]).domain(extent([-9, 9]));
  // const linkLength = scaleLinear().range([40, 10]).domain(extent([-9, 9]));
  const interpolateNodeToColor = scaleLinear()
    .domain(extent(verticesWeight))
    .range(["red", "green"]);
  const interpolateWeightToColor = scaleLinear()
    .domain([-9, 9])
    .range(["red", "green"]);
  const newGraph = new Graph(
    graph.vertices,
    graph.edges
      .map(edge => ({ ...edge, weight: edge.weight + 9 }))
      // .map(edge => ({
      //   ...edge,
      //   weight: edge.weight === 0 ? 0 : (1 / edge.weight).toFixed(2)
      // }))
  );
  // console.log(bellmanFord(newGraph, newGraph.vertices[0]));
  console.log(
    "new Matrix: ",
    newGraph.vertices.map(vertex => bellmanFord(newGraph, vertex))
  );
  return (
    <div>
      <ForceGraph2D
        // width={window.innerWidth}
        // height={window.innerHeight}
        graphData={{ nodes: [...graph.vertices], links: [...graph.edges] }}
        linkDirectionalParticles="weight"
        nodeRelSize={2}
        nodeVal={node => r(verticesWeight[node.id])}
        // linkColor={link => interpolateWeightToColor(link.weight)}
        // linkWidth={link => width(link.weight)}
        nodeColor={node => interpolateNodeToColor(verticesWeight[node.id])}
        nodeLabel={node => users[node.id].name}
        linkDirectionalParticleSpeed={link => Math.abs(link.weight) * 0.0008}
        linkDirectionalParticleWidth={1.5}
        linkDirectionalArrowLength={1}
        linkDirectionalArrowColor={link =>
          interpolateWeightToColor(link.weight)
        }
        linkDirectionalArrowRelPos={1}
        // linkCurvature={0.5}
        linkDirectionalParticleColor={link =>
          interpolateWeightToColor(link.weight)
        }
      />
    </div>
  );
};

const mapStateToProps = state => ({
  adjacencyMatrix: state.root.adjacencyMatrix,
  users: state.root.users
});

export const GraphPage = connect(
  mapStateToProps,
  {}
)(GraphPageComponent);
