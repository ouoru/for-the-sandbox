import React from 'react'

import StringView from '../../strings/StringView'

class EditEvent extends React.Component {
    _onSave = () => {
        this.props.onSave()
        this.props.popModalBy(1)
    }
    
    render() {
        return (
            <div
                className="height-transition"
                cancel-appclick="true"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    minWidth: 600,
                    width: '75vw',
                    maxHeight: '60vh',
                }}
            >
                <StringView/>
                <div className="row modal-options">
                    <div className="modal-button" onClick={this._onSave}>
                        Save
                    </div>
                    <div className="underline-button" onClick={this.props.onClose}>
                        Cancel
                    </div>
                </div>
            </div>
        )
    }
}

export default EditEvent