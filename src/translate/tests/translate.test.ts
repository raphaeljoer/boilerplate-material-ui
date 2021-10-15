import LanguageDetector from 'i18next-browser-languagedetector';
import i18n, { InitOptions } from 'i18next';
import { i18nAdapter } from 'translate/adapters/i18nAdapter';
import { fakeMessages } from 'translate/tests/fakes/languages';
import { t } from 'translate/ports/t';
import { i18next } from 'translate/infra/i18next';

const config: InitOptions = {
  debug: false,
  defaultNS: 'translations',
  ns: 'translations',
  resources: fakeMessages
};

describe('translate', () => {
  describe('adapters', () => {
    test('[i18next][en] Should return a english translation', () => {
      i18n.use(LanguageDetector).init({ ...config, lng: 'en' });
      const sut = i18nAdapter(i18next, 'fake.test');
      expect(sut).toBe('fake');
    });

    test('[i18next][pt] Should return a portuguese translation', () => {
      i18n.use(LanguageDetector).init({ ...config, lng: 'pt' });
      const sut = i18nAdapter(i18next, 'fake.test');
      expect(sut).toBe('falso');
    });

    test('[i18next][es] Should return a spanish translation', () => {
      i18n.use(LanguageDetector).init({ ...config, lng: 'es' });
      const sut = i18nAdapter(i18next, 'fake.test');
      expect(sut).toBe('usurpador');
    });
  });

  describe('ports', () => {
    test('[i18next][en] Should return a english translation', () => {
      i18n.use(LanguageDetector).init({ ...config, lng: 'en' });
      const sut = t('fake.test');
      expect(sut).toBe('fake');
    });

    test('[i18next][pt] Should return a portuguese translation', () => {
      i18n.use(LanguageDetector).init({ ...config, lng: 'pt' });
      const sut = t('fake.test');
      expect(sut).toBe('falso');
    });

    test('[i18next][es] Should return a spanish translation', () => {
      i18n.use(LanguageDetector).init({ ...config, lng: 'es' });
      const sut = t('fake.test');
      expect(sut).toBe('usurpador');
    });
  });
});
