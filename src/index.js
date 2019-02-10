import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import {landmarks} from './landmarks'

ReactDOM.render(
  < div >
    <Card img={landmarks[0].img} name={landmarks[0].name} location={landmarks[0].location}/ >
      <Card img={landmarks[1].img} name={landmarks[1].name} location={landmarks[1].location}/ >
        <Card img={landmarks[2].img} name={landmarks[2].name} location={landmarks[2].location}/ >
        < /div>

          , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA - PWA serviceWorker.unregister();
