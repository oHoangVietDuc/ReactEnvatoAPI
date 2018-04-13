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
