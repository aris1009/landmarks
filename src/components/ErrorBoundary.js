import React, {Component} from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(err, info) {
    this.setState({hasError: true});
  }

  render() {
    if (this.state.hasError) {
      return <span style={{
          "color" : "red"
        }}>Error</span>
    } else {
      return this.props.children
    }
  }
}
