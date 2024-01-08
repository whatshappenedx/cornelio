import configPage from './config';

import MoneyFormatSettingsModule from '@/modules/SettingModule/MoneyFormatSettingsModule';

const config = {
  ...configPage,
  settingsCategory: 'money_format_settings',
  SETTINGS_TITLE: 'Formato de configuración de dinero',
};
export default function MoneyFormatSettings() {
  return <MoneyFormatSettingsModule config={config} />;
}
