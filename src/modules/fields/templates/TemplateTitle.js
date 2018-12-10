import React from 'react'
import { fieldTypeToTitle } from '../defaults'

class TemplateTitle extends React.Component{
    _onChange = e => {
        const { fieldKey } = this.props.fieldInfo
        this.props.updateField(fieldKey, 'fieldTitle', e.target.value)
    }

    render() {
        const { fieldInfo } = this.props
        const { fieldTitle, fieldType } = fieldInfo

        return (
            <div className="row">
                <div
                    className="tag-button"
                >{fieldTypeToTitle[fieldType]}</div>
                <input
                    className="field-title-input"
                    value={fieldTitle || ''}
                    onChange={this._onChange}
                    placeholder="Untitled"
                    type="text"
                >
                </input>
            </div>
        )
    }
}

export default TemplateTitle