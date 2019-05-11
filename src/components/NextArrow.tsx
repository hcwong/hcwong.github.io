import * as React from 'react';

type ArrowProps = {
  color: string;
  href: string;
};

export const NextArrow = (props: ArrowProps) => {
  if (props.color === 'grey') {
    return (
      <a href={props.href}>
        <img src="dist/assets/chevron-down-solid.svg" className="next_section"/>
      </a>
    );
  } else {
    return (
      <a href={props.href}>
        <img src="dist/assets/chevron-down-solid-white.svg" className="next_section"/>
      </a>
    );
  }
};
