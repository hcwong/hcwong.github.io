import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './../stylesheets/main.scss';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div></div>
    );
  }
}

const mountNode = document.getElementById('app');
ReactDOM.render(
  <App />,
  mountNode,
);

if (module.hot) {
  module.hot.accept();
}
