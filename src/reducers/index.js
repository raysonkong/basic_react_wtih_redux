import counterReducer from './counterReducer';
import isLoggedReducer from './isLoggedReducer';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    counter: counterReducer,
    isLogged: isLoggedReducer
})

export default rootReducer;

