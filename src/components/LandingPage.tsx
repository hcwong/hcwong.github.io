import * as React from 'react';

import { NextArrow } from './NextArrow';

export const LandingPage = () => {
  return (
    <div className="landing" id="landing">
      <p> console.log("testing123"); </p>
      <NextArrow
        color="grey"
        href="about"
      />
    </div>
  );
};
