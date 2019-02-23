import {
  CHANGE_SEARCHFIELD,
  FETCH_LANDMARKS_PENDING,
  FETCH_LANDMARKS_SUCCESS,
  FETCH_LANDMARKS_FAILED,
} from './constants';

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

export const fetchLandmarks = (state = initialStateLandmarks, action = {}) => {
  switch (action.type) {
    case FETCH_LANDMARKS_PENDING:
      
    default:
    return state;
  }
}
