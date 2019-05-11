import * as React from 'react';

type ArrowProps = {
  color: string;
  href: string;
};

export const NextArrow = (props: ArrowProps) => {
  if (props.color === 'grey') {
    return (
      <a href={props.href} className="next_section">
        <img src="dist/assets/chevron-down-solid.svg"/>
      </a>
    );
  } else {
    return (
      <a href={props.href} className="next_section">
        <img src="dist/assets/chevron-down-solid-white.svg"/>
      </a>
    );
  }
};
