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
} from 'actions';

function makesReducer(state = { list: [], selected: '', error: false }, action) {
  switch (action.type) {
    case MAKES_FETCHED:
      return { ...state, list: action.makesList, error: false };
    case MAKE_SELECTED:
      return { ...state, selected: action.selected };
    case MAKES_FAILED:
      return { ...state, error: true };
    default:
      return state;
  }
}

function modelsReducer(state = { list: [], selected: '', error: false }, action) {
  switch (action.type) {
    case MODELS_FETCHED:
      return { ...state, list: action.modelsList, error: false };
    case MODEL_SELECTED:
      return { ...state, selected: action.selected };
    case MODELS_FAILED:
      return { ...state, error: true };
    default:
      return state;
  }
}

function vehiclesReducer(state = { list: [], error: false }, action) {
  switch (action.type) {
    case VEHICLES_FETCHED:
      return { ...state, list: action.vehiclesList, error: false };
    case VEHICLES_FAILED:
      return { ...state, error: true };
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
