import React, {Component} from 'react';
import './InforField.css'

export class InfoField extends Component {
    render() {
        const icon = _getIconPath(this.props.type)

        return (
            <div className="col-6">
                <div className="info-field-icon-container">
                    <img src={icon}/>
                </div>
                <div className="info-field-icon-value">{this.props.value}</div>
            </div>
        )
    }
}

const _getIconPath = (type) => {
    if (type === 'dob') return `${process.env.PUBLIC_URL}/images/icon-dob.png`
    if (type === 'email') return `${process.env.PUBLIC_URL}/images/icon-email.png`
    if (type === 'idCard') return `${process.env.PUBLIC_URL}/images/icon-id-card.png`
    if (type === 'phone') return `${process.env.PUBLIC_URL}/images/icon-phone.png`
    if (type === 'place') return `${process.env.PUBLIC_URL}/images/icon-place.png`

    if (type === 'facebook') return `${process.env.PUBLIC_URL}/images/icon-place.png`
    if (type === 'github') return `${process.env.PUBLIC_URL}/images/icon-place.png`
}
