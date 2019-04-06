import * as React from 'react';
import { AppState } from '../store';
import { connect } from 'react-redux';
import { GraphService } from '../services/GraphService';


import { ForceGraphLink, ForceGraphNode, ForceGraph } from 'react-vis-force';

// interface Props {
//   adjacencyMatrix: number[][];
// }

export const GraphPageComponent = ({ adjacencyMatrix }) => {
  console.log(adjacencyMatrix);
  const graph = GraphService.mapAdjacencyMatrixToGraph(adjacencyMatrix);
  const edges =    graph.edges.map(edge => <ForceGraphLink link={{ source: edge.from, target: edge.to }} />)
  const vertices = graph.vertices.map(vertex => <ForceGraphNode node={{ id: vertex.id }} />)
  return (
    <div>
      <ForceGraph simulationOptions={{ height: 300, width: 300 }}>
        {graph.edges.map(edge => <ForceGraphLink link={{ source: edge.from, target: edge.to }} />)}
        {graph.vertices.map(vertex => <ForceGraphNode node={{ id: vertex.id }} />)}
      </ForceGraph>
    </div>
  );
}

const mapStateToProps = (state) => ({
  adjacencyMatrix: state.root.adjacencyMatrix
})

export const GraphPage = connect(mapStateToProps, {})(GraphPageComponent);