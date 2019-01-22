import { variableType } from '../logic/types'

export const boardType = {
    library: {
        key: 'library',
        title: 'Library',
    },
    phases: {
        key: 'phases',
        title: 'Phases',
    },
    roles: {
        key: 'roles',
        title: 'Roles',
    },
    events: {
        key: 'events',
        title: 'Events',
    },
}

export const fieldType = {
    text: {
        key: 'text',
        index: 0,
        icon: 'ion-md-list',
        title: 'Text',
    },
    number: {
        key: 'number',
        index: 1,
        icon: 'mdi mdi-numeric',
        title: 'Number',
    },
    code: {
        key: 'code',
        index: 2,
        icon: 'mdi mdi-codepen',
        title: 'Code',
    },
    logic: {
        key: 'logic',
        index: 3,
        icon: 'mdi mdi-codepen',
        title: 'Logic',
    },
    tag: {
        key: 'tag',
        index: 4,
        icon: 'ion-ios-pricetag',
        title: 'Tag',
    },
    vars: {
        key: 'vars',
        index: 5,
        icon: 'ion-md-planet',
        title: 'Vars',
    },
    property: {
        key: 'property',
        index: 6,
        icon: 'ion-md-switch',
        title: 'Property',
    },
    expertTag: {
        key: 'expertTag',
        index: 7,
        icon: 'ion-ios-pricetags',
        title: 'Expert Tag',
    },
    choices: {
        key: 'choices',
        index: 9,
        icon: 'mdi mdi-source-branch',
        title: 'Choices',
    },
    playerTag: {
        key: 'playerTag',
        index: 10,
        icon: 'ion-ios-pricetag',
        title: 'Player Tags',
        readOnly: true,
    },
}

export const initFieldRepo = {
    description0: {
        key: 'description0',
        fieldKey: 'description0',
        index: 0,
        fieldType: fieldType.text.key,
        title: 'Description',
        boardType: boardType.library.key,
    },
    description1: {
        key: 'description1',
        fieldKey: 'description1',
        index: 0,
        fieldType: fieldType.text.key,
        title: 'Description',
        boardType: boardType.roles.key,
    },
    description2: {
        key: 'description2',
        fieldKey: 'description2',
        index: 0,
        fieldType: fieldType.text.key,
        title: 'Description',
        boardType: boardType.phases.key,
    },
    code: {
        key: 'code',
        fieldKey: 'code',
        index: 0,
        fieldType: fieldType.code.key,
        title: 'Code Interpretation',
        boardType: boardType.library.key,
    },
    args: {
        key: 'args',
        fieldKey: 'args',
        index: 0,
        fieldType: fieldType.vars.key,
        title: 'Required Variables',
        boardType: boardType.library.key,
    },
    vars: {
        key: 'vars',
        fieldKey: 'vars',
        index: 0,
        fieldType: fieldType.vars.key,
        title: 'Declared Variables',
        boardType: boardType.library.key,
    },
    roleTeam: {
        key: 'roleTeam',
        fieldKey: 'roleTeam',
        index: 1,
        fieldType: fieldType.tag.key,
        title: 'Role Team',
        data: {
            town: {
                key: 'town',
                index: 0,
                title: 'Town',
            },
            mafia: {
                key: 'mafia',
                index: 1,
                title: 'Mafia',
            },
            neutral: {
                key: 'neutral',
                index: 2,
                title: 'Neutral',
            },
        },
        boardType: boardType.roles.key,
    },
    roleCharges: {
        key: 'roleCharges',
        fieldKey: 'roleCharges',
        index: 2,
        fieldType: fieldType.number.key,
        title: 'Role Charges',
        boardType: boardType.roles.key,
    },
    playerTags: {
        key: 'playerTags',
        fieldKey: 'playerTags',
        index: 3,
        fieldType: fieldType.playerTag.key,
        title: 'Player Tags',
        boardType: boardType.roles.key,
    },
    roleTargetMode: {
        key: 'roleTargetMode',
        fieldKey: 'roleTargetMode',
        index: 4,
        fieldType: fieldType.logic.key,
        title: 'Role Target Mode',
        vars: {
            lobby: {
                key: 'lobby',
                rss: true,
                variableType: variableType.object.key,
            },
            gameState: {
                key: 'gameState',
                rss: true,
                variableType: variableType.object.key,
            },
            updates: {
                key: 'updates',
                rss: true,
                variableType: variableType.object.key,
            },
            "$user": {
                key: '$user',
                variableType: variableType.uid.key,
            },
            "$target": {
                key: '$target',
                variableType: variableType.uid.key,
            },
        },
        boardType: boardType.roles.key,
    },
    roleActionMode: {
        key: 'roleActionMode',
        fieldKey: 'roleActionMode',
        index: 5,
        fieldType: fieldType.logic.key,
        title: 'Role Action Mode',
        vars: {
            lobby: {
                key: 'lobby',
                rss: true,
                variableType: variableType.object.key,
            },
            updates: {
                key: 'updates',
                rss: true,
                variableType: variableType.object.key,
            },
            user: {
                key: 'user',
                variableType: variableType.uid.key,
            },
            target: {
                key: 'target',
                variableType: variableType.uid.key,
            },
        },
        boardType: boardType.roles.key,
    },
    phaseActionMode: {
        key: 'phaseActionMode',
        fieldKey: 'phaseActionMode',
        index: 1,
        fieldType: fieldType.tag.key,
        title: 'Action Mode',
        data: {
            all: {
                key: 'all',
                index: 0,
                title: 'All',
            },
            king: {
                key: 'king',
                index: 1,
                title: 'King',
            },
            clown: {
                key: 'clown',
                index: 2,
                title: 'Clown',
            },
            none: {
                key: 'none',
                index: 3,
                title: 'None',
            },
        },
        boardType: boardType.phases.key,
    },
    phaseTriggerMode: {
        key: 'phaseTriggerMode',
        fieldKey: 'phaseTriggerMode',
        index: 4,
        fieldType: fieldType.logic.key,
        title: 'Phase Trigger',
        vars: {
            lobby: {
                key: 'lobby',
                rss: true,
                variableType: variableType.object.key,
            },
            updates: {
                key: 'updates',
                rss: true,
                variableType: variableType.object.key,
            },
            choices: {
                key: 'choices',
                rss: true,
                variableType: variableType.object.key,
            },
            gameState: {
                key: 'gameState',
                rss: true,
                variableType: variableType.object.key,
            },
        },
        boardType: boardType.phases.key,
    },
    phaseChoices: {
        key: 'phaseChoices',
        fieldKey: 'phaseChoices',
        index: 2,
        fieldType: fieldType.choices.key,
        title: 'Phase Choices',
        boardType: boardType.phases.key,
    },
}