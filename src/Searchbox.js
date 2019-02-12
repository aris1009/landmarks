import React, { Component } from 'react';

export default class Searchbox extends Component {
	render() {
		return (
    <div className="pa2 tc">
      <input
        className="pa3 ba b--navy bg-lightest-blue"
        type="search"
        placeholder="Search landmarks.."
        onChange={this.props.searching}
      />
		</div> )
	}
}
