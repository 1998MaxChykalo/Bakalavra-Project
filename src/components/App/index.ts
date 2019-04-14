
import { connect } from 'react-redux';
import {App} from './App';
import { fetchAnswers } from '../../store/actions/answers/actions';
import { fetchUsers } from '../../store/actions/users/actions';



export default connect(() => ({}), {
  fetchAnswers,
  fetchUsers
})(App);