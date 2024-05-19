const moment = require('moment')

export const mmoment = (dateStr) => {
    return dateStr ? moment(dateStr, 'YYYY-MM-DD') : moment();
}
