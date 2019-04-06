import React from 'react';
import { Layout } from 'antd';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

const { Content } = Layout;

const App: React.FC = ({ children }) => {
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

export default App;
