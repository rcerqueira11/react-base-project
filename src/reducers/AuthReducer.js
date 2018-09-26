import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
} from '../constants/actionsType';
import initialState from './initialState';


export default (state = initialState.auth , action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload, error: '' };
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication Failed.', password: '' };
    default:
      return state
  }
}