import React, {Component} from 'react';
import Media from "react-media";
import './UnorderList.css'
import { withNamespaces } from 'react-i18next';
import {getLocalizedValue} from "../../helpers/languageHelper";

class UnorderList extends Component {
    render() {
        const { t, i18n } = this.props;
        const defaultColumns = 1
        const columns = this.props.columns || defaultColumns
        const renderedLiElements = this.props.list.map(element => (<li>{getLocalizedValue(element, i18n)}</li>))

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
export default withNamespaces('componentApp')(UnorderList)
