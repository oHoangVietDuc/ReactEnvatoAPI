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
    localStorage.user = JSON.stringify(userData);
    const respond = yield call(API.auth.getAuthorItems, userName);
    const authorItems = respond.data.matches;
    yield put(actions.LoginSuccess(userData));
    yield put(actions.fetchAuthorItemsSuccess(authorItems));
    history.push(`${process.env.PUBLIC_URL}/`);
  } catch (error) {
    yield put(actions.LoginFail(error));
  }
}

export function * fetchUserSaga(action) {
  SetAuthorizationHeader(action.token);
  const user = yield call(API.auth.getPrivateUser);
  const userName = yield call(API.auth.getPrivateUsername);
  const respond = yield call(API.auth.getAuthorItems, userName);
  const authorItems = respond.data.matches;
  const userData = {
    ...user,
    username: userName
  }
  localStorage.user = JSON.stringify(userData);;
  yield put(actions.fetchCurrentUserSuccess(userData));
  yield put(actions.fetchAuthorItemsSuccess(authorItems));
}

export function * userLogoutSaga(action) {
  yield put(actions.Logout);
}
