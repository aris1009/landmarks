import React, {Component} from 'react';
import LandmarkImage from './LandmarkImage';

class Card extends Component {
  render() {
    const {img, name, location} = this.props;
    return (<div className="tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
      <LandmarkImage img={img}/>
      <div>
        <span>{name}</span><br/>
        <span>{location}</span>
      </div>
    </div>)
  }
}

export default Card;
