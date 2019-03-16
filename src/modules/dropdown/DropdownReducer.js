import _ from 'lodash'
import { DROP_TITLE_HEIGHT, DROPDOWN_Y_MARGIN } from './types'

const initialState = {
    dropdownKeys: [],
}

const UPDATE_KEYS = 'dropdown/update-keys'

export function showDropdown(key, e, params={}, index=0, place="down") {
    return (dispatch, getState) => {
        const { dropdownKeys } = getState().dropdown
        const { modalKeys } = getState().modal

        if (!key) {
            if (!dropdownKeys.length) return

            dispatch({
                type: UPDATE_KEYS,
                payload: [],
            })
        } else {
            let keysClone = _.cloneDeep(dropdownKeys).slice(0, index + 1)

            const prev = keysClone[keysClone.length - 1]
            if (keysClone.length) {
                keysClone.push({
                    ...modalKeys[modalKeys.length - 1],
                    ...prev,
                    ...params,
                    key,
                    position: {
                        place,
                        pageX: e.pageX - e.nativeEvent.offsetX + e.target.offsetWidth,
                        pageY: e.pageY - e.nativeEvent.offsetY - DROPDOWN_Y_MARGIN - DROP_TITLE_HEIGHT,
                        sourceHeight: e.target.offsetHeight,
                        sourceWidth: e.target.offsetWidth, 
                    },
                })
            } else {
                keysClone.push({
                    ...modalKeys[modalKeys.length - 1],
                    ...prev,
                    ...params,
                    key,
                    position: {
                        place,
                        pageX: e.pageX - e.offsetX - 8,
                        pageY: e.pageY - e.offsetY + e.target.offsetHeight,
                        sourceHeight: e.target.offsetHeight,
                        sourceWidth: e.target.offsetWidth, 
                    },
                })
            }

            dispatch({
                type: UPDATE_KEYS,
                payload: keysClone,
            })
        }  
    }
}

export function popDropdownTo(index) {
    return (dispatch, getState) => {
        const { dropdownKeys } = getState().dropdown

        const keysClone = _.cloneDeep(dropdownKeys).slice(0, index + 1)

        dispatch({
            type: UPDATE_KEYS,
            payload: keysClone,
        })
    }
}

export default (state = initialState, action) => {
    switch(action.type){
        case UPDATE_KEYS:
            return { ...state, dropdownKeys: action.payload }
        default:
            return state;
    }
}