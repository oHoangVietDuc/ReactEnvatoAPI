import * as Constants from '../constants/statement';

export const fetchStatement = data => ({
  type: Constants.FETCH_STATEMENT,
  data
});

export const fetchStatementSuccess = data => ({
  type: Constants.FETCH_STATEMENT_SUCCESS,
  data
});

export const fetchStatementFail = errors => ({
  type: Constants.FETCH_STATEMENT_FAIL,
  errors
});

export const filterByItem = data => ({
  type: Constants.FILTER_BY_ITEM,
  data
});

export const filterByType = data => ({
  type: Constants.FILTER_BY_STATEMENT_TYPE,
  data
});
