import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";

import enCompomentApp from './locales/en/componentApp.json';
import viCompomentApp from './locales/vi/componentApp.json';

const resources = {
    en: {
        componentApp: enCompomentApp,
    },
    vi: {
        componentApp: viCompomentApp,
    }
};

i18n.use(reactI18nextModule)
    .init({
        resources,
        lng: "en",
        keySeparator: false,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
