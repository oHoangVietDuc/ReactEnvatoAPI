import { 
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  FETCH_CURRENT_USER_REQUEST,
  FETCH_CURRENT_USER_SUCCESS,
  FETCH_AUTHOR_ITEMS_SUCCESS,
  FETCH_AUTHOR_ITEMS_FAIL,
} from '../constants/auth';

export default function user(state = { loading: false, loaded: false }, action) {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, loading: true };
    case USER_LOGIN_SUCCESS:
      return { ...state, ...action.user, loading: false, loadedUser: true };
    case USER_LOGIN_FAIL:
      return { ...state, loading: false }
    case FETCH_CURRENT_USER_REQUEST:
      return { ...state, loaded: false }
    case FETCH_CURRENT_USER_SUCCESS:
      return { ...state, ...action.user, loaded: true };
    case FETCH_AUTHOR_ITEMS_SUCCESS:
      return { ...state, authorItems: action.data }
    case FETCH_AUTHOR_ITEMS_FAIL:
      return { ...state, errors: { ...action.errors } };
    default:
      return state;
  }
}
