import React from 'react';
import { Button, Form, Input, Tag, Select, InputNumber, message } from 'antd';
import axios from 'axios';

export default function OrderForm({ isUpdateForm = false }) {
  const validateEmptyString = (_, value) => {
    if (value && value.trim() === '') {
      return Promise.reject(new Error('No se puede dejar vacío'));
    }

    return Promise.resolve();
  };

  const onFinish = async (values) => {
    try {
      const response = await axios.post('/api/generate-pdf', values);
      // This assumes your backend sends a direct response with the application/zip content type
      // Handle the file download here
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'orders.zip'); // or any other extension
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      message.error('Error al crear el PDF: ' + error.message);
    }
  };

  return (
    <>
      <Form.Item
        label="Planillaje"
        name="planillaje"
        rules={[
          {
            required: true,
            message: 'Escoja el Tipo de Planillaje',
          },
        ]}
      >
        <Select>
          <Select.Option value="acta">Acta</Select.Option>
          <Select.Option value="planilla">Planilla</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Tipo de Seguro"
        name="tiposeguros"
        rules={[
          {
            required: true,
            message: 'Escoja el Tipo de Seguro',
          },
        ]}
      >
        <Select>
          <Select.Option value="iesssg">IESS S.G.</Select.Option>
          <Select.Option value="iesssc">IESS S.C.</Select.Option>
          <Select.Option value="msp">MSP</Select.Option>
        </Select>
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Generar PDF
      </Button>
    </>
  );
}
