import * as React from 'react';
import { NavLink, withRouter, RouteComponentProps } from 'react-router-dom';

import { Menu } from 'antd';

import './HeaderNavigation.scss';

export interface Props extends RouteComponentProps {
  orientation: 'vertical' | 'vertical-left' | 'vertical-right' | 'horizontal' | 'inline';
}

export const HeaderNavigation: React.FC<Props> = ({ location: { pathname }, orientation }) => {
  return (
    <>
      <Menu
        theme="dark"
        mode={orientation}
        selectedKeys={[pathname]}
        style={{ lineHeight: '100px', height: '100%' }}
      >
        <Menu.Item key="/">
          <NavLink exact to='/'>Home</NavLink>
        </Menu.Item>
        <Menu.Item key="/matrix">
          <NavLink to='/matrix'>Build Matrix</NavLink>
        </Menu.Item>
        <Menu.Item key="/graph">
          <NavLink to='/graph'>Build Graph</NavLink>
        </Menu.Item>
      </Menu>
    </>
  )
}

export default withRouter<Props>(HeaderNavigation)