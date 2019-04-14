import * as React from 'react';
import { MatrixView } from '../components/Matrix/MatrixView';
import Answer from '../models/Answer';
import User from '../models/User';
import { connect } from 'react-redux';
import { AppState } from '../store';
import { updateAdjacencyMatrix, updateUsers } from '../store/actions';
import { getAnswers } from '../store/selectors/answers';
import { getUsers } from '../store/selectors/users';

const createEmpty2dArray = (size: number) => Array(size).fill([]).map(() => Array(size).fill(0));

const createAdjacencyMatrix = (answers: Answer[], size: number) => {
  const matrix = createEmpty2dArray(size);
  answers.forEach(answer => {
    let row = answer.from - 1,
      col = answer.to - 1,
      val = answer.weight;
    matrix[row][col] += val;
  });
  return matrix;
};

interface Props {
  adjacencyMatrix: number[][];
  users: User[];
  answers: Answer[];
  updateAdjacencyMatrix: (arr: number[][]) => void;
  updateUsers: (arr: User[]) => void;
}

export class MatrixPageView extends React.Component<Props> {

  componentDidMount() {
    const {answers, users} = this.props;
    const matrix = createAdjacencyMatrix(answers, users.length);
    this.props.updateAdjacencyMatrix(matrix);
  }

  changeSize = (newSize: number) => {
    newSize > -1 && this.setState({ size: newSize });
  }

  render() {
    return <MatrixView onSubmit={this.props.updateAdjacencyMatrix} matrix={this.props.adjacencyMatrix} />;
  }
}

const mapStateToProps = (state: AppState) => ({
  adjacencyMatrix: state.adjacencyMatrix,
  users: getUsers(state),
  answers: getAnswers(state),
})

const mapDispatchToProps = ({
  updateAdjacencyMatrix,
  updateUsers
});

export const MatrixPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(MatrixPageView);