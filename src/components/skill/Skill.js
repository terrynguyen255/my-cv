import React, {Component} from 'react';
import './Skill.css'

export class Skill extends Component {
    render() {
        let pointsElements = []
        for (let i = 1; i <= 10; i++) {
            if (i <= this.props.points) {
                pointsElements.push(<div className="point point-full"></div>)
            }
            else if (i > this.props.points && i - 1 < this.props.points) {
                pointsElements.push(<div className="point point-half"></div>)
            } else {
                pointsElements.push(<div className="point"></div>)
            }
        }
        return (
            <div className="row skill-container">
                <div className="skill-name col-md-2"><b>{this.props.name}:</b></div>
                <div className="skill-points-bar col-md-4">{pointsElements}</div>
                <div className="skill-description col-md-6">{this.props.description}</div>
            </div>
        )
    }
}
