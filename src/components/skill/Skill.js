import React, {Component} from 'react';
import { withNamespaces } from 'react-i18next';
import './Skill.css'
import {getLocalizedValue} from "../../helpers/languageHelper";

class Skill extends Component {
    render() {
        const { i18n } = this.props;
        let pointsElements = []
        for (let i = 1; i <= 10; i++) {
            if (i <= this.props.skill.points) {
                pointsElements.push(<div key={i} className="point point-full"></div>)
            }
            else if (i > this.props.skill.points && i - 1 < this.props.skill.points) {
                pointsElements.push(<div key={i} className="point point-half"></div>)
            } else {
                pointsElements.push(<div key={i} className="point"></div>)
            }
        }
        return (
            <div className="row skill-container">
                <div className="skill-name col-md-3"><b>{getLocalizedValue(this.props.skill.name, i18n)}:</b></div>
                <div className="skill-points-bar col-md-4">{pointsElements}</div>
                <div className="skill-description col-md-5">{getLocalizedValue(this.props.skill.description, i18n)}</div>
            </div>
        )
    }
}
export default withNamespaces('componentSkill')(Skill);
