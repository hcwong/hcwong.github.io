import * as React from 'react';

export const About = () => {
  return (
    <div className="about">
      <img src="dist/assets/about_page_pic.png" id="about_pic"/>

      <div className="d_flex_c">
        <h2> Joshua Wong </h2>
        <h3> CS Sophomore at NUS (Page WIP)</h3>
      </div>

      <img src="dist/assets/chevron-down-solid.svg" className="next_section"/>
    </div>
  );
};
