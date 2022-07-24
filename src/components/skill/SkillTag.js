import React, {Component} from 'react';
import { withNamespaces } from 'react-i18next';
import ReactTooltip from 'react-tooltip';

import './SkillTag.css'
import {getLocalizedValue} from "../../helpers/languageHelper";

class SkillTag extends Component {
    render() {
        const { i18n } = this.props;
        const name = getLocalizedValue(this.props.skill.name, i18n)

        return (
            <div className="skill-container">
                <ReactTooltip id={name} type='info'>{`${this.props.skill.points}/10`}</ReactTooltip>
                <div data-tip data-for={name}>
                    {getLocalizedValue(name, i18n)}&nbsp;
                    ({this.props.skill.points})
                </div>
            </div>
        )
    }
}
export default withNamespaces('componentSkill')(SkillTag);
