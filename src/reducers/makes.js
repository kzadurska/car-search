import { MAKES_FETCHED, MAKE_SELECTED, MAKES_FAILED, MAKES_LOADING } from 'actions/makes';
import { SEARCH_RESET } from 'actions/reset';

const initialState = { list: [], selected: '', error: false, loading: false };

function makesReducer(state = initialState, action) {
  switch (action.type) {
    case MAKES_LOADING:
      return { ...state, loading: true, error: false };
    case MAKES_FETCHED:
      return { ...state, list: action.makesList, loading: false };
    case MAKE_SELECTED:
      return { ...state, selected: action.selected };
    case MAKES_FAILED:
      return { ...state, error: true, loading: false };
    case SEARCH_RESET:
      return { ...state, selected: '', error: false, loading: false };
    default:
      return state;
  }
}

export default makesReducer;
