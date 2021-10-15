import { I18nProtocol } from 'translate/protocols/i18nProtocol';
import i18n, { InitOptions, TOptions } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { en, pt, es } from '../../languages';

export const messages = {
  en: {
    translations: {
      ...en
    }
  },
  pt: {
    translations: {
      ...pt
    }
  },
  es: {
    translations: {
      ...es
    }
  }
};

export const config: InitOptions = {
  debug: false,
  defaultNS: 'translations',
  ns: 'translations',
  fallbackLng: 'pt',
  resources: messages
};

i18n.use(LanguageDetector).init(config);

export const i18next: I18nProtocol = (key: string, opt?: TOptions): string => {
  return i18n.t(key, opt);
};
