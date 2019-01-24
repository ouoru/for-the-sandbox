import React from 'react'

import { logicType } from '../types'
import { dropdownType } from '../../dropdown/types'
import { comparisonType } from '../types'

import LogicPanel from './LogicPanel'

class LogicPanels extends React.Component{
    //TODO needs major refactoring
    render() {
        const { logicInfo, vars } = this.props
        const { data } = logicInfo

        const hasPage = true

        switch(logicInfo.logicType) {
            case logicType.operator.key:
                return (
                    <div>
                        <LogicPanel
                            {...this.props}
                            subfieldKey="var1"
                            placeholder="variable"
                            dropdown={dropdownType.pickVar}
                        />
                        <LogicPanel
                            {...this.props}
                            subfieldKey="comparison"
                            placeholder="operator"
                            dropdown={dropdownType.pickComparison}
                        />
                        <LogicPanel
                            {...this.props}
                            subfieldKey="var2"
                            placeholder="variable"
                            dropdown={dropdownType.pickVar}
                        />
                    </div>
                )
            case logicType.update.key:
                return (
                    <div
                        className="logic-button"
                        style={{
                            color: '#868686',
                            borderRadius: '0px 4px 4px 0px',
                        }}
                    >
                        <div className="text-ellipsis">
                            N/A
                        </div>
                    </div>
                )
            case logicType.function.key:
                return (
                    <LogicPanel
                        {...this.props}
                        subfieldKey="var1"
                        placeholder="variable"
                        dropdown={dropdownType.pickLibrary}
                    />
                )
            case logicType.return.key:
                return (
                    <div
                        className="logic-button app-onclick"
                        menu-type={dropdownType.returnTypes}
                        app-onclick-props={JSON.stringify({
                            subfieldKey: 'return',
                            currentValue: data.key,
                            attach: data,
                            attachVar: vars,
                        })}
                        style={{
                            color: '#fff',
                            borderRadius: '0px 4px 4px 0px',
                        }}
                    >
                        {data.key}
                    </div>
                )
            default:
                return null
        }
    }
}

export default LogicPanels