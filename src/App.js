import React, { Component } from 'react';
import Cardlist from './Cardlist';
import { landmarks } from './landmarks';

export default class App extends Component {
	render() {
		return <Cardlist landmarks={landmarks}/>
	}
}
