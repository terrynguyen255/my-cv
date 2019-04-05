import React, {Component} from 'react';
import Media from "react-media";
import './UnorderList.css'

export class UnorderList extends Component {
    render() {
        const defaultColumns = 1
        const columns = this.props.columns || defaultColumns
        const renderedLiElements = this.props.list.map(element => (<li>{element}</li>))

        return (
            <Media query="(max-width: 400px)">
                {matches =>
                    matches ? (
                        <ul
                            style={{
                                columns: String(defaultColumns),
                                webkitColumns: String(defaultColumns),
                                mozColumns: String(defaultColumns),
                            }}
                        >
                            {renderedLiElements}
                        </ul>
                    ) : (
                        <ul
                            style={{
                                columns: String(columns),
                                webkitColumns: String(columns),
                                mozColumns: String(columns),
                            }}
                        >
                            {renderedLiElements}
                        </ul>
                    )
                }
            </Media>
        )
    }
}
