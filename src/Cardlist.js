import React, { Component } from 'react';
import Card from './Card';

export default class Cardlist extends Component {
	render() {
    return this.props.landmarks.map( cardInLandmarks => {
			return <Card {...cardInLandmarks}/>
		} );
	}
}
