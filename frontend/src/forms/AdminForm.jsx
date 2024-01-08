import { Form, Input, Select } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { message, Upload, Button } from 'antd';

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('Solo puedes subir archivos JPG/PNG!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('La imagen debe ser menor a 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

export default function AdminForm({ isUpdateForm = false }) {
  return (
    <>
      <Form.Item
        label="Nombre"
        name="name"
        rules={[
          {
            required: true,
            message: 'Por favor ingrese su nombre!',
          },
        ]}
      >
        <Input autoComplete="off" />
      </Form.Item>
      <Form.Item
        label="Apellido"
        name="surname"
        rules={[
          {
            required: true,
            message: 'Por favor ingrese su apellido!',
          },
        ]}
      >
        <Input autoComplete="off" />
      </Form.Item>
      <Form.Item
        label="E-mail"
        name="email"
        rules={[
          {
            required: true,
            message: 'Por favor ingrese su correo electrónico!',
          },
          {
            type: 'email',
            message: 'Correo electrónico inválido!',
          },
        ]}
      >
        <Input autoComplete="off" />
      </Form.Item>

      {!isUpdateForm && (
        <Form.Item
          label="Contraseña"
          name="password"
          rules={[
            {
              required: true,
              message: 'Por favor ingrese su contraseña!',
            },
          ]}
        >
          <Input.Password autoComplete="new-password" />
        </Form.Item>
      )}
      <Form.Item
        label="Rol"
        name="role"
        rules={[
          {
            required: true,
            message: 'Por favor ingrese su rol!',
          },
        ]}
      >
        <Select>
          <Select.Option value="admin">Admin (Super Admin)</Select.Option>
          <Select.Option value="staffAdmin">Personal Administrativo (Crear,Leer,Actualizar,Eliminar)</Select.Option>
          <Select.Option value="staff">Personal Operativo (Crear,Leer,Actualizar)</Select.Option>
          <Select.Option value="createOnly">Crear y Solo Leer</Select.Option>
          <Select.Option value="readOnly">Solo Leer</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="file"
        label="Foto"
        valuePropName="fileList"
        getValueFromEvent={(e) => e.fileList}
      >
        <Upload beforeUpload={beforeUpload}>
          <Button icon={<UploadOutlined />}>Click para subir</Button>
        </Upload>
      </Form.Item>
    </>
  );
}
