import * as React from 'react';

type NavProps = {
  options: string[];
};

export const Nav = (props: NavProps) => {
  const options = props.options
    .map((option: string) => <div className="nav_option">{option}</div>);

  return (
    <div className="d_flex_r j_cen a_cen w_100">
      {options}
    </div>
  );
};
