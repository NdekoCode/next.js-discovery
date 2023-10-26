import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
const supportedLngs = ['en', 'fr'];
i18n.use(initReactI18next).init({
    lng:'en',
    fallbackLng:'en',
    supportedLngs,
    ns: ['common'],
    defaultNS:'common',
    interpolation:{
        escapeValue:false
    }
})
supportedLngs.forEach((lang) => {
    i18n.addResourceBundle(lang, 'common', require(`/public/locales/${lang}/common.json`));
});
export default i18n;