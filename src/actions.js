import {CHANGE_SEARCHFIELD, FETCH_LANDMARKS_PENDING, FETCH_LANDMARKS_SUCCESS, FETCH_LANDMARKS_FAILED} from './constants';

export const setSearchfield = text => ({type: CHANGE_SEARCHFIELD, payload: text});

export const fetchLandmarks = () => dispatch => {
  dispatch({type: FETCH_LANDMARKS_PENDING});

  let url = process.env.REACT_APP_STORED_DATA_URL;
  fetch(url)
    .then(response => response.json())
    .then(data => dispatch({type: FETCH_LANDMARKS_SUCCESS, payload: data}))
    .catch(err => dispatch({type: FETCH_LANDMARKS_FAILED, payload: err}));
}
