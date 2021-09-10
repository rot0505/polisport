import { AppActionType } from '../types'

export const updateCurrentAct = (act) => {
  return {
    type: AppActionType.UPDATE_CURRENT_ACT,
    payload: act
  }
}

export const updateLanguage = (language) => {
  return {
    type: AppActionType.UPDATE_LANGUAGE,
    payload: language
  }
}

export const setVisited = (mapId) => {
  return {
    type: AppActionType.SET_VISITED,
    payload: mapId
  }
}