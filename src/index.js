import React from 'react';
import ReactDOM from 'react-dom';
//./ means it's in the same directory 
import { Provider, connect  } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import './index.css';
import 'tachyons';
import App from './contain/App';
import { searchCrew } from './reducer';
//serviceWorker can help us work faster and help us work offline
// import * as serviceWorker from './serviceWorker';

const logger = createLogger();
const store = createStore(searchCrew, applyMiddleware(logger))
//I want the reactDOM package to render whatever "this" is 
ReactDOM.render(
                
                <Provider  store={store}>
                    <App/>
                </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below
serviceWorker.unregister();

