import * as React from 'react';

import { About } from './About';
import { LandingPage } from './LandingPage';

export const PageBody = () => {
  return (
    <div className="page_body">
      <LandingPage/>
      <About/>
    </div>
  );
};
