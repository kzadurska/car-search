import { MODELS_FETCHED, MODEL_SELECTED, MODELS_FAILED, MODELS_LOADING } from 'actions/models';
import { SEARCH_RESET } from 'actions/reset';

const initialState = { list: [], selected: '', error: false, loading: false };

function modelsReducer(state = initialState, action) {
  switch (action.type) {
    case MODELS_LOADING:
      return { ...state, loading: true, error: false };
    case MODELS_FETCHED:
      return { ...state, list: action.modelsList, loading: false };
    case MODEL_SELECTED:
      return { ...state, selected: action.selected };
    case MODELS_FAILED:
      return { ...state, error: true, loading: false };
    case SEARCH_RESET:
      return initialState;
    default:
      return state;
  }
}

export default modelsReducer;
