import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import { createStore } from 'redux';
import allReducers from './reducers';
import App from './components/App';
import { Provider } from 'react-redux';

//store all data for aplication Data Storage 
// store will have All reducer that return some piece pf data;
const store = createStore(allReducers);

//we have to pass store to the provider 
ReactDOM.render(
    
    <Provider store={store}>
        <App/>
    </Provider>,
    
    document.getElementById('root')
);
