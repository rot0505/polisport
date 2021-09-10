/* eslint-disable import/no-anonymous-default-export */
import { AppActionType } from './../types'

const localeBrowser = String(navigator.language || navigator.userLanguage).substr(0, 2)



const defaultState = {
  successMessage: null,
  errorMessage: null,
  loading: false,
  currentAct: null,
  showMainMenu: false,
  showMap: false,
  showVideo: {open: false, data: {}},
  showTimeline: false,
  showCloseButton: true,
  showReception: false,
  showContact: false,
  showHelp: false,
  locale: !(localeBrowser.includes(['en','es'])) ? 'en' : localeBrowser,
  mapId: null,
  visited: []
}

export default (state = defaultState, action) => {

  switch (action.type) {

    case AppActionType.UPDATE_CURRENT_ACT:
      return {
        ...state,
        currentAct: action.payload
      }
      
    case AppActionType.UPDATE_OPEN_CLOSE_MENU:
    return {
      ...state,
      showTimeline: false,
      showContact: false,
      showMainMenu: action.payload
    }

    case AppActionType.UPDATE_OPEN_CLOSE_TIMELINE:
    return {
      ...state,
      showTimeline: action.payload
    }

    case AppActionType.UPDATE_HIDDEN_SHOW_CLOSE_BUTTON:
    return {
      ...state,
      showCloseButton: action.payload
    }

    case AppActionType.UPDATE_OPEN_CLOSE_CONTACT:
    return {
      ...state,
      showContact: action.payload
    }

    case AppActionType.UPDATE_OPEN_CLOSE_RECEPTION:
    return {
      ...state,
      showReception: action.payload
    }

    case AppActionType.UPDATE_OPEN_CLOSE_MAP:
    return {
      ...state,
      showMap: action.payload.show,
      mapId: action.payload.map,
      floor: action.payload.floor
    }

    case AppActionType.UPDATE_LANGUAGE:
      return {
        ...state,
        locale: action.payload
    }
    
    case AppActionType.UPDATE_OPEN_CLOSE_VIDEO:
      return {
        ...state,
        showVideo: action.payload
    }

    case AppActionType.UPDATE_LOADING:
      return {
        ...state,
        loading: action.payload
    }

    case AppActionType.UPDATE_OPEN_CLOSE_HELP:
      return {
        ...state,
        showHelp: action.payload
    }

    case AppActionType.SET_VISITED:
      return {
        ...state,
        visited: action.payload === null ? [] : [...state.visited, action.payload]
    }
        
    default: return { ...state }
  }
}
