import React from 'react'
import { connect } from 'react-redux'

import { showDropdownByKey } from '../DropdownReducer'
import { updatePage } from '../../page/PageReducer'

class EditVar extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            value: props.dropdownParams.tagKey
        }
    }

    _onDelete = () => {
        const { pageRepo, dropdownParams } = this.props
        const { pageKey } = dropdownParams

        let varsClone = {}
        Object.assign(varsClone, pageRepo[pageKey].vars)
        delete varsClone[this.state.value]

        this.props.updatePage(pageKey, 'vars', varsClone)
        this.props.showDropdownByKey()
    }

    _onChange = e => {
        const { pageRepo, dropdownParams } = this.props
        const { pageKey } = dropdownParams

        let varsClone = {}
        Object.assign(varsClone, pageRepo[pageKey].vars)
        delete varsClone[this.state.value]
        varsClone[e.target.value] = {}

        this.setState({ value: e.target.value })
        this.props.updatePage(pageKey, 'vars', varsClone)
    }

    _onKeyDown = e => {
        switch(e.nativeEvent.key) {
            case 'Enter':
                this.props.showDropdownByKey()
                break
            default:
        }
    }

    render() {
        const { dropdownParams } = this.props
        const { pageX, pageY } = dropdownParams

        let menuStyle = {
            top: pageY,
            left: pageX,
        }

        return (
            <div className="drop-down-menu" style={menuStyle}>
                <input
                    className="tag-input menu-voidclick"
                    value={this.state.value}
                    onChange={this._onChange}
                    onKeyDown={this._onKeyDown}
                    placeholder="Untitled"
                    type='text'
                    autoFocus
                />
                <div className="drop-down-menu-separator"/>
                <div className="drop-down-menu-option" onClick={this._onDelete}>
                    <i className={`drop-down-menu-icon ion-ios-trash`}></i>
                    Delete
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        dropdownParams: state.dropdown.dropdownParams,
        pageRepo: state.page.pageRepo
    }),
    {
        showDropdownByKey,
        updatePage,
    }
)(EditVar)