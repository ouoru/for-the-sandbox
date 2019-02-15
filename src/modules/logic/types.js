import { dropdownType } from "../dropdown/types";

export const logicType = {
    operator: {
        key: 'operator',
        index: 0,
        title: 'operator',
        icon: 'ion-md-code-working',
        color: 'Mediumslateblue',
        dropdown: dropdownType.pickOperator,
    },
    function: {
        key: 'function',
        index: 1,
        title: 'function',
        icon: 'ion-md-pulse',
        color: '#3864ab',
    },
    update: {
        key: 'update',
        index: 2,
        title: 'update',
        icon: 'mdi mdi-code-braces',
        color: '#a566b0',
    },
    return: {
        key: 'return',
        index: 3,
        title: 'return',
        icon: 'ion-ios-send',
        color: '#1e9939',
    },
}

//helps us process the LogicPanel string
export const panelType = {
    page: {
        key: 'page',
    },
    var: {
        key: 'var',
    },
}

export const operatorType = {
    if: {
        key: 'if',
        index: 0,
        title: 'if',
        icon: 'mdi mdi-ray-start-arrow',
        color: '#af8c40',
    },
    else: {
        key: 'else',
        index: 1,
        title: 'else',
        icon: 'mdi mdi-redo-variant',
        color: '#db4757',
    },
    elseif: {
        key: 'elseif',
        index: 2,
        title: 'else if',
        icon: 'mdi mdi-swap-horizontal-variant',
        color: '#2e6db4',
    },
    forin: {
        key: 'forin',
        index: 3,
        title: 'for ... in',
        icon: 'mdi mdi-sync',
        color: '#2e6db4',
    }
}

export const comparisonType = {
    equal: {
        key: 'equal',
        code: '===',
        title: 'equal',
        icon: 'mdi mdi-equal',
    },
    notEqual: {
        key: 'notEqual',
        code: '!==',
        title: 'not equal',
        icon: 'mdi mdi-not-equal',
    },
    greaterThan: {
        key: 'greaterThan',
        code: '>',
        title: 'greater than',
        icon: 'mdi mdi-greater-than',
    },
    greaterThanOrEqualTo: {
        key: 'greaterThanOrEqualTo',
        code: '>=',
        title: 'greater than / equal',
        icon: 'mdi mdi-greater-than-or-equal',
    },
    lessThan: {
        key: 'lessThan',
        code: '<',
        title: 'less than',
        icon: 'mdi mdi-less-than',
    },
    lessThanOrEqualTo: {
        key: 'lessThanOrEqualTo',
        code: '<=',
        title: 'less than / equal',
        icon: 'mdi mdi-less-than-or-equal',
    },
}

export const updateFamilyType = {
    number: 'family/number',
    boolean: 'family/boolean',
    health: 'family/health',
}

/*used to get value for UpdateButton
    this is separate from variableType because in an UpdateButton view
    there are multiple possible strings to be shown, such as the difference
    between "increment" and "increment by 2"
*/
export const updateViewType = {
    number: 'updateViewType/number',
    variable: 'updateViewType/variable',
    staticVal: 'updateViewType/staticVal',
    dynamicVal: 'updateViewType/dynamicVal',
    page: 'updateViewType/page',
    uid: 'updateViewType/uid',
    health: 'updateViewType/health',
    trigger: 'updateViewType/trigger',
    events: 'updateViewType/events',
    timer: 'updateViewType/timer',
    boolean: 'updateViewType/boolean',
}

//possible static and dynamic update types
export const updateType = {
    null: {
        key: 'null',
        index: 0,
        family: updateFamilyType.number,
        title: 'null',
        label: 'null',
        icon: 'mdi mdi-swap-horizontal-bold',
        updateViewType: updateViewType.staticVal,
        code: () => 'null',
    },
    setTo: {
        key: 'setTo',
        index: 1,
        family: updateFamilyType.number,
        title: 'set to value',
        label: 'set to value',
        icon: 'mdi mdi-numeric',
        updateViewType: updateViewType.dynamicVal,
        code: (data, field) => `${data[field].dynamic}`,
    },
    incr: {
        key: 'incr',
        index: 2,
        family: updateFamilyType.number,
        title: 'increment',
        icon: 'mdi mdi-numeric-1-box',
        updateViewType: updateViewType.staticVal,
        code: (data, field) => `${field} + 1`,
    },
    incrBy: {
        key: 'incrBy',
        index: 3,
        family: updateFamilyType.number,
        title: 'increment by',
        icon: 'mdi mdi-alpha-n-box',
        updateViewType: updateViewType.dynamicVal,
        code: (data, field) => `${field} + ${data[field].dynamic}`,
    },
    decr: {
        key: 'decr',
        index: 4,
        family: updateFamilyType.number,
        title: 'decrement',
        icon: 'ion-md-arrow-round-down',
        updateViewType: updateViewType.staticVal,
        code: (data, field) => `${field} - 1`,
    },
    decrBy: {
        key: 'decrBy',
        index: 5,
        family: updateFamilyType.number,
        title: 'decrement by',
        icon: 'ion-md-download',
        updateViewType: updateViewType.dynamicVal,
        code: (data, field) => `${field} - ${data[field].dynamic}`,
    },
    true: {
        key: 'true',
        index: 6,
        family: updateFamilyType.boolean,
        title: 'true',
        icon: 'mdi mdi-code-tags-check',
        updateViewType: updateViewType.staticVal,
        code: () => 'true',
    },
    false: {
        key: 'false',
        index: 7,
        family: updateFamilyType.boolean,
        title: 'false',
        icon: 'mdi mdi-close-box-outline',
        updateViewType: updateViewType.staticVal,
        code: () => 'false',
    },
    attack1: {
        key: 'attack1',
        index: 0,
        family: updateFamilyType.health,
        title: 'Basic Attack',
        label: ['mdi mdi-sword'],
        icon: 'mdi mdi-sword',
        updateViewType: updateViewType.health,
        code: () => '-1',
    },
    attack2: {
        key: 'attack2',
        index: 1,
        family: updateFamilyType.health,
        title: 'Strong Attack',
        label: ['mdi mdi-sword', 'mdi mdi-sword'],
        icon: 'mdi mdi-sword',
        updateViewType: updateViewType.health,
        code: () => '-2',
    },
    attack3: {
        key: 'attack3',
        index: 2,
        family: updateFamilyType.health,
        title: 'Superior Attack',
        label: ['mdi mdi-sword', 'mdi mdi-sword', 'mdi mdi-sword'],
        icon: 'mdi mdi-sword',
        updateViewType: updateViewType.health,
        code: () => '-100',
    },
    defend1: {
        key: 'defend1',
        index: 3,
        family: updateFamilyType.health,
        title: 'Basic Defense',
        label: ['mdi mdi-shield-half-full'],
        icon: 'mdi mdi-shield-half-full',
        updateViewType: updateViewType.health,
        code: () => '1',
    },
    defend2: {
        key: 'defend2',
        index: 4,
        family: updateFamilyType.health,
        title: 'Strong Defense',
        label: ['mdi mdi-shield-half-full', 'mdi mdi-shield-half-full'],
        icon: 'mdi mdi-shield',
        updateViewType: updateViewType.health,
        code: () => '2',
    },
    defend3: {
        key: 'defend3',
        index: 5,
        family: updateFamilyType.health,
        title: 'Superior Defense',
        label: ['mdi mdi-shield-half-full', 'mdi mdi-shield-half-full', 'mdi mdi-shield-half-full'],
        icon: 'mdi mdi-shield-plus',
        updateViewType: updateViewType.health,
        code: () => '100',
    },
}

export const defaultLogic = {
    START: {
        logicType: '',
    }
}

export const variableType = {
    any: {
        key: 'any',
        title: 'Any',
        icon: 'mdi mdi-variable',
    },
    number: {
        key: 'number',
        title: 'Number',
        icon: 'mdi mdi-numeric-1-box',
    },
    string: {
        key: 'string',
        title: 'String',
        icon: 'mdi mdi-code-string',
    },
    boolean: {
        key: 'boolean',
        title: 'Boolean',
        icon: 'mdi mdi-nintendo-switch',
    },
    uid: {
        key: 'uid',
        title: 'Unique ID',
        icon: 'mdi mdi-account',
    },
    object: {
        key: 'object',
        title: 'Object',
        icon: 'mdi mdi-code-braces',
    },
    uidObject: {
        key: 'uidObject',
        title: 'UID Object',
        icon: 'mdi mdi-code-braces',
    },
    rss: {
        key: 'rss',
        title: 'Room Snapshot',
        icon: 'mdi mdi-film',
    },
}

export const returnType = {
    true: {
        key: 'true',
        index: 0,
        title: 'true',
        icon: 'mdi mdi-code-tags-check',
        code: 'true',
    },
    false: {
        key: 'false',
        index: 1,
        title: 'false',
        icon: 'mdi mdi-close-box-outline',
        code: 'false',
    },
    push: {
        key: 'push',
        index: 2,
        title: 'push updates',
        icon: 'mdi mdi-firebase',
        code: 'database.update(updates)',
    }
}

export const triggerNewVars = {
    "$visitor": {
        key: '$visitor',
        variableTypes: [
            variableType.uid.key,
            variableType.string.key,
        ],
    },
}