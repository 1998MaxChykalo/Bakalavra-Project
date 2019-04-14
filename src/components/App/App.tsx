import React, { useEffect } from 'react';
import { Layout } from 'antd';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

const { Content } = Layout;

export interface Props {
  fetchAnswers: any;//() => (dispatch: any) => Promise<any>;
  fetchUsers: any;
}

export const App: React.FC<Props> = ({ children, fetchAnswers, fetchUsers }) => {
  useEffect(() => {
    fetchAnswers();
    fetchUsers();
  })
  return (
    <Layout>
      <Header />
      <Content style={{margin: '0 50px', height: 'calc(100vh - 55px)', background: '#fff'}}>
        {children}
      </Content>
      <Footer/>
    </Layout>
  )
}