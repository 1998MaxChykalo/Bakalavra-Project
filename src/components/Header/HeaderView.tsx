import * as React from 'react';
import { Logo } from '../Logo/Logo';
import HeaderNavigation from '../HeaderNavigation/HeaderNavigation';

import { Layout } from 'antd';

const {Header} = Layout;

import './Header.scss';

interface Props {

}


export const HeaderView: React.FC<Props> = () => {
  return (
    <Header className="header" style={{height: 100}} >
      <div className="header__container">
        <Logo
          src="https://instagram.fdnk1-2.fna.fbcdn.net/vp/f25fa3069434fa23a4a55c2037c21ca5/5D3B2939/t51.2885-19/s150x150/10554089_962136873872064_1648907556_a.jpg?_nc_ht=instagram.fdnk1-2.fna.fbcdn.net"
          alt="Logo" style={{ width: '100px', height: '100px'}}/>
        <HeaderNavigation orientation='horizontal' />
      </div>
    </Header>
  )
};