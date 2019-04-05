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
                <div className="col-2" style={{textAlign:'right'}}>{this.props.name}</div>
                <div className="col-4" style={{padding:0, marginLeft:'-0.3rem'}}>{pointsElements}</div>
                <div className="col-6" style={{padding:0, marginLeft:'-4rem'}}>{this.props.description}</div>
            </div>
        )
    }
}
