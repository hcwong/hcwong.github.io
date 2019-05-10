import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Page } from './Page';
import './../stylesheets/main.scss';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <Page/>
    );
  }
}

const mountNode = document.getElementById('app');
ReactDOM.render(
  <App/>,
  mountNode,
);
