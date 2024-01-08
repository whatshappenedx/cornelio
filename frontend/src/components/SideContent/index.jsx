import React from 'react';
import { Space, Layout, Divider } from 'antd';
import { Typography } from 'antd';

import logo from '@/style/images/logo.png';
import logo1 from '@/style/images/logo1.png';
import logo2 from '@/style/images/logo2.png';
import logo3 from '@/style/images/logo3.png';
import logo4 from '@/style/images/logo4.png';

const { Content } = Layout;
const { Title, Text } = Typography;

export default function SideContent() {
  return (
    <Content
      style={{
        padding: 'auto',
        width: '100%',
        maxWidth: '400px',
        margin: '80px',
      }}
      className="sideContent"
    >
      <div style={{ width: '100%' }}>
        <img src={logo} alt="Logo" style={{ margin: '0 auto 40px', display: 'block' }} />
        <div className="space40"></div>
        <div style={{ marginLeft: '100px' }}>
          <Title level={3}>Nuevo Sistema:</Title>
          <div className="space20"></div>
          <ul className="list-checked">
            <li className="list-checked-item">
              <Space direction="vertical">
                <Text strong>Todo en Uno</Text>

                <Text>Posible despliegue Enero 2024</Text>
              </Space>
            </li>

            <li className="list-checked-item">
              <Space direction="vertical">
                <Text strong>Facil &amp; manejando todos los servicios</Text>
                <Text>En desarrollo - Manuel Armijos</Text>
              </Space>
            </li>
          </ul>
          <Divider />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >

            {/*<img
            src={logo1}
            alt="Logo1"
            style={{
              margin: '0 15px',
              display: 'block',
              float: 'left',
              width: '48px',
              filter: 'grayscale(1)',
              mixBlendMode: 'multiply',
              opacity: '0.8',
            }}
          />
          <img
            src={logo2}
            alt="Logo2"
            style={{
              margin: '0 15px',
              display: 'block',
              float: 'left',
              width: '48px',
              filter: 'grayscale(1)',
              mixBlendMode: 'multiply',
              opacity: '0.8',
            }}
          />
          <img
            src={logo3}
            alt="Logo3"
            style={{
              margin: '0 15px',
              display: 'block',
              float: 'left',
              width: '48px',
              filter: 'grayscale(1)',
              mixBlendMode: 'multiply',
              opacity: '0.8',
            }}
          />
          <img
            src={logo4}
            alt="Logo4"
            style={{
              margin: '0 15px',
              display: 'block',
              float: 'left',
              width: '48px',
              filter: 'grayscale(1)',
              mixBlendMode: 'multiply',
              opacity: '0.8',
            }}
          />*/}
          </div>
        </div>
      </div>
    </Content>
  );
}
