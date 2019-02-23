import React, {Component} from 'react';
import {connect} from 'react-redux';
import Loader from '../components/Loader';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll'
import Cardlist from '../components/Cardlist';

import ErrorBoundary from '../components/ErrorBoundary';

import {setSearchfield, fetchLandmarks} from '../actions';

const mapStateToProps = (state) => {
  return {
    searchfield: state.searchLandmarks.searchfield,
    landmarks: state.requestLandmarks.landmarks,
    isPending: state.requestLandmarks.isPending,
    error: state.requestLandmarks.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUserIsSearching: e => dispatch(setSearchfield(e.target.value)),
    onFetchLandmarks: () => dispatch(fetchLandmarks())
  }
}

class App extends Component {
  componentDidMount() {
    this.props.onFetchLandmarks();
  }

  render() {
    const {searchfield, onUserIsSearching, landmarks, isPending} = this.props;
    const filteredLandmarks = landmarks.filter(landmark => {
      return (landmark.name.toLowerCase().includes(searchfield.toLowerCase()) ||
              landmark.location.toLowerCase().includes(searchfield.toLowerCase()));
    });

    if (isPending) {
      return (<div>
        <h1 className="tc pa2 pt2 ma0 f1 lh-title">World Landmarks</h1>
        <Loader/>
      </div>)
    } else {
      return (<div>
        <h1 className="tc pa2 pt2 ma0 f1 lh-title">World Landmarks</h1>
        <Searchbox searching={onUserIsSearching}/>
        <Scroll>
          <ErrorBoundary>
            <Cardlist landmarks={filteredLandmarks}/>
          </ErrorBoundary>
        </Scroll>
      </div>)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
