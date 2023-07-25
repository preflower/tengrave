import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
// TODO: 待使用编译时工具解决
import en from './locales/en.json'

const resources = {
  en: {
    translation: en
  }
}

void i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  })

export default i18n
