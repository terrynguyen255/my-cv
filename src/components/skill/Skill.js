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
            <div className="row">
                <div className="col-2">{this.props.name}</div>
                <div className="col-4">
                    { pointsElements }
                </div>
                <div className="col-6">{this.props.description}</div>
            </div>
        )
    }
}
