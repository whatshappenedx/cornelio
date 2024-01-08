import configPage from './config';

import GeneralSettingsModule from '@/modules/SettingModule/GeneralSettingsModule';

const config = {
  ...configPage,
  settingsCategory: 'app_settings',
  SETTINGS_TITLE: 'Configuración General',
};
export default function GeneralSettings() {
  return <GeneralSettingsModule config={config} />;
}
