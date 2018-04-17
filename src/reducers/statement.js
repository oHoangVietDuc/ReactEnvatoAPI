import { 
  FETCH_STATEMENT,
  FETCH_STATEMENT_SUCCESS,
  FETCH_STATEMENT_FAIL,
  FILTER_BY_ITEM,
  FILTER_BY_STATEMENT_TYPE
} from '../constants/statement';

const initStateStatement = {
  loading: false,
  results: [],
  authorItems: [],
  startDate: '',
  endDate: '',
  site: '',
  filterType: 'compact',
  filterItem: ''
};

export default function statement(state = initStateStatement, action) {
  switch (action.type) {
    case FETCH_STATEMENT:
      return { ...state, ...action.data, loading: true };
    case FETCH_STATEMENT_SUCCESS:
      return { ...state, results: action.data, loading: false };
    case FETCH_STATEMENT_FAIL:
      return { ...state, ...action.errors, loading: false };
    case FILTER_BY_ITEM:
      return { ...state, filterItem: action.data }
    case FILTER_BY_STATEMENT_TYPE:
      return { ...state, filterType: action.data }
    default:
      return state;
  }
}
