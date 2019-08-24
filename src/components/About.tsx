import * as React from 'react';

import { Page } from './Page';

export const About = () => {
  return (
    <Page>
      <div className="about">
        <img className="profile" src="/dist/assets/profile.jpg"/>
        <div className="description">
          I'm a Computer Science Sophomore at the National University of Singapore.
          My current interests include full-stack development, though I'm looking
          to explore other areas. In school, I'm also a member of NUS Hackers.
        </div>
      </div>
    </Page>
  );
};
