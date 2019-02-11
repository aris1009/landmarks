import React, { Component } from 'react';

class Card extends Component {
	render() {
    const { img, name, location } = this.props
		return (
    <div className="tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
			<img alt="This is not redundant" src={img}/>
      <div>
        <h4>{name}, </h4>
        <span>{location}</span>
      </div>
		</div> )
	}
}

export default Card;
