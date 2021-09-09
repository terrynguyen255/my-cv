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
        const defaultStyle = {
            marginLeft: '-1rem'
        }

        return (
            <Media query="(max-width: 400px)">
                {matches => {
                    const style = matches
                    ? {
                        columns: String(defaultColumns),
                        WebkitColumns: String(defaultColumns),
                        MozColumns: String(defaultColumns),
                        ...defaultStyle
                    }
                    : {
                        columns: String(columns),
                        WebkitColumns: String(columns),
                        MozColumns: String(columns),
                        ...defaultStyle
                    }

                    return (
                        <ul style={style}>
                            {renderedLiElements}
                        </ul>
                    )
                }}
            </Media>
        )
    }
}
export default withNamespaces('componentApp')(UnorderList)
