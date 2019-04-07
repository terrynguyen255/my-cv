import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";

import enCompomentApp from './locales/en/componentApp.json';
import viCompomentApp from './locales/vi/componentApp.json';

import viComponentProject from './locales/vi/componentProject.json';
import enComponentProject from './locales/en/componentProject.json';


const resources = {
    _en: {
        componentApp: enCompomentApp,
        componentProject: enComponentProject,
    },
    _vi: {
        componentApp: viCompomentApp,
        componentProject: viComponentProject,
    }
};

i18n.use(reactI18nextModule)
    .init({
        resources,
        lng: '_en',
        fallbackLng: '_en',
        fallbackNS: 'componentApp',
        keySeparator: false,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
