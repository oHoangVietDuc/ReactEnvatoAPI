import { takeLatest } from 'redux-saga/effects';
import { USER_LOGIN, FETCH_CURRENT_USER_REQUEST } from './constants/auth';
import { FETCH_STATEMENT } from './constants/statement';
import { userLoginSaga, fetchUserSaga } from './sagas/authSaga';
import fetchUserStatement from './sagas/statementSaga';

export default function* rootSaga() {
  yield takeLatest(USER_LOGIN, userLoginSaga);
  yield takeLatest(FETCH_CURRENT_USER_REQUEST, fetchUserSaga);
  yield takeLatest(FETCH_STATEMENT, fetchUserStatement);
};
