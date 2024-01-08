import React from 'react';
import { Form, Input, Button, Radio, Select, Switch } from 'antd';
import { message, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { DatePicker, TimePicker, Calendar } from '@/components/CustomAntd';
import { validatePhoneNumber } from '@/utils/helpers'; // If you have a specific phone number validation

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('Solo puede cargar archivos JPG/PNG!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('La imagen debe ser menor a 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

export default function EmployeeForm() {
  return (
    <>
      <Form.Item
        name="file"
        label="Foto"
        valuePropName="fileList"
        rules={[
          {
            required: true,
            message: 'Por favor suba la Foto del Paciente',
          },
        ]}
        getValueFromEvent={(e) => e.fileList}
      >
        <Upload beforeUpload={beforeUpload}>
          <Button icon={<UploadOutlined />}>Subir Imagen</Button>
        </Upload>
      </Form.Item>
      <Form.Item
        name="cedula"
        label="Cédula"
        rules={[
          {
            required: true,
            message: 'Por favor ingrese la cédula!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="nombres"
        label="Nombres"
        rules={[
          {
            required: true,
            message: 'Por favor ingrese los nombres!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="apellidos"
        label="Apellidos"
        rules={[
          {
            required: true,
            message: 'Por favor ingrese los apellidos!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="fechaNacimiento"
        label="Fecha de Nacimiento"
        rules={[
          {
            required: true,
            message: 'Por favor ingrese la fecha de nacimiento!',
          },
        ]}
      >
        <DatePicker format={'DD/MM/YYYY'} />
      </Form.Item>
      <Form.Item
        name="edad"
        label="Edad"
        rules={[
          {
            required: true,
            message: 'Por favor ingrese la edad!',
          },
        ]}
      >
        <Input type="number" />
      </Form.Item>
      <Form.Item
        name="grupoSanguineo"
        label="Grupo Sanguíneo"
        rules={[
          {
            required: true,
            message: 'Por favor ingrese el grupo sanguíneo!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="hcl"
        label="HCL"
        rules={[
          {
            required: true,
            message: 'Por favor ingrese el HCL!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="genero"
        label="Género"
        rules={[
          {
            required: true,
            message: 'Por favor seleccione el género!',
          },
        ]}
      >
        <Select>
          <Select.Option value="masculino">MASCULINO</Select.Option>
          <Select.Option value="femenino">FEMENINO</Select.Option>
          <Select.Option value="otro">OTRO</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="instruccion"
        label="Instrucción"
        rules={[
          {
            required: true,
            message: 'Por favor ingrese la instrucción',
          },
        ]}
      >
        <Select>
          <Select.Option value="Ninguna">NINGUNA</Select.Option>
          <Select.Option value="Bachillerato">BACHILLERATO</Select.Option>
          <Select.Option value="Elemental">ELEMENTAL</Select.Option>
          <Select.Option value="Secundaria">SECUNDARIA</Select.Option>
          <Select.Option value="Inicial">INICIAL</Select.Option>
          <Select.Option value="Basica">BASICA</Select.Option>
          <Select.Option value="Primaria">PRIMARIA</Select.Option>
          <Select.Option value="Superior">SUPERIOR</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="fechaCaducidad"
        label="Fecha de Caducidad"
        rules={[
          {
            required: true,
            message: 'Por favor ingrese la fecha de caducidad!',
          },
        ]}
      >
        <DatePicker format={'DD/MM/YYYY'} />
      </Form.Item>
      <Form.Item
        name="estadoCivil"
        label="Estado Civil"
        rules={[
          {
            required: true,
            message: 'Por favor ingrese el estado civil!',
          },
        ]}
      >
        <Select>
          <Select.Option value="Soltero">SOLTERO</Select.Option>
          <Select.Option value="Casado">CASADO</Select.Option>
          <Select.Option value="Divorciado">DIVORCIADO</Select.Option>
          <Select.Option value="Viudo">VIUDO</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="firmaHuella"
        label="Firma/Huella"
        rules={[
          {
            required: true,
            message: 'Por favor ingrese la firma/huella!',
          },
        ]}
      >
        <Select>
          <Select.Option value="Firma">FIRMA</Select.Option>
          <Select.Option value="Huella">HUELLA</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="hcl_053"
        label="HCL 053"
        rules={[
          {
            required: true,
            message: 'Por favor ingrese el HCL 053!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="tipoDeSeguro"
        label="Tipo de Seguro"
        rules={[
          {
            required: true,
            message: 'Por favor ingrese el tipo de seguro!',
          },
        ]}
      >
        <Select>
          <Select.Option value="IESS S.G">IESS S.G</Select.Option>
          <Select.Option value="IESS S.C">IESS S.C</Select.Option>
          <Select.Option value="MSP">MSP</Select.Option>
          <Select.Option value="ISSFA">ISSFA</Select.Option>
          <Select.Option value="ISSPOL">ISSPOL</Select.Option>
          <Select.Option value="MONTE PIO">MONTE PIO</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="fechaIngreso"
        label="Fecha de Ingreso"
      >
        <DatePicker format={'DD/MM/YYYY'} />
      </Form.Item>
      <Form.Item
        name="ano"
        label="Año"
      >
        <Input type="number" />
      </Form.Item>
      <Form.Item
        name="telefono"
        label="Teléfono"
        rules={[
          {
            required: true,
            message: 'Por favor ingrese el número de teléfono!',
          },
          {
            pattern: validatePhoneNumber,
            message: 'Por favor ingrese un número de teléfono válido!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="residencia"
        label="Residencia"
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="comprobantePagoSV"
        label="Comprobante de Pago del SV"
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="codigoValidacion"
        label="Código de Validación"
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="fechaCodigoValidacion"
        label="Emision del Código de Validación"
      >
        <DatePicker format={'DD/MM/YYYY'} />
      </Form.Item>
      <Form.Item
        name="vigenciaCodigoValidacion"
        label="Vigencia del Código de Validación"
      >
        <DatePicker format={'DD/MM/YYYY'} />
      </Form.Item>
        
      <Form.Item
        name="tipoCodigoValidacion"
        label="Tipo de Código de Validación"
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="tpsns053"
        label="TPSNS053"
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="tpsn1"
        label="TPSN1"
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="tpsn2"
        label="TPSN2"
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="accesoVascularIngreso"
        label="Acceso Vascular al Ingreso"
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="acvActual"
        label="ACV Actual"
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="fistulas"
        label="Fístulas"
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="cate"
        label="Cate"
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="derivados"
        label="Derivados"
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="estadoDelPaciente"
        label="Estado del Paciente"
      >
        <Select>
          <Select.Option value="Vivo">VIVO</Select.Option>
          <Select.Option value="Fallecido">FALLECIDO</Select.Option>
          <Select.Option value="Transferido">TRANSFERIDO</Select.Option>
        </Select>
      </Form.Item>
    </>
  );
}
