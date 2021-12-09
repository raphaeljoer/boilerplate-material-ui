import { I18nProtocol } from './i18nProtocol';
export interface I18nAdapterProtocol {
  (i18n: I18nProtocol, key: string, opt?: any): string;
}
