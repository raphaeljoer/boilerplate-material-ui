import { I18nAdapterProtocol } from 'translate/protocols/i18nAdapterProtocol';
import { I18nProtocol } from 'translate/protocols/i18nProtocol';

export const i18nAdapter: I18nAdapterProtocol = (
  i18n: I18nProtocol,
  key: string,
  opt?: unknown
) => {
  return i18n(key, opt);
};
