import * as React from 'react';

type HobbiesBoxProps = {
  imgRef: string;
  title: string;
  desc: string;
};

export const HobbiesBox = (props: HobbiesBoxProps) => {
  return (
    <div className="hobbies_box">
      <img src={props.imgRef}/>
      <div className="box-title">{props.title}</div>
      <div className="box-desc">{props.desc}</div>
    </div>
  );
};
