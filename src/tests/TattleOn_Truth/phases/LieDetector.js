import resolveTest from '../../resolveTest'
import { LIE_DETECTOR, GLOBAL_INVESTIGATOR, MORNING, GLOBAL_TEAM_EVIL, GLOBAL_IMMUNE_TO_INVEST, GLOBAL_TEAM_TOWN } from "../Constants";

export default (({ss, results}) => {
    const PAGE = LIE_DETECTOR
    if (!ss.pageRepo[PAGE]) return results.errors.push('test failed, PAGE not found.');

    const info = ss.pageRepo[PAGE]

    //description tests

    resolveTest({
        key: PAGE,
        testId: 'TattleOn.Truth.LieDetector: description',
        qty: 5,
        playerParams: [
            {x: [0], p: GLOBAL_INVESTIGATOR, v: true},
        ],
        logic: info.description,
        expectedReturn: `Wait for player-a to inspect a player.`,
        results
    })

    //listener tests

    resolveTest({
        key: PAGE,
        testId: 'TattleOn.Truth.LieDetector: player_is_evil',
        qty: 5,
        playerParams: [
            {x: [0], p: GLOBAL_INVESTIGATOR, v: true},
            {x: [1], p: 'roleTeam', v: GLOBAL_TEAM_EVIL}
        ],
        choiceParams: [
            {x: [0], p: 'user'},
            {x: [0], p: 'target', v: 'b'}
        ],
        logic: info.phaseListener,
        expectedNext: {
            update: {
                'gameState/phase': MORNING,
                'events/0': {
                    showTo: {
                        'a': "",
                    },
                    hideFrom: {},
                    message: `Your target is an evil person.`
                },
                'events/1': {
                    showTo: {},
                    hideFrom: {},
                    message: `player-a inspected player-b.`
                },
                [`players/a/${GLOBAL_INVESTIGATOR}`]: false,
                [`players/b/${GLOBAL_INVESTIGATOR}`]: true,
                [`players/b/${GLOBAL_IMMUNE_TO_INVEST}`]: true,
            },
            time: 2
        },
        results
    })

    resolveTest({
        key: PAGE,
        testId: 'TattleOn.Truth.LieDetector: player_is_good',
        qty: 5,
        playerParams: [
            {x: [0], p: GLOBAL_INVESTIGATOR, v: true},
            {x: [1], p: 'roleTeam', v: GLOBAL_TEAM_TOWN}
        ],
        choiceParams: [
            {x: [0], p: 'user'},
            {x: [0], p: 'target', v: 'b'}
        ],
        logic: info.phaseListener,
        expectedNext: {
            update: {
                'gameState/phase': MORNING,
                'events/0': {
                    showTo: {
                        'a': "",
                    },
                    hideFrom: {},
                    message: `Your target is a good person.`
                },
                'events/1': {
                    showTo: {},
                    hideFrom: {},
                    message: `player-a inspected player-b.`
                },
                [`players/a/${GLOBAL_INVESTIGATOR}`]: false,
                [`players/b/${GLOBAL_INVESTIGATOR}`]: true,
                [`players/b/${GLOBAL_IMMUNE_TO_INVEST}`]: true,
            },
            time: 2
        },
        results
    })
})