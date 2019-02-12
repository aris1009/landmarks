import React, { Component } from 'react';
import Cardlist from './Cardlist';
import Searchbox from './Searchbox'
import { landmarks } from './landmarks';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			landmarks: landmarks,
			searchfield: ''
		}
	}

	onUserIsSearching = e => {
		this.setState( { searchfield: e.target.value } );
	}

	render() {
		const filteredLandmarks = this.state.landmarks.filter( landmark => {
			return landmark.name.toLowerCase().includes( this.state.searchfield.toLowerCase() )
		} );
		return ( <div style={{
				maxWidth: "1350px",
				margin: "auto"
		}}>
			<h1 className="tc">World Landmarks</h1>
			<Searchbox searching={this.onUserIsSearching}/>
			<Cardlist landmarks={filteredLandmarks}/>
		</div> )
	}
}
