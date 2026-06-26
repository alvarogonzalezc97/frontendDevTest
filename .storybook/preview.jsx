import '../src/index.scss';
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import spanish from '../src/i18n/locales/spanish.json'
import english from '../src/i18n/locales/english.json'

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: english },
    es: { translation: spanish },
  },
  lng: 'es',
  fallbackLng: 'es'
})

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
