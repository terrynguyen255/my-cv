const _get = require('lodash/get')

export const getLocalizedValue = (value, i18n) => {
    return _get(value, i18n.language) || _get(value, i18n.options.lng) || value
}
