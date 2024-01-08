import React, { useEffect } from 'react';
import { Button, Result } from 'antd';
import history from '@/utils/history';
const NotFound = () => {
  useEffect(() => {
    history.replace('/notfound');
  }, []);
  return (
    <>
      <Result
        status="404"
        title="404"
        subTitle="Página no encontrada."
        extra={
          <Button href="/" type="primary">
            Volver al inicio
          </Button>
        }
      />
    </>
  );
};
export default NotFound;
