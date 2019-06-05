import React from 'react'
import _ from 'lodash'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { boardType } from '../../common/types';

import { navigate } from '../../app/NavReducer'

import AccountDetails from '../components/AccountDetails';
import ProjectDetails from '../components/ProjectDetails';
import SideBarTitle from './SideBarTitle'
import { Icon, Text, Row, Body } from '../../components/Common';

export default function SideBarView({ location }) {
    const dispatch = useDispatch();
    const path = useSelector(state => state.nav.path);
    const activeProject = useSelector(state => state.firebase.activeProject);

    //react-router
    const { pathname } = location

    let renderRedirect = () => {
        if (pathname !== path) {
            return (
                <Redirect to={path}/>
            )
        }
    }
    
    let handleClick = (item) => {
        if (!activeProject) {
            return;
        }

        dispatch(navigate("/" + activeProject + "/" + item.key))
        return;
    }

    let renderItem = (item) => {
        let paths = pathname.split('/')
        let selected = item.key === paths[2]

        return (
            <Row
                key={item.key}
                y="c"
                sizes={['xxs', 'm']}
                onClick={() => handleClick(item)}
            >
                <Icon size="l" icon={item.icon} color={selected ? 'whitish' : 'grey'}></Icon>
                <Text before="xxs" color={selected ? 'whitish' : 'grey'}>{item.title}</Text>
            </Row>
        )
    }

    const items = _.sortBy(boardType, i => i.index)

    return (
        <Body bg="charcoal">
            <AccountDetails/>
            <SideBarTitle text="Project"/>
            <ProjectDetails activeProject={activeProject}/>
            <SideBarTitle text="Develop"/>
            {items.map(renderItem)}
            {renderRedirect()}
        </Body>
    )
}