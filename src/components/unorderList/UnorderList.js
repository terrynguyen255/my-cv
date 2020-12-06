import React, {Component} from 'react';
import Media from "react-media";
import './UnorderList.css'
import { withNamespaces } from 'react-i18next';
import {getLocalizedValue} from "../../helpers/languageHelper";

class UnorderList extends Component {
    render() {
        const { i18n } = this.props;
        const defaultColumns = 1
        const columns = this.props.columns || defaultColumns
        const renderedLiElements = this.props.list.map((element, idx) => (<li key={idx}>{getLocalizedValue(element, i18n)}</li>))

        return (
            <Media query="(max-width: 400px)">
                {matches =>
                    matches ? (
                        <ul
                            style={{
                                columns: String(defaultColumns),
                                WebkitColumns: String(defaultColumns),
                                MozColumns: String(defaultColumns),
                            }}
                        >
                            {renderedLiElements}
                        </ul>
                    ) : (
                        <ul
                            style={{
                                columns: String(columns),
                                WebkitColumns: String(columns),
                                MozColumns: String(columns),
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
