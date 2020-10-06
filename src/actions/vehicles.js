import { getVehiclesApi } from 'api';

export const VEHICLES_LOADING = 'VEHICLES_LOADING';
export const VEHICLES_FETCHED = 'VEHICLES_FETCHED';
export const VEHICLES_FAILED = 'VEHICLES_FAILED';

function vehiclesFetched(vehiclesList) {
  return {
    type: VEHICLES_FETCHED,
    vehiclesList,
  };
}

function vehiclesFailed() {
  return {
    type: VEHICLES_FAILED,
  };
}

function vehiclesLoading() {
  return {
    type: VEHICLES_LOADING,
  };
}

export function getVehicles(model) {
  return (dispatch, getState) => {
    dispatch(vehiclesLoading());
    return getVehiclesApi(getState().makes.selected, model)
      .then(response => dispatch(vehiclesFetched(response)))
      .catch(() => dispatch(vehiclesFailed()));
  };
}
