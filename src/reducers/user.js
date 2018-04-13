import { 
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  FETCH_CURRENT_USER_SUCCESS
} from '../constants/auth';

export default function user(state = { loading: false }, action) {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, loading: true };
    case USER_LOGIN_SUCCESS:
      return { ...state, ...action.user, loading: false };
    case USER_LOGIN_FAIL:
      return { ...state, loading: false }
    case FETCH_CURRENT_USER_SUCCESS:
      return { ...state, ...action.user };
    default:
      return state;
  }
}
