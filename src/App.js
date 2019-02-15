import React, {Component} from 'react';
import Loader from './Loader';
import Searchbox from './Searchbox';
import Scroll from './Scroll'
import Cardlist from './Cardlist';

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
    //// TODO: Hardcoded-string :(
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
    const filteredLandmarks = this.state.landmarks.filter(landmark => {
      return landmark.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    });
    /* // TODO: Serve images from an API */
    if (this.state.landmarks.length === 0) {
      console.log(this.state.landmarks.length === 0);
      return (
        <div>
          <h1 className="tc pa2 pt2 ma0 f1 lh-title">World Landmarks</h1>
          <Loader/>
        </div>)
    } else {
      return (<div>
        <h1 className="tc pa2 pt2 ma0 f1 lh-title">World Landmarks</h1>
        <Searchbox searching={this.onUserIsSearching}/>
        <Scroll>
          <Cardlist landmarks={filteredLandmarks}/>
        </Scroll>
        }
      </div>)
    }
  }
}
