import * as React from 'react';

type ArrowProps = {
  color: string;
};

export const NextArrow = (props: ArrowProps) => {
  if (props.color === 'grey') {
    return (
      <img src="dist/assets/chevron-down-solid.svg" className="next_section"/>
    );
  } else {
    return (
      <img src="dist/assets/chevron-down-solid-white.svg" className="next_section"/>
    );
  }
};
