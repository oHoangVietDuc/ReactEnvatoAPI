import { call, put } from 'redux-saga/effects';
import * as actions from '../actions/statement';
import API from '../api';

export function* fetchUserStatement(action) {
  try {
    const respond = yield call(API.statement.getUserStatement, action.data);
    const data = respond.results;
    if (respond.pagination) {
      for (let i = 2; i <= respond.pagination.pages; i+=1) {
        const respondNext = yield call(API.statement.getUserStatementByPage, {
          ...action.data,
          page: i
        });
        data.push(...respondNext.results);
      }
    }
    yield put(actions.fetchStatementSuccess(data));
  } catch (error) {
    yield put(actions.fetchStatementSuccess(error));
  }
}

export function* fetchAuthorItems(action) {
  try {
    const respond = yield call(API.statement.getAuthorItems, action.data);
    const data = respond.data.matches;
    yield put(actions.fetchAuthorItemsSuccess(data));
  } catch (error) {
    yield put(actions.fetchAuthorItemsFail(error));
  }
}
