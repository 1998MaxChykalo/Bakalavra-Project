import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './index.scss';
import 'antd/dist/antd.css';

import { HomePage } from './pages/HomePage';
import { MatrixPage } from './pages/MatrixPage';
import { GraphPage } from './pages/GraphPage';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.render(
  <Provider store={store}>
  <Router>
    <App>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/matrix' component={MatrixPage} />
        <Route path='/graph' component={GraphPage} />
      </Switch>
    </App>
  </Router>
  </Provider>, document.getElementById('root'));