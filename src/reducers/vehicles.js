import { VEHICLES_FETCHED, VEHICLES_FAILED, VEHICLES_LOADING } from 'actions/vehicles';
import { SEARCH_RESET } from 'actions/reset';

const initialState = { list: [], error: false, loading: false };

function vehiclesReducer(state = initialState, action) {
  switch (action.type) {
    case VEHICLES_LOADING:
      return { ...state, loading: true, error: false };
    case VEHICLES_FETCHED:
      return { ...state, list: action.vehiclesList, loading: false };
    case VEHICLES_FAILED:
      return { ...state, error: true, loading: false };
    case SEARCH_RESET:
      return initialState;
    default:
      return state;
  }
}

export default vehiclesReducer;
