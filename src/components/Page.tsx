import * as React from 'react';

import { Footer } from './Footer';

interface Props {children?: any; }

// From: https://github.com/Microsoft/TypeScript/issues/6471
export class Page extends React.PureComponent<Props, {}> {
  render() {
    return (
      <div className= "page">
        { this.props.children }
        <Footer/>
      </div>
    );
  }
}
