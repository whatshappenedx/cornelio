import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, Drawer, Layout, Menu } from 'antd';

import { useAppContext } from '@/context/appContext';
import logoIcon from '@/style/images/logo-icon.svg';
import logoText from '@/style/images/logo-text.svg';
import history from '@/utils/history';

import {
  SettingOutlined,
  CustomerServiceOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  InboxOutlined,
  FileTextOutlined,
  FileSyncOutlined,
  DashboardOutlined,
  TeamOutlined,
  UserOutlined,
  CreditCardOutlined,
  MenuOutlined,
  UserAddOutlined,
  FileOutlined,
} from '@ant-design/icons';

const SIDEBAR_MENU = [
  { key: '/', icon: <DashboardOutlined />, title: 'Inicio' },
  { key: '/lead', icon: <UserAddOutlined />, title: 'Asistencia' },
  // { key: '/offer', icon: <FileOutlined />, title: 'Offer' },
  // { key: '/customer', icon: <CustomerServiceOutlined />, title: '--------' },
  { key: '/order', icon: <ShopOutlined />, title: 'Acta/Planillaje' },
  //{ key: '/inventory', icon: <InboxOutlined />, title: 'Inventory' },
  // { key: '/kyc', icon: <ShoppingCartOutlined />, title: 'Kyc' },
  //{ key: '/invoice', icon: <FileTextOutlined />, title: 'Invoice' },
  //{ key: '/quote', icon: <FileSyncOutlined />, title: 'Quote' },
  //{ key: '/payment/invoice', icon: <CreditCardOutlined />, title: 'Payment Invoice' },
  { key: '/employee', icon: <UserOutlined />, title: 'Pacientes' },
  { key: '/admin', icon: <TeamOutlined />, title: 'Empleados' },
];

const SETTINGS_SUBMENU = [
  { key: '/settings', title: 'Ajustes Generales' },

  //{ key: '/email', title: 'Plantillas' },

  //{ key: '/payment/mode', title: 'Modo de Pago' },
  //{ key: '/settings/advanced', title: 'Avanzados' },
];

const { Sider } = Layout;
const { SubMenu } = Menu;

export default function Navigation() {
  return (
    <>
      <div className="sidebar-wraper">
        <Sidebar collapsible={true} />
      </div>
      <MobileSidebar />
    </>
  );
}

function Sidebar({ collapsible }) {
  let location = useLocation();

  const { state: stateApp, appContextAction } = useAppContext();
  const { isNavMenuClose } = stateApp;
  const { navMenu } = appContextAction;
  const [showLogoApp, setLogoApp] = useState(isNavMenuClose);
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    if (location) if (currentPath !== location.pathname) setCurrentPath(location.pathname);
  }, [location, currentPath]);

  useEffect(() => {
    if (isNavMenuClose) {
      setLogoApp(isNavMenuClose);
    }
    const timer = setTimeout(() => {
      if (!isNavMenuClose) {
        setLogoApp(isNavMenuClose);
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [isNavMenuClose]);
  const onCollapse = () => {
    navMenu.collapse();
  };

  return (
    <>
      <Sider
        collapsible={collapsible}
        collapsed={collapsible ? isNavMenuClose : collapsible}
        onCollapse={onCollapse}
        className="navigation"
      >
        <div className="logo" onClick={() => history.push('/')} style={{ cursor: 'pointer' }}>
          <img src={logoIcon} alt="Logo" style={{ height: '32px' }} />

          {!showLogoApp && (
            <img
              src={logoText}
              alt="Logo"
              style={{ marginTop: '3px', marginLeft: '10px', height: '29px' }}
            />
          )}
        </div>
        <Menu mode="inline" selectedKeys={[currentPath]}>
          {SIDEBAR_MENU.map((menuItem) => (
            <Menu.Item key={menuItem.key} icon={menuItem.icon}>
              <Link to={menuItem.key} />
              {menuItem.title}
            </Menu.Item>
          ))}
          <SubMenu key={'Settings'} icon={<SettingOutlined />} title={'Configuración'}>
            {SETTINGS_SUBMENU.map((menuItem) => (
              <Menu.Item key={menuItem.key}>
                <Link to={menuItem.key} />
                {menuItem.title}
              </Menu.Item>
            ))}
          </SubMenu>
        </Menu>
      </Sider>
    </>
  );
}

function MobileSidebar() {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <Button type="text" size="large" onClick={showDrawer} className="mobile-sidebar-btn">
        <MenuOutlined />
      </Button>
      <Drawer
        width={200}
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
        className="mobile-sidebar-wraper"
      >
        <Sidebar collapsible={false} />
      </Drawer>
    </>
  );
}
