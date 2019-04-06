import * as React from 'react';

import { Layout } from 'antd';

const {Footer} = Layout;


interface Props {

}

export const FooterView: React.FC<Props> = () => {
  return (
    <Footer style={{textAlign: 'center'}}>Sociology ©2019 Created by Max Chykalo</Footer>
  )
};