import React from 'react';
import CrudModule from '@/modules/CrudModule';
import EmployeeForm from '@/forms/EmployeeForm';
import dayjs from 'dayjs';
export default function Employee() {
  const entity = 'employee';
  const searchConfig = {
    displayLabels: ['cedula', 'nombres', 'apellidos'],
    searchFields: 'cedula,nombres,apellidos',
    outputValue: '_id',
  };

  const entityDisplayLabels = ['cedula', 'nombres', 'apellidos'];

  const dataTableColumns = [
    {
      title: 'Cedula',
      dataIndex: 'cedula',
    },
    {
      title: 'Nombres',
      dataIndex: 'nombres',
    },
    {
      title: 'Apellidos',
      dataIndex: 'apellidos',
    },
    {
      title: 'Fecha de Nacimiento',
      dataIndex: 'fechaNacimiento',
      render: (date) => {
        return dayjs(date).format('DD/MM/YYYY');
      },
    },
    {
      title: 'Edad',
      dataIndex: 'edad',
    },
    {
      title: 'Grupo Sanguineo',
      dataIndex: 'grupoSanguineo',
    },
    {
      title: 'HCL',
      dataIndex: 'hcl',
    },
    {
      title: 'Genero',
      dataIndex: 'genero',
    },
    {
      title: 'Instrucción',
      dataIndex: 'instruccion',
    },
    {
      title: 'Fecha de Caducidad',
      dataIndex: 'fechaCaducidad',
      render: (date) => {
        return dayjs(date).format('DD/MM/YYYY');
      },
    },
    {
      title: 'Estado Civil',
      dataIndex: 'estadoCivil',
    },
    {
      title: 'Firma/Huella',
      dataIndex: 'firmaHuella',
    },
    {
      title: 'HCL 053',
      dataIndex: 'hcl_053',
    },
    {
      title: 'Tipo de Seguro',
      dataIndex: 'tipoDeSeguro',
    },
    {
      title: 'Fecha de Ingreso',
      dataIndex: 'fechaIngreso',
      render: (date) => {
        return dayjs(date).format('DD/MM/YYYY');
      },
    },
    {
      title: 'Año',
      dataIndex: 'ano',
    },
    {
      title: 'Teléfono',
      dataIndex: 'telefono',
    },
    {
      title: 'Residencia',
      dataIndex: 'residencia',
    },
    {
      title: 'Comprobante de Pago del SV',
      dataIndex: 'comprobantePagoSV',
    },
    {
      title: 'Codigo de Validación',
      dataIndex: 'codigoValidacion',
    },
    {
      title: 'Vigencia del Codigo de Validación',
      dataIndex: 'vigenciaCodigoValidacion',
      render: (date) => {
        return dayjs(date).format('DD/MM/YYYY');
      },
    },
    {
      title: 'Tipo de Codigo de Validación',
      dataIndex: 'tipoCodigoValidacion',
    },
    {
      title: 'TPSNS053',
      dataIndex: 'tpsns053',
    },
    {
      title: 'TPSN1',
      dataIndex: 'tpsn1',
    },
    {
      title: 'TPSN2',
      dataIndex: 'tpsn2',
    },
    {
      title: 'Acceso Vascular al Ingreso',
      dataIndex: 'accesoVascularIngreso',
    },
    {
      title: 'ACV Actual',
      dataIndex: 'acvActual',
    },
    {
      title: 'Fistulas',
      dataIndex: 'fistulas',
    },
    {
      title: 'Cate',
      dataIndex: 'cate',
    },
    {
      title: 'Derivados',
      dataIndex: 'derivados',
    },
    {
      title: 'Estado del Paciente',
      dataIndex: 'estadoDelPaciente',
    },
  ];

  const readColumns = [
    {
      title: 'Cedula',
      dataIndex: 'cedula',
    },
    {
      title: 'Nombres',
      dataIndex: 'nombres',
    },
    {
      title: 'Apellidos',
      dataIndex: 'apellidos',
    },
    {
      title: 'Fecha de Nacimiento',
      dataIndex: 'fechaNacimiento',
      isDate: true,
    },
    {
      title: 'Edad',
      dataIndex: 'edad',
    },
    {
      title: 'Grupo Sanguineo',
      dataIndex: 'grupoSanguineo',
    },
    {
      title: 'HCL',
      dataIndex: 'hcl',
    },
    {
      title: 'Genero',
      dataIndex: 'genero',
    },
    {
      title: 'Instrucción',
      dataIndex: 'instruccion',
    },
    {
      title: 'Fecha de Caducidad',
      dataIndex: 'fechaCaducidad',
      isDate: true,
    },
    {
      title: 'Estado Civil',
      dataIndex: 'estadoCivil',
    },
    {
      title: 'Firma/Huella',
      dataIndex: 'firmaHuella',
    },
    {
      title: 'HCL 053',
      dataIndex: 'hcl_053',
    },
    {
      title: 'Tipo de Seguro',
      dataIndex: 'tipoDeSeguro',
    },
    {
      title: 'Fecha de Ingreso',
      dataIndex: 'fechaIngreso',
      isDate: true,
    },
    {
      title: 'Año',
      dataIndex: 'ano',
    },
    {
      title: 'Teléfono',
      dataIndex: 'telefono',
    },
    {
      title: 'Residencia',
      dataIndex: 'residencia',
    },
    {
      title: 'Comprobante de Pago del SV',
      dataIndex: 'comprobantePagoSV',
    },
    {
      title: 'Codigo de Validación',
      dataIndex: 'codigoValidacion',
    },
    {
      title: 'Vigencia del Codigo de Validación',
      dataIndex: 'vigenciaCodigoValidacion',
      isDate: true,
    },
    {
      title: 'Tipo de Codigo de Validación',
      dataIndex: 'tipoCodigoValidacion',
    },
    {
      title: 'TPSNS053',
      dataIndex: 'tpsns053',
    },
    {
      title: 'TPSN1',
      dataIndex: 'tpsn1',
    },
    {
      title: 'TPSN2',
      dataIndex: 'tpsn2',
    },
    {
      title: 'Acceso Vascular al Ingreso',
      dataIndex: 'accesoVascularIngreso',
    },
    {
      title: 'ACV Actual',
      dataIndex: 'acvActual',
    },
    {
      title: 'Fistulas',
      dataIndex: 'fistulas',
    },
    {
      title: 'Cate',
      dataIndex: 'cate',
    },
    {
      title: 'Derivados',
      dataIndex: 'derivados',
    },
    {
      title: 'Estado del Paciente',
      dataIndex: 'estadoDelPaciente',
    },

  ];

  const ADD_NEW_ENTITY = 'Agregar Nuevo Paciente';
  const DATATABLE_TITLE = 'Pacientes';
  const ENTITY_NAME = 'Pacientes';
  const CREATE_ENTITY = 'Crear Paciente';
  const UPDATE_ENTITY = 'Actualizar Paciente';
  const PANEL_TITLE = 'Panel de Pacientes';

  const config = {
    entity,
    PANEL_TITLE,
    ENTITY_NAME,
    CREATE_ENTITY,
    ADD_NEW_ENTITY,
    UPDATE_ENTITY,
    DATATABLE_TITLE,
    readColumns,
    dataTableColumns,
    searchConfig,
    entityDisplayLabels,
  };

  return (
    <CrudModule
      createForm={<EmployeeForm />}
      updateForm={<EmployeeForm isUpdateForm={true} />}
      config={config}
    />
  );
}
