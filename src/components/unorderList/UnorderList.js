import React, {Component} from 'react';
import './UnorderList.css'

export class UnorderList extends Component {
    render() {
        const columns = this.props.columns || 1
        return (
            <ul
                style={{
                    columns: String(columns),
                    webkitColumns: String(columns),
                    mozColumns: String(columns),
                }}
            >
                {this.props.list.map(element => (<li>{element}</li>))}
            </ul>
        )
    }
}
