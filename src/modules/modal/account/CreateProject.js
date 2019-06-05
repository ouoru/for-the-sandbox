import React, { useState, useEffect } from 'react'
import './CreateProject.css'
import { connect } from 'react-redux'
import firebase from 'firebase/app'

import {
    DEFAULT_MEMBER_INFO,
    MEMBER_TYPE,
} from './UserConstants';
import {
    defaultFieldMap,
    defaultFieldRepo,
} from '../../fields/defaults';

import { switchToProject } from '../../firebase/FirebaseReducer'
import { checkAlpha } from '../../common/helpers';
import generatePushID from '../../common/generatePushID';

import FormInput from '../../components/FormInput'
import ModalOptions from '../components/ModalOptions'

function CreateProject(props) {
    const { uid } = props

    let [errors, setErrors] = useState({})
    
    //initializing project
    let [gameKey, setGameKey] = useState('')
    let [description, setDescription] = useState('')
    let [members] = useState({
        [uid]: {
            ...DEFAULT_MEMBER_INFO,
            type: MEMBER_TYPE.OWNER,
            acceptedInvite: true,
        },
    })

    //get existing project keys
    let [setProjects] = useState({})
    const projectsRef = firebase.database().ref(`projects`)
    useEffect(() => {
        projectsRef.once('value', snap => setProjects(snap.val()))
    }, [])
    
    let handleSave = () => {
        //validate user inputs
        if (!gameKey || !description) {
            setErrors({
                gameKey: !!gameKey ? "" : "*This is a required field.",
                description: !!description ? "" : "*This is a required field",
            })
            return;
        }
        if (!checkAlpha(gameKey, 'A26wSPACE')) {
            setErrors({gameKey: '*Only Alphabetic characters are allowed.'})
            return;
        }
        if (!description || !checkAlpha(description, 'A26N10wDESC')) {
            setErrors({description: '*Only Alphabetic characters are allowed.'})
            return;
        }
        
        //initialize a new project
        const projectKey = generatePushID(gameKey)

        let multiUpdate = {}
        
        multiUpdate[`userProjects/${uid}/${projectKey}`] = true
        multiUpdate[`projects/${projectKey}`] = {
            projectKey,
            title: gameKey,
            description,
            members,
        }
        multiUpdate[`dev/${projectKey}/fieldMap`] = defaultFieldMap
        multiUpdate[`dev/${projectKey}/fieldRepo`] = defaultFieldRepo
        
        firebase.database().ref().update(multiUpdate)
        props.switchToProject(projectKey)
        props.popModalBy(1)
    }

    const handleGameKey = (e) => setGameKey(e.target.value)
    const handleDescription = (e) => setDescription(e.target.value)
    
    return (
        <div className="create-modal">
            <FormInput
                title="Game Title"
                error={errors.gameKey}
                value={gameKey}
                setValue={handleGameKey}
            />
            <FormInput
                title="Game Description"
                error={errors.description}
                value={description}
                setValue={handleDescription}
            />
            <ModalOptions
                error={errors.modal}
                onSave={handleSave}
                onClose={props.onClose}
            />
        </div>
    )
}

export default connect(
    state => ({
        uid: state.firebase.authUser.uid,
    }),
    {
        switchToProject,
    }
)(CreateProject)