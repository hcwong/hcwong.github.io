import * as React from 'react';

import { NextArrow } from './NextArrow';
import { HobbiesBox } from './HobbiesBox';

export const Hobbies = () => {
  return (
    <div className="hobbies" id="hobbies">
      <div className="section-title">I pursue a few hobbies and interests</div>
      <div className="d_flex_r w_100 j_cen">
        <HobbiesBox
          imgRef="/dist/assets/futbol-solid.svg"
          title="Football"
          desc="COYG. Wenger in. Invincibles. I am an avid Arsenal F.C supporter
          and play football recreationally."
        />
        <HobbiesBox
          imgRef="/dist/assets/laptop-code-solid.svg"
          title="Code"
          desc="I've been doing full-stack development, though I'm trying to
          learn more back-end stuff and play with Linux.
          May also decide to focus on Algos in school."
        />
        <HobbiesBox
          imgRef="/dist/assets/book-open-solid.svg"
          title="Reading"
          desc="I enjoy economics and keep up with current affairs. I also enjoy
          modern history and long Wikipedia articles."
        />
      </div>

      <NextArrow
        color="grey"
        href="#contact"
      />
    </div>
  );
};
