import _ from 'lodash'
import * as helpers from '../common/helpers'
import { modalType } from '../modal/types'
import { showModal } from '../modal/ModalReducer';

import { initStoryMap, DEFAULT_NORMAL } from './defaults'
import { boardType } from '../fields/defaults'
import { updateSourceType } from '../common/types';

const initialState = {
    storyMap: initStoryMap,
    boardRepo: boardType,
    pageRepo: {},
}

//storyMap:
const ADD_STORY = 'story/add-story-to'
const REMOVE_STORY = 'story/remove-story'
const MOVE_STORY = 'story/move-story'
const MOVE_PAGE_WITHIN_MAP = 'page/move-page-within-map'
const MOVE_PAGE_TO_OTHER_MAP = 'page/move-page-to-other-map'

//[repo]sitory: holds all the pages keyed by pageKey
const UPDATE_REPO = 'page/update-repo'
const ADD_PAGE = 'page/add-page'
const REMOVE_PAGE = 'page/remove-page'

//TODO
export function addStory(boardType) {
    return (dispatch, getState) => {
        const { storyMap } = getState().page

        let storyMapClone = _.cloneDeep(storyMap)

        const storyKey = helpers.genUID('story', storyMap)

        if (!storyMapClone[boardType]) {
            console.warn('board || .byId does not exist')
            return;
        }

        //set pointer
        let pointer = storyMapClone[boardType]

        //add story
        pointer.byIndex.push(storyKey)
        pointer.byId[storyKey] = {
            key: storyKey,
            title: "",
            boardType,
            default: false,
        }

        dispatch({
            type: ADD_STORY,
            payload: storyMapClone,
        })
    }
}

export function removeStory(boardType, mapKey) {
    return (dispatch, getState) => {
        const { storyMap, pageRepo } = getState().page

        let repoClone = _.cloneDeep(pageRepo)
        let storyMapClone = _.cloneDeep(storyMap)

        //set pointer
        let storyMapPointer = storyMapClone[boardType]

        //remove from storyMap
        delete storyMapPointer.byId[mapKey]
        _.pull(storyMapPointer.byIndex, mapKey)

        //remove all pages from pageRepo
        delete repoClone[mapKey]

        dispatch({
            type: REMOVE_STORY,
            payload: {
                pageRepo: repoClone,
                storyMap: storyMapClone,
            }
        })
    }
}

export function moveStory(boardKey, startIndex, endIndex) {
    return (dispatch, getState) => {
        const { storyMap } = getState().page

        let storyMapClone = _.cloneDeep(storyMap)

        //set pointer
        let pointer = storyMapClone[boardKey].byIndex

        //move item
        const [removed] = pointer.splice(startIndex, 1)
        pointer.splice(endIndex, 0, removed)
        
        dispatch({
            type: MOVE_STORY,
            payload: storyMapClone,
        })
    }
}

export function addPageToMap(mapKey, boardType) {
    return (dispatch, getState) => {
        const { pageRepo } = getState().page
        const { fieldRepo } = getState().field

        let repoClone = Object.assign({}, pageRepo)
        if (!repoClone[mapKey]) {
            repoClone[mapKey] = _.cloneDeep(DEFAULT_NORMAL)
        }
        
        const pageKey = helpers.genUID(boardType, repoClone[mapKey].byId)

        //set-up defaults
        let defaultInfo = {}
        _.filter(fieldRepo, i => i.boardType === boardType && i.default)
            .forEach(i => defaultInfo[i.key] = i.default)

        repoClone[mapKey].byId[pageKey] = {
            pageKey,
            boardType,
            storyType: mapKey,
            ...defaultInfo,
        }
        repoClone[mapKey].byIndex.unshift(pageKey)

        dispatch({
            type: ADD_PAGE,
            payload: repoClone,
        })
        dispatch(showModal(modalType.showPage, {
            pageKey,
            path: [mapKey, 'byId', pageKey],
            updateSource: updateSourceType.repo,
        }))
    }
}

export function movePageWithinMap(mapKey, startIndex, endIndex) {
    return (dispatch, getState) => {
        const { pageRepo } = getState().page
        
        let repoClone = _.cloneDeep(pageRepo)

        //set pointer
        let pointer = repoClone[mapKey].byIndex
        
        //move item
        const [removed] = pointer.splice(startIndex, 1)
        pointer.splice(endIndex, 0, removed)

        dispatch({
            type: MOVE_PAGE_WITHIN_MAP,
            payload: repoClone,
        })
    }
}

export function movePageToOtherMap(startMapKey, endMapKey, startIndex, endIndex) {
    return (dispatch, getState) => {
        const { pageRepo } = getState().page
        
        let repoClone = _.cloneDeep(pageRepo)

        //set pointers
        let startPointer = repoClone[startMapKey]
        if(!repoClone[endMapKey]) repoClone[endMapKey] = _.cloneDeep(DEFAULT_NORMAL)
        let endPointer = repoClone[endMapKey]
        
        //get item information
        const pageKey = startPointer.byIndex[startIndex]
        const pageInfo = startPointer.byId[pageKey]
        
        //adjust .byIndex of start and end
        const [removed] = startPointer.byIndex.splice(startIndex, 1)
        endPointer.byIndex.splice(endIndex, 0, removed)

        //move the item to end location
        endPointer.byId[pageKey] = pageInfo

        dispatch({
            type: MOVE_PAGE_TO_OTHER_MAP,
            payload: repoClone,
        })
    }
}

export function removePage(pageKey, mapKey) {
    return (dispatch, getState) => {
        const { pageRepo } = getState().page
        
        let repoClone = _.cloneDeep(pageRepo)
        
        //set pointer
        let pointer = repoClone[mapKey]

        //remove from .byId and .byIndex
        delete pointer.byId[pageKey]
        _.pull(pointer.byIndex, pageKey)
        
        dispatch({
            type: REMOVE_PAGE,
            payload: repoClone
        })
    }
}

export function updateRepo(path, update, extraPath=[]) {
    return (dispatch, getState) => {
        const { pageRepo } = getState().page
        const repoClone = helpers.updateByPath(path.concat(extraPath), update, pageRepo)
        
        dispatch({
            type: UPDATE_REPO,
            payload: repoClone,
        })
    }
}

export function saveAllPriorities(attach) {
    return (dispatch, getState) => {
        const { pageRepo } = getState().page
        let repoClone = Object.assign({}, pageRepo)

        for (var i=0; i<attach.length; i++) {
            for (var j=0; j<attach[i].length; j++) {
                repoClone[attach[i][j].pageKey].priority = i + 1
            }
        }

        dispatch({
            type: UPDATE_REPO,
            payload: repoClone,
        })
    }
}

//LogicBoard
export function deleteProp(pageKey, fieldKey, indexKey, subfieldKey) {
    return (dispatch, getState) => {
        const { pageRepo } = getState().page
        const repoClone = Object.assign({}, pageRepo)

        if (!repoClone[pageKey]) return
        if (!repoClone[pageKey][fieldKey]) return
        if (!repoClone[pageKey][fieldKey][indexKey]) return
        if (!repoClone[pageKey][fieldKey][indexKey].data) return
        if (!repoClone[pageKey][fieldKey][indexKey].data[subfieldKey]) return

        delete repoClone[pageKey][fieldKey][indexKey].data[subfieldKey]
        dispatch({
            type: UPDATE_REPO,
            payload: repoClone,
        })
    }
}

export default (state = initialState, action) => {
    switch(action.type){
        case ADD_STORY: 
        case MOVE_STORY:
            return { ...state, storyMap: action.payload }
            
        case UPDATE_REPO:
        case MOVE_PAGE_WITHIN_MAP:
        case MOVE_PAGE_TO_OTHER_MAP:
        case ADD_PAGE:
        case REMOVE_PAGE:
            return { ...state, pageRepo: action.payload }

        case REMOVE_STORY:
            return { ...state, pageRepo: action.payload.pageRepo, storyMap: action.payload.storyMap }
        default:
            return state;
    }
}