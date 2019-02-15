import React from 'react'
import { dropdownType } from '../../dropdown/types'
import { logicType, operatorType } from '../types'

class LogicType extends React.Component{
    render() {
        const { indexKey, logicInfo, fieldKey, pageKey } = this.props
        const {
            operatorType: selectedOperator,
            logicType: selectedLogic,
        } = logicInfo
        
        const item = selectedOperator ? operatorType[selectedOperator] : selectedLogic ? logicType[selectedLogic] : {}

        return (
            <i 
                className={`${item.icon || 'ion-md-create'} logic-label app-onclick`}
                menu-type={dropdownType.pickLogic}
                app-onclick-props={JSON.stringify({
                    pageKey,
                    fieldKey,
                    indexKey,
                    attach: logicInfo,
                })}
                style={{
                    backgroundColor: item.color || '#767676',
                    color: '#fff',
                }}
            />
        )
    }
}

export default LogicType