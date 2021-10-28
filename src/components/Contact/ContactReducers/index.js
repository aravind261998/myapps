import {combineReducers} from 'redux';
//import errorReducer from './errorReducer';
import contactReducer from './contactsReducer'
export default combineReducers({
   
   contacts:contactsReducer
});