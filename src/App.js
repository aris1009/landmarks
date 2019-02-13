import React, {Component} from 'react';
import Searchbox from './Searchbox';
import Scroll from './Scroll'
import Cardlist from './Cardlist';
import {landmarks} from './landmarks';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      landmarks: landmarks,
      searchfield: ''
    }
  }

  onUserIsSearching = e => {
    this.setState({searchfield: e.target.value});
  }

  render() {
    const filteredLandmarks = this.state.landmarks.filter(landmark => {
      return landmark.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    });
    return (<div>
      <h1 className="tc pa2 pt2 ma0 f1 lh-title">World Landmarks</h1>
      <Searchbox searching={this.onUserIsSearching}/>
			<Scroll>
				<Cardlist landmarks={filteredLandmarks}/>
			</Scroll>
    </div>)
  }
}
