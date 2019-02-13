import React, {Component} from 'react';

export default class Scroll extends Component {
  render() {
    return (<div className="tc mt1" style={{
        overflow: "scroll",
        height: "378px",
        overflowX: "hidden"
      }}>
      {this.props.children}
    </div>);
  }
}
