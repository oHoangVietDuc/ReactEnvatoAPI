import { 
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  FETCH_CURRENT_USER_REQUEST,
  FETCH_CURRENT_USER_SUCCESS,
  FETCH_AUTHOR_ITEMS_SUCCESS,
  FETCH_AUTHOR_ITEMS_FAIL,
} from '../constants/auth';

const initState = {
  loading: false, loaded: true, authorItems: []
};

export default function user(state = initState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, loading: true, loaded: false };
    case USER_LOGIN_SUCCESS:
      return { ...state, ...action.user, loading: false, loaded: true };
    case USER_LOGIN_FAIL:
      return { ...state, loading: false, loaded: false }
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
