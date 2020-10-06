import { combineReducers } from 'redux';
import {
  MAKES_FETCHED,
  MAKE_SELECTED,
  MAKES_FAILED,
  MODELS_FETCHED,
  MODEL_SELECTED,
  MODELS_FAILED,
  VEHICLES_FETCHED,
  VEHICLES_FAILED,
  SEARCH_RESET,
  MAKES_LOADING,
  MODELS_LOADING,
  VEHICLES_LOADING,
} from 'actions';

const makesInitialState = { list: [], selected: '', error: false, loading: false };
const modelsInitialState = { list: [], selected: '', error: false, loading: false };
const vehicleInitialState = { list: [], error: false, loading: false };

function makesReducer(state = makesInitialState, action) {
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

function modelsReducer(state = modelsInitialState, action) {
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
      return modelsInitialState;
    default:
      return state;
  }
}

function vehiclesReducer(state = vehicleInitialState, action) {
  switch (action.type) {
    case VEHICLES_LOADING:
      return { ...state, loading: true, error: false };
    case VEHICLES_FETCHED:
      return { ...state, list: action.vehiclesList, loading: false };
    case VEHICLES_FAILED:
      return { ...state, error: true, loading: false };
    case SEARCH_RESET:
      return vehicleInitialState;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  makes: makesReducer,
  models: modelsReducer,
  vehicles: vehiclesReducer,
});

export default rootReducer;
