import { combineReducers } from 'redux';
import { MAKES_FETCHED, MAKE_SELECTED, MODELS_FETCHED, MODEL_SELECTED, VEHICLES_FETCHED } from 'actions';

function makesReducer(state = { list: [], selected: '' }, action) {
  switch (action.type) {
    case MAKES_FETCHED:
      return { ...state, list: action.makesList };
    case MAKE_SELECTED:
      return { ...state, selected: action.selected };
    default:
      return state;
  }
}

function modelsReducer(state = { list: [], selected: '' }, action) {
  switch (action.type) {
    case MODELS_FETCHED:
      return { ...state, list: action.modelsList };
    case MODEL_SELECTED:
      return { ...state, selected: action.selected };
    default:
      return state;
  }
}

function vehiclesReducer(state = { list: [] }, action) {
  switch (action.type) {
    case VEHICLES_FETCHED:
      return { ...state, list: action.vehiclesList };
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
