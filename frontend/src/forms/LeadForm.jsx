import React, { useState } from 'react';
import { Form, Input, Button, Menu, Layout, message, Upload } from 'antd';
import { UploadOutlined, UserOutlined } from '@ant-design/icons';
import CustomCalendar from '@/components/CustomAntd/Calendar'; // Assuming CustomCalendar is exported from '@/components/CustomAntd'
import CustomDatePicker from '@/components/CustomAntd/DatePicker'; // Assuming CustomDatePicker is exported from '@/components/CustomAntd'

const { Header, Content, Sider } = Layout;
const { Item: MenuItem } = Menu;

export default function LeadForm() {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  const handleMarkAttendance = (date, dateString) => {
    console.log('Selected date:', dateString);
  };


  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <div style={{ padding: 24, minHeight: 360 }}>
            <CustomDatePicker onChange={handleMarkAttendance} />
            <CustomCalendar onPanelChange={() => console.log('Panel Cambiado')} />
            <Button type="primary" onClick={() => console.log('Marcar Asistencia')}>
              Marcar Asistencia
            </Button> 
          </div>
        </Content>
      </Layout>
      {/* The Form.Item should likely be inside a <Form> component */}
      <Form.Item
        name="horario"
        label="Horario"
        rules={[
          {
            required: true,
            message: 'Por favor ingrese el Horario!',
          },
        ]}
      >
        <Input />
      </Form.Item>
    </Layout>
  );
}
