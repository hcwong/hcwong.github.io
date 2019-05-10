import * as React from 'react';

type NavProps = {
  options: string[];
};

export const Nav = (props: NavProps) => {
  const options = props.options
    .map((option: string) => <div className="nav_option">{option}</div>);

  return (
    <div className="nav">
      <p>Joshua Wong</p>
      <div>{options}</div>
    </div>
  );
};
