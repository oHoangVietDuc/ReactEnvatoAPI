import * as Constants from '../constants/auth';

export const Login = token => ({
  type: Constants.USER_LOGIN,
  token
});

export const LoginSuccess = user => ({
  type: Constants.USER_LOGIN_SUCCESS,
  user
});

export const LoginFail = errors => ({
  type: Constants.USER_LOGIN_FAIL,
  errors
});

export const Logout = () => ({
  type: Constants.USER_LOGOUT
});

export const fetchCurrentUser = token => ({
  type: Constants.FETCH_CURRENT_USER_REQUEST,
  token
});

export const fetchCurrentUserSuccess = user => ({
  type: Constants.FETCH_CURRENT_USER_SUCCESS,
  user
});

export const fetchAuthorItems = data => ({
  type: Constants.FETCH_AUTHOR_ITEMS,
  data
});

export const fetchAuthorItemsSuccess = data => ({
  type: Constants.FETCH_AUTHOR_ITEMS_SUCCESS,
  data
});

export const fetchAuthorItemsFail = errors => ({
  type: Constants.FETCH_AUTHOR_ITEMS_FAIL,
  errors
});
