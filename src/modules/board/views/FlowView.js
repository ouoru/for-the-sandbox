import React from 'react'
import { boardType } from '../types'
import StoryBoard from '../StoryBoard'

class FlowView extends React.Component{
    render() {
        return (
            <StoryBoard boardType={boardType.phases}/>
        )
    }
}

export default FlowView