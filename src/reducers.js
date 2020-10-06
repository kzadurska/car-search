import { combineReducers } from 'redux';
import makesReducer from 'reducers/makes';
import modelsReducer from 'reducers/models';
import vehiclesReducer from 'reducers/vehicles';

const rootReducer = combineReducers({
  makes: makesReducer,
  models: modelsReducer,
  vehicles: vehiclesReducer,
});

export default rootReducer;
