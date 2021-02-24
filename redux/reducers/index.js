import { combineReducers } from 'redux';
import likes from './likes';

const rootReducer = combineReducers({
  likes,
})

export default rootReducer;