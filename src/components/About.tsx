import * as React from 'react';

import { NextArrow } from './NextArrow';

export const About = () => {
  return (
    <div className="about">
      <img src="dist/assets/me_pic.png" id="about_pic"/>

      <div className="d_flex_c">
        <h2> Joshua Wong </h2>
        <h3> CS Sophomore at NUS (Page WIP)</h3>
      </div>

      <NextArrow/>
    </div>
  );
};
