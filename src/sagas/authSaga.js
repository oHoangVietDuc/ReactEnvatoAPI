import { call, put } from 'redux-saga/effects';
import * as actions from '../actions/auth';
import history from '../history';
import SetAuthorizationHeader from '../utils/SetAuthorizationHeader';
import API from '../api';

export function * userLoginSaga(action) {
  try {
    localStorage.VelaEnvatoToken = action.token;
    SetAuthorizationHeader(action.token);
    const user = yield call(API.auth.getPrivateUser);
    const userName = yield call(API.auth.getPrivateUsername);
    const userData = {
      ...user,
      username: userName
    }
    yield put(actions.LoginSuccess(userData));
    localStorage.user = JSON.stringify(userData);
    history.push(`${process.env.PUBLIC_URL}/`);
  } catch (error) {
    yield put(actions.LoginFail(error));
  }
}

export function * fetchUserSaga(action) {
  SetAuthorizationHeader(action.token);
  const user = yield call(API.auth.getPrivateUser);
  const userName = yield call(API.auth.getPrivateUsername);
  const userData = {
    ...user,
    username: userName
  }
  localStorage.user = JSON.stringify(userData);;
  // const user = JSON.parse(localStorage.user);
  yield put(actions.fetchCurrentUserSuccess(userData));
}

export function * userLogoutSaga(action) {
  yield put(actions.Logout);
}
