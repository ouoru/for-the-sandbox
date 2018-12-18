import { boardType } from '../board/types'
import { variableType } from '../logic/types'

export const fieldType = {
    text: 'fieldType/text',
    number: 'fieldType/number',
    code: 'fieldType/code',
    logic: 'fieldType/logic',
    tag: 'fieldType/tag',
    vars: 'fieldType/vars',
    property: 'fieldType/property',
    expertTag: 'fieldType/expertTag',
}

export const fieldTypeToIcon = {
    [fieldType.text]: 'ion-md-list',
    [fieldType.number]: 'ion-md-attach',
    [fieldType.code]: 'ion-md-code',
    [fieldType.logic]: 'ion-md-options',
    [fieldType.tag]: 'ion-ios-pricetag',
    [fieldType.vars]: 'ion-md-planet',
    [fieldType.property]: 'ion-md-switch',
    [fieldType.expertTag]: 'ion-ios-pricetags',
}

export const fieldTypeToTitle = {
    [fieldType.text]: 'Text',
    [fieldType.number]: 'Number',
    [fieldType.code]: 'Code',
    [fieldType.logic]: 'Logic',
    [fieldType.tag]: 'Tag',
    [fieldType.vars]: 'Variables',
    [fieldType.property]: 'Properties',
    [fieldType.expertTag]: 'Expert Tag',
}

export const fieldIcon = {
    text: 'ion-md-list',
    tag: 'ion-ios-pricetag',
    code: 'ion-md-code',
    logic: 'ion-md-options',
    expertTag: 'ion-ios-pricetags',
}

export const initFieldMap = {
    [boardType.library]: ['description0', 'args', 'vars', 'code'],
    [boardType.roles]: ['description1', 'roleTeam', 'roleCharges', 'roleActionMode'],
    [boardType.flow]: ['description2', 'phaseActionMode', 'phaseTriggerMode'],
}

export const initFieldRepo = {
    description0: {
        fieldKey: 'description',
        fieldType: fieldType.text,
        fieldTitle: 'Description',
    },
    description1: {
        fieldKey: 'description',
        fieldType: fieldType.text,
        fieldTitle: 'Description',
    },
    description2: {
        fieldKey: 'description',
        fieldType: fieldType.text,
        fieldTitle: 'Description',
    },
    code: {
        fieldKey: 'code',
        fieldType: fieldType.code,
        fieldTitle: 'Code Interpretation',
    },
    args: {
        fieldKey: 'args',
        fieldType: fieldType.vars,
        fieldTitle: 'Required Variables',
    },
    vars: {
        fieldKey: 'vars',
        fieldType: fieldType.vars,
        fieldTitle: 'Declared Variables',
    },
    roleTeam: {
        fieldKey: 'roleTeam',
        fieldType: fieldType.tag,
        fieldTitle: 'Role Team',
    },
    roleCharges: {
        fieldKey: 'roleCharges',
        fieldType: fieldType.number,
        fieldTitle: 'Role Charges',
    },
    roleActionMode: {
        fieldKey: 'roleActionMode',
        fieldType: fieldType.logic,
        fieldTitle: 'Role Action Mode',
    },
    phaseActionMode: {
        fieldKey: 'phaseActionMode',
        fieldType: fieldType.tag,
        fieldTitle: 'Action Mode',
        data: ['phaseActionMode/all', 'phaseActionMode/king', 'phaseActionMode/clown', 'phaseActionMode/none']
    },
    phaseTriggerMode: {
        fieldKey: 'phaseTriggerMode',
        fieldType: fieldType.logic,
        fieldTitle: 'Phase Trigger',
        vars: {
            lobby: {
                key: 'lobby',
                variableType: variableType.object.key,
            },
            choices: {
                key: 'choices',
                variableType: variableType.object.key,
            },
            gameState: {
                key: 'gameState',
                variableType: variableType.object.key,
            },
        }
    },
}

export const initTagRepo = {
    'phaseActionMode/all': {
        tagKey: 'phaseActionMode/all',
        title: 'All',
    },
    'phaseActionMode/king': {
        tagKey: 'phaseActionMode/king',
        title: 'King',
    },
    'phaseActionMode/clown': {
        tagKey: 'phaseActionMode/clown',
        title: 'Clown',
    },
    'phaseActionMode/none': {
        tagKey: 'phaseActionMode/none',
        title: 'None',
    },
    'phaseTriggerType/none': {
        tagkey: 'phaseTriggerType/none',
        title: 'None',
    },
    'phaseTriggerType/allReady': {
        tagkey: 'phaseTriggerType/allReady',
        title: 'None',
    },
    'phaseTriggerType/majority': {
        tagkey: 'phaseTriggerType/majority',
        title: 'None',
    },
}