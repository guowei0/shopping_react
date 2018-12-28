import { combineReducers, createStore } from 'redux';
import listReducers from './reducers';

const Reducers = combineReducers({
    listReducers
});

const store = createStore(Reducers);

export default store;