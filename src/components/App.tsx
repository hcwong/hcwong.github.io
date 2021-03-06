import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

import { Header } from './Header';
import { Interests } from './Interests';
import { Coding } from './Coding';
import { About } from './About';
import './../stylesheets/main.scss';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <Router>
        <div className="d_flex_c">
          <Header/>
          <Route exact path="/" component={About} />
          <Route path="/coding" component={Coding} />
          <Route path="/interests" component={Interests}/>
        </div>
      </Router>
    );
  }
}

const mountNode = document.getElementById('app');
ReactDOM.render(
  <App/>,
  mountNode,
);
