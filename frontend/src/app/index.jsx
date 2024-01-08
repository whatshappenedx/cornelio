
import Router from '@/router';

import useNetwork from '@/hooks/useNetwork';

import { Layout, notification, Avatar, Menu, Dropdown } from 'antd';

import Navigation from '@/app/Navigation';

import { useSelector, useDispatch } from 'react-redux';
import { selectAuth } from '@/redux/auth/selectors';

// import { useNetworkState } from "react-use";
import Notifications from '@/components/Notification';

import {
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  LogoutOutlined,
  BellOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import photo from '@/style/images/photo.png';

import { selectCurrentAdmin } from '@/redux/auth/selectors';
import history from '@/utils/history';
import uniqueId from '@/utils/uinqueId';

import { BASE_URL } from '@/config/serverApiConfig';

function HeaderContent() {
  const currentAdmin = useSelector(selectCurrentAdmin);
  console.log('🚀 ~ file: index.jsx:23 ~ HeaderContent ~ currentAdmin:', currentAdmin);

  const { SubMenu } = Menu;

  const srcImgProfile = currentAdmin?.photo ? (
    BASE_URL + currentAdmin?.photo
  ) : (
    <UserOutlined style={{ color: '#333', fontSize: 'inherit' }} />
  );

  const profileDropdown = (
    <div className="profileDropdown whiteBox shadow" style={{ minWidth: '200px' }}>
      <div className="pad15" onClick={() => history.push('/profile')} style={{ cursor: 'pointer' }}>
        <Avatar
          size="large"
          className="last"
          src={srcImgProfile}
          style={{ float: 'left', fontSize: '32px' }}
        />
        <div className="info">
          <p className="strong">
            {currentAdmin?.name} {currentAdmin?.surname}
          </p>
          <p>{currentAdmin?.email}</p>
        </div>
      </div>
      <div className="line"></div>

      <div>
        <Menu>
          <Menu.Item
            icon={<SettingOutlined />}
            key={`${uniqueId()}`}
            onClick={() => history.push('/profile')}
          >
            Perfil
          </Menu.Item>
          <Menu.Item
            icon={<SettingOutlined />}
            key={`${uniqueId()}`}
            onClick={() => history.push('/settings/')}
          >
            Configuración
          </Menu.Item>
        </Menu>
      </div>
      <div className="line"></div>
      <div>
        <Menu>
          <Menu.Item
            icon={<LogoutOutlined />}
            key={`${uniqueId()}`}
            onClick={() => history.push('/logout')}
          >
            Salir
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
  return (
    <div className="headerIcon" style={{ position: 'absolute', right: 0, zIndex: '99' }}>
      <Dropdown overlay={profileDropdown} trigger={['click']} placement="bottomRight">
        {/* <Badge dot> */}
        <Avatar className="last" src={srcImgProfile} />
        {/* </Badge> */}
      </Dropdown>

      <Avatar icon={<AppstoreOutlined />} />

      <Dropdown overlay={<Notifications />} trigger={['click']} placement="bottomRight">
        {/* <Badge dot> */}
        <Avatar icon={<BellOutlined />} />

        {/* </Badge> */}
      </Dropdown>
    </div>
  );
}

function App() {
  // const [isOnline] = useNetwork();
  // // const networkState = useNetworkState();

  // if (!isOnline) {
  //   notification.config({
  //     duration: 0,
  //   });
  //   notification.error({
  //     message: "No internet connection",
  //     description: "Cannot connect to the server, Check your internet network",
  //   });
  // }
  const dispatch = useDispatch();




  const { isLoggedIn } = useSelector(selectAuth);

  if (!isLoggedIn) return <Router />;
  else {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Navigation />
        <Layout style={{ minHeight: '100vh' }}>
          <HeaderContent />
          <Router isLoggedIn={true} />
        </Layout>
      </Layout>
    );
  }
}

export default App;
