import { 
  FETCH_STATEMENT,
  FETCH_STATEMENT_SUCCESS,
  FETCH_STATEMENT_FAIL
} from '../constants/statement';

export default function statement(state = { loading: false, results: [] }, action) {
  switch (action.type) {
    case FETCH_STATEMENT:
      return { ...state, ...action.data, loading: true };
    case FETCH_STATEMENT_SUCCESS:
      return { ...state, results: action.data, loading: false };
    case FETCH_STATEMENT_FAIL:
      return { ...state, ...action.errors, loading: false};
    default:
      return state;
  }
}
