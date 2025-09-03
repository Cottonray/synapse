import 'react-i18next';
import ko from './ko';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: typeof ko;
  }
}
