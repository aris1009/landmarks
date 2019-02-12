import React, { Component } from 'react';
// import { landmarks } from './landmarks'

const imgpath = process.env.PUBLIC_URL + '/assets/cards/'

export default class Image extends Component {
	render() {
		return ( <div style={{minHeight: '290px', minWidth: '220px', position: 'relative'}}>
			<img src={imgpath + this.props.img} alt={this.props.img.replace( /.jpg/gi, '' )}/>
		</div>
		)
	}
}
