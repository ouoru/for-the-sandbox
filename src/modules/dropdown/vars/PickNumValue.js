import React, { useState } from 'react'

import {
    parseType,
    variableType,
} from '../../common/types'
import {
    LOGIC_ITEM_VAR,
} from '../../common/defaults';

import { useAutofocus } from '../../hooks/Hooks'
 import generatePushID from '../../common/generatePushID';

import {
    DropSubmit,
    DropTitle,
} from '../components/Common'
import { Row } from '../../components/Common'

/*
LOCATION
    NumberView.ActiveOp.ValueDrop
PURPOSE
    shown when the user clicks an empty ValueDrop
    Content:
        Input for <number>
*/
export default function PickNumValue({
    mathKey,
    item,
    side,
    slate,
    update,
    showDropdown,
}){
    const focusRef = useAutofocus()

    const [value, setValue] = useState(mathKey ? slate : "")//TODO
    const handleChange = e => setValue(e.target.value)

    //changing value @ byId.[mathKey].value
    const updateSlate = () => {
        update({
            ...LOGIC_ITEM_VAR,
            display: value,
            parseBy: parseType.variable,
            value,
            variableTypes: [variableType.number.key],
        })
        showDropdown();
    }

    //setting value to an empty ValueDrop @ byId
    const setSlate = () => {
        const newKey = generatePushID('math')
        
        update({
            [item.key]: {
                ...item,
                value: {
                    ...item.value,
                    [side]: newKey,
                },
            },
            [newKey]: {
                ...LOGIC_ITEM_VAR,
                key: newKey,
                display: value,
                value,
                nativeValue: value,
                parseBy: parseType.variable,
                variableTypes: [variableType.number.key],
            },
        })
        showDropdown();
    }

    const onSubmit = () => {
        if (!mathKey) {
            setSlate();
        } else {
            updateSlate();
        }
        showDropdown();
    }

    const onKeyDown = e => {
        switch(e.nativeEvent.key) {
            case 'Enter':
                onSubmit()
                break
            default:
        }
    }

    return (
        <>
            <DropTitle>set to number</DropTitle>
            <Row sizes={['z', 'xs']}>
                <input
                    ref={focusRef}
                    className="tag-input"
                    value={value}
                    onChange={handleChange}
                    onKeyDown={onKeyDown}
                    placeholder="enter a value ..."
                    type='number'
                />
                <DropSubmit onClick={onSubmit}/>
            </Row>
        </>
    )
}