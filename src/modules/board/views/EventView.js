import React from 'react'
import { boardType } from '../types'
import StoryBoard from '../StoryBoard'

class EventView extends React.Component{
    render() {
        return (
            <StoryBoard boardType={boardType.events}/>
        )
    }
}

export default EventView