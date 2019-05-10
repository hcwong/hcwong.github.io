import * as React from 'react';

import { PageBody } from './PageBody';
import { Nav } from './Nav';

export const Page = () => {
  const options = ['Background', 'Hobbies', 'Contact'];

  return (
    <div className="d_flex_c h_100 page">
      <Nav
        options={options}
      />
      <PageBody/>
    </div>
  );
};
