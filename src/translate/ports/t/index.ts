import { TOptions } from 'i18next';
import { i18nAdapter } from 'translate/adapters/i18nAdapter';
import { i18next } from 'translate/infra/i18next';

export function t(key: string, opt?: TOptions): string {
  return i18nAdapter(i18next, key, opt);
}
