import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLocales } from 'react-native-localize';

import ko from './ko';
import en from './en';

// 사용자의 기본 언어 감지
const deviceLanguage = getLocales()?.[0]?.languageCode || 'ko';

const resources = {
  ko,
  en,
};

i18n.use(initReactI18next).init({
  resources,
  lng: deviceLanguage === 'ko' ? 'ko' : 'en', // 한국어가 아니면 영어로 설정
  fallbackLng: 'ko', // 기본 언어를 한국어로 설정
  debug: __DEV__, // 개발 모드에서만 디버그 로그 출력

  interpolation: {
    escapeValue: false, // React에서는 XSS 보호가 기본으로 제공됨
  },

  // 네임스페이스 설정
  defaultNS: 'common',
  ns: ['common'],
});

export default i18n;
