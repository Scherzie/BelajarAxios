import {combineReducers} from 'redux';
import CounterReducers from './CounterReducers';
import KataReducers from './KataReducers';
import ParkirReducers from './ParkirReducer';

const reducers=combineReducers({
    Count:CounterReducers,
    Kata:KataReducers,
    Parkir:ParkirReducers
})

export default reducers;