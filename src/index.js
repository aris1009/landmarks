import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';
import 'tachyons';

ReactDOM.render(
  <div style={{
    MozUserSelect: 'none',
    WebkitUserSelect: 'none'
  }}>
  <App/>
</div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA - PWA serviceWorker.unregister();
