import * as React from 'react';
import { runInThisContext } from 'vm';

type NavProps = {
  options: string[];
};

type NavState = {
  isLanding: boolean;
};

export class Nav extends React.Component<NavProps, NavState>{
  constructor(props: NavProps) {
    super(props);
    this.state = { isLanding: true };
    this.onScroll = this.onScroll.bind(this);
    this.landingHeight = window.innerHeight;
    console.log(this.landingHeight);
    // This is hardcoded and should be replaced if possible
    this.numberOfSections = 2;
  }

  landingHeight: number;
  numberOfSections: number;

  onScroll(nextState: boolean) {
    this.setState({ isLanding: nextState });
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      console.log(window.scrollY);
      if (window.scrollY > (this.landingHeight / this.numberOfSections)) {
        this.onScroll(false);
      } else {
        this.onScroll(true);
      }
    });
  }

  render() {
    const navClass = this.state.isLanding ? 'nav' : 'nav bg_dark';
    const options = this.props.options
      .map((option: string) => <div className="nav_option">{option}</div>);

    return (
      <div className={navClass}>
        <p>Joshua Wong</p>
        <div>{options}</div>
      </div>
    );
  }
}
