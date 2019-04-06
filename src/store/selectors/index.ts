import { AppState } from '..';
export const getGraph = (state: AppState) => {
  return state.adjacencyMatrix;
}