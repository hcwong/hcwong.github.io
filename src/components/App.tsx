import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import { Header } from './Header';
import './../stylesheets/main.scss';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <Router>
        <Header/>
      </Router>
    );
  }
}

const mountNode = document.getElementById('app');
ReactDOM.render(
  <App/>,
  mountNode,
);
