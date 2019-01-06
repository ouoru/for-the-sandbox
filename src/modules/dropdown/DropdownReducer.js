const initialState = {
    dropdownKeys: [],
}

const UPDATE_KEYS = 'dropdown/update-keys'

export function showDropdownByKey(key, e, params={}) {
    return (dispatch, getState) => {
        const { dropdownKeys } = getState().dropdown

        if (!key) {
            dispatch({
                type: UPDATE_KEYS,
                payload: [],
            })
        } else {
            let keysClone = Array.from(dropdownKeys)

            for (var i=0; i<keysClone.length; i++) {
                if (keysClone[i].key === key) {
                    keysClone = keysClone.slice(0, i)
                    break
                }
            }

            if (keysClone.length) {
                let prev = keysClone[keysClone.length - 1]
                keysClone.push({
                    ...prev,
                    key,
                    ...params,
                    pageX: prev.pageX + e.target.offsetWidth,
                    pageY: e.pageY - (e.pageY - prev.pageY - e.target.offsetTop) % e.target.offsetHeight - 8,
                })
            } else {
                keysClone.push({
                    key,
                    ...params,
                    pageX: e.pageX - e.offsetX - 8,
                    pageY: e.pageY - e.offsetY + e.target.offsetHeight,
                })
            }

            dispatch({
                type: UPDATE_KEYS,
                payload: keysClone,
            })
        }  
    }
}

export function popDropdown() {
    return (dispatch, getState) => {
        const { dropdownKeys } = getState().dropdown

        let keys = Array.from(dropdownKeys)
        keys.pop()

        dispatch({
            type: UPDATE_KEYS,
            payload: keys
        })
    }
}

export function popDropdownByKey(key) {
    return (dispatch, getState) => {
        const { dropdownKeys } = getState().dropdown

        if (key) {
            let keysClone = Array.from(dropdownKeys)

            for (var i=0; i<keysClone.length; i++) {
                if (keysClone[i].key === key) {
                    keysClone = keysClone.slice(0, i)
                    break
                }
            }

            dispatch({
                type: UPDATE_KEYS,
                payload: keysClone,
            })
        }  
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