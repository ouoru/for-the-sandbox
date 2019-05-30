import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import generatePushID from '../../common/generatePushID'
import { showDropdown } from '../DropdownReducer'

export default function DropParent({
    chosen,
    dropdown,
    icon,
    params,
    style,
    text,
}){
    const dispatch = useDispatch();
    const dropdownKeys = useSelector(state => state.dropdown.dropdownKeys);
    
    //generate a unique serial number
    const [serialNo] = useState(generatePushID())

    //check if current DropParent serialNo is located in top dropdown serialList
    const indexedAt = ((dropdownKeys[dropdownKeys.length - 1]||[]).serialList||[]).indexOf(serialNo)

    //if current DropParent is in top serialList, highlight
    const isOrigin = indexedAt !== -1

    //push serial number inside list
    const onMouseOver = e => {
        //if current DropParent is the origin, don't re-render the Dropdown
        if (!dropdown || isOrigin) return;
        dispatch(showDropdown(dropdown, e, {
            ...params,
            serialParent: serialNo,
        }))
    }

    const handleClick = (e) => e.stopPropagation();
    
    return (
        <div
            className="drop-down-menu-option"
            chosen={chosen ? chosen.toString() : undefined}
            origin={isOrigin.toString()}
            onClick={handleClick}
            onMouseOver={onMouseOver}
            style={style}
        >
            {icon && <i className={`drop-down-menu-icon ${icon}`} style={{marginRight: 5}}></i>}
            {text}
            <i className="mdi mdi-play"/>
        </div>
    )
}