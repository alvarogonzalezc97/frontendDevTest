import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import english from './locales/english.json'
import spanish from './locales/spanish.json'
import { getLocalStorage } from '../storage/localStorage'

const savedLanguage = getLocalStorage('i18n') || 'en'

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: english },
    es: { translation: spanish },
  },
  lng: savedLanguage,
  fallbackLng: savedLanguage,
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
