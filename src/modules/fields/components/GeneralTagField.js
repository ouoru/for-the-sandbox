import React from 'react'
import _ from 'lodash'

import { dropdownType } from '../../dropdown/types';

import {
    Tag,
    DropClick,
} from '../../components/Common';

export default function GeneralTagField(props) {
    const { path, fieldKey, value, data } = props

    let handleClick = (item, active) => props.updatePage(path, {[item.key]: !active})

    const renderItem = (item) => {
        const active = value && value[item.key]
                
        return (
            <Tag
                key={item.key}
                theme={active ? 'purple' : 'black'}
                onClick={() => handleClick(item, active)}
            >
                {item.title}
            </Tag>
        )
    }
    
    const tags = _.sortBy(data, i => i.index)
    return (
        <div className="row">
            {tags.map(renderItem)}
            <DropClick
                dropdown={dropdownType.createGeneralTag}
                params={{
                    path: [fieldKey],
                    attach: data,
                    placeholder: "Tag name ...",
                }}
            >
                <Tag theme="darkgrey">new tag</Tag>
            </DropClick>
        </div>
    )
}