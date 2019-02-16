import {CHANGE_SEARCHFIELD} from './constants';

const initialState = {
  searchfield: ''
}

export const searchLandmarks = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return {...state, searchfield: action.payload}
    default:
      return state;
  }
}
