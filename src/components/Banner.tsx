import * as React from 'react';

import { Nav } from './Nav';
import { Title } from './Title';

export const Banner = () => {
  const options = ['About', 'Hobbies', 'Contact'];

  return (
    <div className="d_flex_c a_cen j_cen w_100">
      <Title/>
      <Nav
        options={options}
      />
    </div>
  );
};
