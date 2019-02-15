import React, {Component} from 'react';
import Loader from '../components/Loader';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll'
import Cardlist from '../components/Cardlist';

import ErrorBoundary from '../components/ErrorBoundary'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      landmarks: [],
      searchfield: ''
    }
  }

  onUserIsSearching = e => {
    this.setState({searchfield: e.target.value});
  }

  componentDidMount() {
    let url = process.env.REACT_APP_STORED_DATA_URL;
    fetch(url).then(response => {
      if (!response.ok) {
        throw response
      }
      return response.json();
    }).then(data => {
      this.setState({landmarks: data});
    });
  }

  render() {
    const {landmarks, searchfield} = this.state;
    const filteredLandmarks = landmarks.filter(landmark => {
      return (landmark.name.toLowerCase().includes(searchfield.toLowerCase()) ||
              landmark.location.toLowerCase().includes(searchfield.toLowerCase()));
    });
    /* // TODO: Serve images from an API */
    if (!landmarks.length) {
      return (<div>
        <h1 className="tc pa2 pt2 ma0 f1 lh-title">World Landmarks</h1>
        <Loader/>
      </div>)
    } else {
      return (<div>
        <h1 className="tc pa2 pt2 ma0 f1 lh-title">World Landmarks</h1>
        <Searchbox searching={this.onUserIsSearching}/>
        <Scroll>
          <ErrorBoundary>
            <Cardlist landmarks={filteredLandmarks}/>
          </ErrorBoundary>
        </Scroll>
      </div>)
    }
  }
}