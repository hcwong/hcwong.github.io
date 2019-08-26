import * as React from 'react';
import { NavLink } from 'react-router-dom';

interface Tab { tabName: string; link: string; }
interface State {currentPath: string; }

export class Header extends React.PureComponent<{}, State> {
  constructor({}, state: State) {
    super({});
    this.state = { currentPath: window.location.pathname };
  }

  tabs: Tab[] = [
    { tabName: 'ABOUT', link: '/' },
    { tabName: 'CODING', link: '/coding/' },
    { tabName: 'INTERESTS', link: '/interests/' },
  ];

  currentPath = window.location.pathname;

  renderTab = (tab: Tab, index: number) => {
    return (
      <div className="header_tab" key={index}>
        <NavLink
          activeClassName="header_tab_selected"
          exact={true}
          to={tab.link}
        >
          {tab.tabName}
        </NavLink>
      </div>
    );
  }

  render() {
    return (
      <div className="d_flex_c w_100 header">
        <div className="title">Joshua Wong</div>
        {/* TODO: Can consider refactoring out into tab component in the future if necessary */}
        <div className="d_flex_r w_100 j_cen a_cen">
          {this.tabs.map((tab: Tab, index: number) => this.renderTab(tab, index))}
        </div>
      </div>
    );
  }
}
