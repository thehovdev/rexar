import {combineReducers} from 'redux';
import TaskReducers from './task';
import CarsReducers from './cars';

const allReducers = combineReducers({
    task : TaskReducers,
    cars : CarsReducers,
});

export default allReducers;