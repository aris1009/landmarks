import {CHANGE_SEARCHFIELD, FETCH_LANDMARKS_PENDING, FETCH_LANDMARKS_SUCCESS, FETCH_LANDMARKS_FAILED} from './constants';

const initialStateSearch = {
  searchfield: ''
}

export const searchLandmarks = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return {
        ...state,
        searchfield: action.payload
      }
    default:
      return state;
  }
}

const initialStateLandmarks = {
  isPending: false,
  landmarks: [],
  error: ''
}

export const requestLandmarks = (state = initialStateLandmarks, action = {}) => {
  switch (action.type) {
    case FETCH_LANDMARKS_PENDING:
      return {
        ...state,
        isPending: true
      }
    case FETCH_LANDMARKS_SUCCESS:
      return {
        ...state,
        landmarks: action.payload,
        isPending: false
      }
    case FETCH_LANDMARKS_FAILED:
      return {
        ...state,
        error: action.payload,
        isPending: false
      }
    default:
      return state;
  }
}
