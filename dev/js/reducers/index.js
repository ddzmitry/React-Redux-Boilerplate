
// ALL REDUCERS GO HERE !!

import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import Selecteduser from './reducer-active-user';
// and we will pass all reducers to the store 
const allReducers = combineReducers({
    users : UserReducer,
    selecteduser : Selecteduser
})


export default allReducers;