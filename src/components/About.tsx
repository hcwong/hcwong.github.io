import * as React from 'react';

import { NextArrow } from './NextArrow';

export const About = () => {
  return (
    <div className="about" id="about">
      <div className="section-title">About</div>
      <div className="description">
        I'm a Computer Science Sophomore at the National University of Singapore.
        My current interests include full-stack development, though I'm looking 
        to explore other areas. In school, I'm also a member of NUS Hackers. Because studying
        is boring, but hacking is not.
      </div>

      <NextArrow
        color="white"
        href="#hobbies"
      />
    </div>
  );
};
