import * as React from 'react';

export const Nav = () => {
  const options = ['About', 'Hobbies', 'Follow']
    .map((option:string) => <div></div>);

  return (
    <div className="d_flex_c j_cen a_cen w_100">
      {options}
    </div>
  );
};
