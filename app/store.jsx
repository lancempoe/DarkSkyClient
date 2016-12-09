import { createStore, combineReducers } from 'redux';
import hvacReducer from './reducers/hvac_reducer.jsx';

const reducers = combineReducers({
    hvacStore: hvacReducer
});

export default createStore(reducers);