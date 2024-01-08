import React from 'react';
import OrderForm from '@/forms/OrderForm'; // Ensure to create this form
import { Button, Form, Input, Tag, Select, InputNumber, message, PageHeader } from 'antd';
import axios from 'axios';
import { useLayoutEffect, useEffect, useState } from 'react';
import { Row, Col, Divider } from 'antd';
import {
  MenuFoldOutlined,
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  ArrowLeftOutlined,
} from '@ant-design/icons';

import UpdateForm from '@/components/UpdateForm';
import DeleteModal from '@/components/DeleteModal';
import ReadItem from '@/components/ReadItem';
import SearchItem from '@/components/SearchItem';
import uniqueId from '@/utils/uinqueId';


import { useDispatch, useSelector } from 'react-redux';

import { selectCreatedItem } from '@/redux/crud/selectors';
import { selectCurrentItem } from '@/redux/crud/selectors';
import { crud } from '@/redux/crud/actions';
import { useCrudContext } from '@/context/crud';

import { CrudLayout } from '@/layout';

import CrudDataTable from '@/modules/CrudModule/CrudDataTable';

import Loading from '@/components/Loading';

//-------------------------------------------------------

function CreateForm({ config, formElements, withUpload = false }) {
  let { entity } = config;
  const dispatch = useDispatch();
  const { isLoading, isSuccess } = useSelector(selectCreatedItem);
  const { crudContextAction } = useCrudContext();
  const { panel, collapsedBox, readBox } = crudContextAction;
  const [form] = Form.useForm();
  const onSubmit = (fieldsValue) => {
    // Manually trim values before submission

    if (fieldsValue.file && withUpload) {
      fieldsValue.file = fieldsValue.file[0].originFileObj;
    }

    const trimmedValues = Object.keys(fieldsValue).reduce((acc, key) => {
      acc[key] = typeof fieldsValue[key] === 'string' ? fieldsValue[key].trim() : fieldsValue[key];
      return acc;
    }, {});

    dispatch(crud.create({ entity, jsonData: trimmedValues, withUpload }));
  };

  useEffect(() => {
    if (isSuccess) {
      readBox.open();
      collapsedBox.open();
      panel.open();
      form.resetFields();
      dispatch(crud.resetAction({ actionType: 'create' }));
      dispatch(crud.list({ entity }));
    }
  }, [isSuccess]);

  return (
    <Loading isLoading={isLoading}>
      <Form form={form} layout="vertical" onFinish={onSubmit}>
        {formElements}
      </Form>
    </Loading>
  );
}

//----------------------------------------------------------------

function SidePanelTopContent({ config, formElements, withUpload }) {
  const { crudContextAction, state } = useCrudContext();
  const { entityDisplayLabels, entity } = config;
  const { panel, collapsedBox, modal, readBox, editBox } = crudContextAction;

  const { isReadBoxOpen, isEditBoxOpen } = state;
  const { result: currentItem } = useSelector(selectCurrentItem);
  const dispatch = useDispatch();

  const [labels, setLabels] = useState('');
  useEffect(() => {
    if (currentItem) {
      const currentlabels = entityDisplayLabels.map((x) => currentItem[x]).join(' ');

      setLabels(currentlabels);
    }
  }, [currentItem]);

  const removeItem = () => {
    dispatch(crud.currentAction({ actionType: 'delete', data: currentItem }));
    modal.open();
  };
  const editItem = () => {
    dispatch(crud.currentAction({ actionType: 'update', data: currentItem }));
    editBox.open();
  };
  const show = isReadBoxOpen || isEditBoxOpen ? { opacity: 1 } : { opacity: 0 };
  return (
    <>
      <Row style={show}>
        <Col span={13}>
          <p style={{ marginBottom: '10px' }}>{labels}</p>
        </Col>
        <Col span={11}>
          <Button
            onClick={removeItem}
            type="text"
            icon={<DeleteOutlined />}
            size="small"
            style={{ float: 'right', marginLeft: '5px' }}
          >
            Eliminar
          </Button>
          <Button
            onClick={editItem}
            type="text"
            icon={<EditOutlined />}
            size="small"
            style={{ float: 'right', marginLeft: '0px' }}
          >
            editar
          </Button>
        </Col>

        <Col span={24}>
          <div className="line"></div>
        </Col>
        <div className="space10"></div>
      </Row>
      <ReadItem config={config} />
      <UpdateForm config={config} formElements={formElements} withUpload={withUpload} />
    </>
  );
}


function FixHeaderPanel({ config }) {
  const { crudContextAction } = useCrudContext();

  const { panel, collapsedBox, modal, readBox, editBox } = crudContextAction;

  const addNewItem = () => {
    collapsedBox.close();
  };

  const collapsePanel = () => {
    panel.collapse();
  };

  return (
    <div className="box">
      <Row gutter={12}>
        <Col className="gutter-row" span={22}>
          <h1 style={{ fontSize: 20, marginBottom: 20 }}>{config.PANEL_TITLE}</h1>
        </Col>
        <Col className="gutter-row" span={2}>
          <Button
            type="text"
            onClick={collapsePanel}
            icon={<MenuFoldOutlined />}
            block={true}
            size="middle"
          ></Button>
        </Col>
      </Row>
      <Row gutter={8}>
        <Col className="gutter-row" span={21}>
          <SearchItem config={config} />
        </Col>
        <Col className="gutter-row" span={3}>
          <Button onClick={addNewItem} block={true} icon={<PlusOutlined />}></Button>
        </Col>
      </Row>
    </div>
  );
}

function AddNewItem2({ config }) {
  const { crudContextAction } = useCrudContext();
  const { collapsedBox, panel } = crudContextAction;
  const { ADD_NEW_ENTITY } = config;
  const handelClick = () => {
    panel.open();
    collapsedBox.close();
  };

  return (
    <Button onClick={handelClick} type="primary">
      {ADD_NEW_ENTITY}
    </Button>
  );
}

function CrudModule({ config, createForm,  updateForm, withUpload = false }) {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(crud.resetState());
  }, []);
  

  return (
    <CrudLayout
      config={config}
      fixHeaderPanel={<FixHeaderPanel config={config} />}
      sidePanelBottomContent={
        <CreateForm config={config} formElements={createForm} withUpload={withUpload} />
      }

    >
      <PageHeader
        onBack={() => window.history.back()}
        title={'Nuevo2'}
        ghost={false}
        extra={[
          <Button>
            Actualizar
          </Button>,
          
          <AddNewItem2 config={config} />,
        ]}
        style={{
          padding: '20px 0px',
        }}
      ></PageHeader>
      <DeleteModal config={config} />
    </CrudLayout>
  );

}

//-------------------------------------------------------------------------

function Order() {
  const entity = 'order'; // Keeping entity value as 'order'
  const searchConfig = {
    displayLabels: ['orderId', 'status'],
    searchFields: 'orderId,status',
    outputValue: '_id',
  };

  const entityDisplayLabels = ['orderId'];

  const readColumns = [
    {
      title: 'ACTA',
      dataIndex: 'orderId',
    },
  ];
  const dataTableColumns = [
    {
      title: 'ACTA',
      dataIndex: 'orderId',
    },
  ];

  const ADD_NEW_ENTITY = 'Nuevo';
  const DATATABLE_TITLE = 'Acta/Planilla';
  const ENTITY_NAME = 'shipping entry';
  const CREATE_ENTITY = 'Create shipping entry';
  const UPDATE_ENTITY = 'Update shipping entry';
  const PANEL_TITLE = 'Acta/Planilla';

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
      createForm={<OrderForm />}
      updateForm={<OrderForm isUpdateForm={true} />}
      config={config}
    />
  );
}

export default Order;
