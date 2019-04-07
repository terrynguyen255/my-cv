import React, {Component} from 'react';
import './InforField.css'
import { withNamespaces } from 'react-i18next';
import {getLocalizedValue} from "../../helpers/languageHelper";

class InfoField extends Component {
    render() {
        const icon = _getIconPath(this.props.type)
        const { t, i18n } = this.props;
        const value = getLocalizedValue(this.props.value, i18n)
        return (
            <div className="col-md-6 col-12">
                <div className="col-2 info-field-icon-container">
                    <img src={icon}/>
                </div>
                <div className="col-9 info-field-icon-value">{value}</div>
            </div>
        )
    }
}

const _getIconPath = (type) => {
    if (type === 'dob') return `${process.env.PUBLIC_URL}/images/icon-dob.svg`
    if (type === 'email') return `${process.env.PUBLIC_URL}/images/icon-email.svg`
    if (type === 'idCard') return `${process.env.PUBLIC_URL}/images/icon-idCard.svg`
    if (type === 'phone') return `${process.env.PUBLIC_URL}/images/icon-phone.svg`
    if (type === 'place') return `${process.env.PUBLIC_URL}/images/icon-place.svg`
    if (type === 'facebook') return `${process.env.PUBLIC_URL}/images/icon-facebook.svg`
    if (type === 'github') return `${process.env.PUBLIC_URL}/images/icon-github.svg`
}
export default withNamespaces('componentApp')(InfoField);
