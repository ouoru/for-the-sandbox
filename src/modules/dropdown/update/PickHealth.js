import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import { updateType, updateFamilyType } from '../../logic/types'

import { updatePageByPath } from '../../page/PageReducer'

import UpdateType from './UpdateType'

class PickHealth extends React.Component{
    _select = (item) => {
        const { pageKey, fieldKey, indexKey, subfieldKey, update, mutate } = this.props
        
        this.props.updatePageByPath(pageKey, fieldKey, indexKey, 'data', subfieldKey, {
            update, mutate,
            value: item.key,
            valueType: item.valueType
        })
        this.props.showDropdown()
    }

    _renderItem = (item) => {
        const { currentValue } = this.props
        const chosen = typeof currentValue === 'string' && currentValue === item.key

        return (
            <div
                key={item.key}
                className="drop-down-menu-option"
                chosen={chosen.toString()}
                onClick={this._select.bind(this, item)}
            >
                <i className={`${item.icon} drop-down-menu-icon`}/>
                {item.title}
                {chosen && <i className="ion-md-checkmark"/>}
            </div>
        )
    }

    render() {
        let items = _.filter(updateType, i => i.family === updateFamilyType.health)
        items = _.sortBy(items, i => i.index)

        return (
            <div>
                {items.map(this._renderItem)}
                <UpdateType {...this.props}/>
            </div>
        )
    }
}

export default connect(
    state => ({
        update: state.template.update,
        mutate: state.template.mutate,
    }),
    {
        updatePageByPath,
    }
)(PickHealth)