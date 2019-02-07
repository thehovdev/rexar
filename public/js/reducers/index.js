import {combineReducers} from 'redux';
import TaskReducers from './task';

const allReducers = combineReducers({
    task : TaskReducers
});

export default allReducers;