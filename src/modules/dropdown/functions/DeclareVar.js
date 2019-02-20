import React, { useState } from 'react'

import * as helpers from '../../common/helpers'

import DropTitle from '../components/DropTitle'
import DropItem from '../components/DropItem'

export default function DeclareVar(props) {
    let [value, setValue] = useState('')
    let handleChange = e => setValue(e.target.value)

    let handleSave = () => {
        const { currentValue } = props

        const isAlpha = helpers.checkAlpha(value)
        
        if (!isAlpha) {
            return
        }

        const newKey = helpers.genUID('var', currentValue, '-xx')
        props.updatePage({
            [newKey]: {
                key: newKey,
                value,
            }
        })
        props.showDropdown()
    }

    let handleKeyPress = e => {
        switch(e.nativeEvent.key) {
            case 'Enter':
                handleSave()
                break
            default:
        }
    }

    return (
        <div>
            <DropTitle>variable declaration</DropTitle>
            <input
                className="tag-input"
                value={value}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder="Variable name ..."
                type='text'
                autoFocus
                style={{
                    marginBottom: 6,
                }}
            />
            <DropTitle>options</DropTitle>
            <DropItem
                leftIcon="mdi mdi-checkbox-marked-outline"
                onClick={handleSave}
            >
                save variable
            </DropItem>
        </div>
    )
}