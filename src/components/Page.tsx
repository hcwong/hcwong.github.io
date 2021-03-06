import * as React from 'react';

import { Footer } from './Footer';

interface Props {children?: any; }

// From: https://github.com/Microsoft/TypeScript/issues/6471
export class Page extends React.PureComponent<Props, {}> {
  constructor(props: Props, {}) {
    super(props);
  }

  render() {
    return (
      <div className= "page p_rel">
        { this.props.children }
        <Footer/>
      </div>
    );
  }
}
