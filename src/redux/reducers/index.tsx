import {combineReducers} from 'redux';
import shoes from './shoesReducer';

const rootReducer = combineReducers({
  shoes,
});

export default rootReducer;
