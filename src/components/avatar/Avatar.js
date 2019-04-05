import React, {Component} from 'react';
import './Avatar.css'

export class Avatar extends Component {
    render() {
        return (
            <div className="avatar-container">
                <img
                    src={`${process.env.PUBLIC_URL}/images/avatar-frame.png`}
                    style={{
                        backgroundImage: `url('${this.props.avatar.src}')`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: `${this.props.avatar.sizeWidth} ${this.props.avatar.sizeHeight}`,
                        backgroundPosition: `${this.props.avatar.positionX} ${this.props.avatar.positionY}`,
                    }}
                />
            </div>
        )
    }
}
