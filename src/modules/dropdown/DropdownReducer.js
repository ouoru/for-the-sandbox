import _ from 'lodash'

const initialState = {
    dropdownKeys: [],
    dropdownParams: {},
    dropdownData: null,
}

const SHOW_DROPDOWN_BY_KEY = 'dropdown/show-dropdown-by-key'
const POP_HIGHEST_DROPDOWN = 'dropdown/pop-highest-dropdown'
const PUSH_DATA = 'dropdown/push-data'

export function showDropdownByKey(key, params) {
    return (dispatch, getState) => {
        const { dropdownKeys, dropdownParams } = getState().dropdown

        if (!key) {
            dispatch({
                type: SHOW_DROPDOWN_BY_KEY,
                payload: {
                    keys: [],
                    params: {},
                }
            })
        } else {
            let keys = Array.from(dropdownKeys)
            keys.push(key)
            dispatch({
                type: SHOW_DROPDOWN_BY_KEY,
                payload: {
                    keys: _.uniq(keys),
                    params: {
                        ...dropdownParams,
                        ...params
                    },
                }
            })
        }  
    }
}

export function popHighestDropdown() {
    return (dispatch, getState) => {
        const { dropdownKeys } = getState().dropdown

        let keys = Array.from(dropdownKeys)
        keys.pop()

        dispatch({
            type: POP_HIGHEST_DROPDOWN,
            payload: keys
        })
    }
}

export function pushData(obj) {
    return (dispatch) => {
        dispatch({
            type: PUSH_DATA,
            payload: obj
        })
    }
}

export default (state = initialState, action) => {
    switch(action.type){
        case SHOW_DROPDOWN_BY_KEY:
            return { ...state, dropdownKeys: action.payload.keys, dropdownParams: action.payload.params }
        case POP_HIGHEST_DROPDOWN:
            return { ...state, dropdownKeys: action.payload }
        case PUSH_DATA:
            return { ...state, dropdownData: action.payload }
        default:
            return state;
    }
}