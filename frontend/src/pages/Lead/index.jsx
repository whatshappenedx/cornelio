import React from 'react';
import CrudModule from '@/modules/CrudModule';
import EmployeeForm from '@/forms/LeadForm';
import dayjs from 'dayjs';
export default function Employee() {
  const entity = 'Lead';
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
      title: 'Horario',
      dataIndex: 'horario',
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
      title: 'Horario',
      dataIndex: 'horario',
      isDate: true,
    },
  ];

  const ADD_NEW_ENTITY = 'Agregar Nueva Asistencia';
  const DATATABLE_TITLE = 'Asistencia';
  const ENTITY_NAME = 'Asistencia';
  const CREATE_ENTITY = 'Crear Asistencia';
  const UPDATE_ENTITY = 'Actualizar Asistencia';
  const PANEL_TITLE = 'Panel de Asistencia';

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
