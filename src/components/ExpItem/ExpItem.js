import React, {Component} from 'react'
import './ExpItem.css'
import { withNamespaces } from 'react-i18next';
import {getLocalizedValue} from "../../helpers/languageHelper";

class ExpItem extends Component {
    render() {
        const { t, i18n } = this.props;
        const { exp } = this.props;

        const durationFrom =  exp.duration.from.format(t('MONTH_FORMAT'));
        const durationTo =  exp.duration.to ? exp.duration.to.format(t('DATE_FORMAT')) : t('PRESENT');

        return (
            <div>
                <h5>
                    <b>{getLocalizedValue(exp.title, i18n)}</b>&nbsp;
                    <span className="duration">({durationFrom}&nbsp;-&nbsp;{durationTo})</span>
                </h5>
                <div>
                    <ul>
                        {
                            exp.descriptions.map((des, idx) => (
                                <li key={idx}>
                                    {getLocalizedValue(des, i18n)}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default withNamespaces('componentProject')(ExpItem)
