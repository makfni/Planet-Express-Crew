import React from 'react';
import ReactDOM from 'react-dom';
//./ means it's in the same directory 
import './index.css';
import 'tachyons';
import App from './contain/App';
//serviceWorker can help us work faster and help us work offline
import * as serviceWorker from './serviceWorker';

//I want the reactDOM package to render whatever "this" is 
ReactDOM.render(<App />, document.getElementById('root'));
            

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
