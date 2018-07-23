/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 */
import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import afLocaleData from 'react-intl/locale-data/af';
import zuLocaleData from 'react-intl/locale-data/zu';
import xhLocaleData from 'react-intl/locale-data/xh';

import { DEFAULT_LOCALE } from './containers/App/constants'; // eslint-disable-line
import enTranslationMessages from './translations/en.json';
import afTranslationMessages from './translations/af.json';
import zuTranslationMessages from './translations/zu.json';
import xhTranslationMessages from './translations/xh.json';

export const appLocales = [
  'en',
  'af',
  'zu',
  'xh',
];

addLocaleData(enLocaleData);
addLocaleData(afLocaleData);
addLocaleData(zuLocaleData);
addLocaleData(xhLocaleData);

export const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages = locale !== DEFAULT_LOCALE
    ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages)
    : {};
  return Object.keys(messages).reduce((formattedMessages, key) => {
    let message = messages[key];
    if (!message && locale !== DEFAULT_LOCALE) {
      message = defaultFormattedMessages[key];
    }
    return Object.assign(formattedMessages, { [key]: message });
  }, {});
};

export const translationMessages = {
  en: formatTranslationMessages('en', enTranslationMessages),
  af: formatTranslationMessages('af', afTranslationMessages),
  zu: formatTranslationMessages('zu', zuTranslationMessages),
  xh: formatTranslationMessages('xh', xhTranslationMessages),
};
