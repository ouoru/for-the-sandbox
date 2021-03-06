const CIPHER = {
    A26: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    A26wSPACE: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ',
    A26N10wDESC: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890 !?#%',
}

function isArray(obj){
    return !!obj && obj.constructor === Array;
}

/*updates a property deep inside an object and returns the entire object
    WARNING: cannot delete properties (THIS IS A FEATURE)
*/
export const WILD_PATH = "*"
export function updateByPath(path=[], update, repo, pathIndex=0) {
    const typeofUpdate = typeof update
    const endOfPath = path.length <= pathIndex

    const pathKey = path[pathIndex];

    //handling String, Number, and Array updates
    if (endOfPath) {
        if (typeofUpdate === 'string' || typeofUpdate === 'number' || typeofUpdate === 'boolean') {
            return update
        } else if (isArray(update)) {
            return update
        }
    }

    return {
        ...repo||{},
        ...(endOfPath ?
            update
            :{
                [pathKey]: updateByPath(
                    path,
                    update,
                    repo[pathKey]||{},
                    pathIndex + 1,
                ),
            }
        ),
    }
}

//returns the state of PageReducer from array of paths
export function stateByPath(path, state, index=0) {
    if (!state[path[index]]) return {}
    if (path.length - 1 === index) return state[path[index]]
    return stateByPath(path, state[path[index]], index + 1)
}

export function checkAlpha(string, cipher='A26') {
    for (var i=0; i<string.length; i++) {
        if (CIPHER[cipher].indexOf(string.charAt(i)) === -1) {
            return false
        }
    }
    return true
}