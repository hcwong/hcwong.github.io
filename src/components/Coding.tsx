import * as React from 'react';

import { Page } from './Page';

export const Coding = () => {
  return (
    <Page>
      <div className="coding">
        <div className="description pageText">
          I'm still currently most interested in Full-stack development, given
          that the majority of my work has been in that area. At the same time, I would
          also like to do more things related to back-end like Kubernetes.

          <br/>
          <br/>

          I'm also getting more interested in productivity tools, and am (attempting) to switch to
          Vim and Zsh. Mainly because it looks cool.

          <br/>
          <br/>

          I am also planning to improve on these certain areas, inspired by &nbsp;
          <a href="https://overreacted.io/things-i-dont-know-as-of-2018/">Dan Abramov's post</a>
          <ul>
            <li>Get into Haskell to properly learn functional</li>
            <li>Write more C, C++ code, given that I have written &#60
                500 LoC in my life, which is kinda embarassing</li>
            <li>Learn more backend stuff, because while I can set up Docker instances in the cloud,
              I really haven't tried working with a massive API at scale
              or managing many instances at once.
            </li>
            <li>Understand CSS properly. I find CSS hard, which is probably due to my imperfect
              understanding of its mechanics </li>
          </ul>

          <br/>
          <br/>

          I've also had the great opportunity to intern at the following companies, during which
          I have learnt a lot from the engineers.
          <ol>
            <li>Carousell - Software Engineering Intern (Web) (May 2019-Present)</li>
            <li>Galenco Science - Software Engineering Intern (Dec 2018-Jan 2019)</li>
            <li>Rakuten Viki - Software Engineering Intern (May 2018-Aug 2018)</li>
            <li>Zumata - Software Engineering Intern (Jan 2018 - Apr 2018)</li>
          </ol>
        </div>
      </div>
    </Page>
  );
};
