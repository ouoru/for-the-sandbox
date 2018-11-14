import { boardType } from '../board/types'
import { phaseActionMode, phaseTriggerType } from './actions'

export const moldType = {
    role: 'moldType/role',
    phase: 'moldType/phase',
}

export const fieldType = {
    text: 'fieldType/text',
    number: 'fieldType/number',
    code: 'fieldType/code',
    logic: 'fieldType/logic',
    tag: 'fieldType/tag',
    expertTag: 'fieldType/expertTag',
    phaseTrigger: 'fieldType/phaseTrigger',
}

export const fieldIcon = {
    text: 'ion-md-list',
    tag: 'ion-ios-pricetag',
    code: 'ion-md-code',
    logic: 'ion-md-options',
    expertTag: 'ion-ios-pricetags',
    phaseTrigger: 'ion-md-fastforward',
}

export const initFieldMap = {
    [boardType.library]: ['description', 'code'],
    [boardType.roles]: ['description', 'roleTeam', 'roleCharges', 'roleActionMode'],
    [boardType.flow]: ['description', 'phaseActionMode', 'phaseTriggerMode'],
}

export const initFieldRepo = {
    description: {
        fieldKey: 'description',
        fieldType: fieldType.text,
        fieldTitle: 'Description',
    },
    code: {
        fieldKey: 'code',
        fieldType: fieldType.code,
        fieldTitle: 'Code Interpretation',
    },
    roleTeam: {
        fieldKey: 'roleTeam',
        fieldType: fieldType.tag,
        fieldTitle: 'Role Team',
        data: [
            {
                key: 'roleTeam/mafia',
                title: 'Mafia',
            },
            {
                key: 'roleTeam/town',
                title: 'Town',
            },
            {
                key: 'roleTeam/neutral',
                title: 'Neutral',
            }
        ]
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
        data: [
            {
                key: phaseActionMode.all,
                title: 'All',
            },
            {
                key: phaseActionMode.king,
                title: 'King',
            },
            {
                key: phaseActionMode.clown,
                title: 'Clown',
            },
            {
                key: phaseActionMode.none,
                title: 'None',
            },
        ]
    },
    phaseTriggerMode: {
        fieldKey: 'phaseTriggerMode',
        fieldType: fieldType.phaseTrigger,
        fieldTitle: 'Phase Trigger',
        data: [
            {
                key: phaseTriggerType.allReady,
                title: 'All Ready',
            },
            {
                key: phaseTriggerType.majority,
                title: 'Majority',
            }
        ]
    },
}