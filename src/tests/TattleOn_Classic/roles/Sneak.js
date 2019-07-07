import { fillArrWithIncrInt } from "../../telpers";
import resolveTest from '../../resolveTest'
import { GLOBAL_FOOL, THUG, GLOBAL_TEAM_EVIL } from "../Constants";
import { generateString } from "../../generate";

export default (({ss, results}) => {
    const PAGE = THUG
    if (!ss.pageRepo[PAGE]) return results.errors.push('test failed, PAGE not found.');

    const info = ss.pageRepo[PAGE]

    resolveTest({
        key: PAGE,
        testId: 'TattleOn.Classic.Sneak: role_secret',
        qty: 5,
        playerParams: [
            {x: fillArrWithIncrInt(3), p: 'roleTeam', v: GLOBAL_TEAM_EVIL}
        ],
        choice: {
            user: 'a'
        },
        logic: info.roleSecrets,
        expectedReturn: `The other members of the gang of evil are as follows , ${generateString(2, 1)} .`,
        results
    })
})