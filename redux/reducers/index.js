import { combineReducers } from 'redux';
import likes from './likes';
import alert from './alert';

const rootReducer = combineReducers({
  likes, alert,
})

export default rootReducer;