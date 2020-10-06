import { getMakesApi, getModelsApi, getVehiclesApi } from 'api';

export const MAKES_FETCHED = 'MAKES_FETCHED';
export const MODELS_FETCHED = 'MODELS_FETCHED';
export const VEHICLES_FETCHED = 'VEHICLES_FETCHED';
export const MAKE_SELECTED = 'MAKE_SELECTED';
export const MODEL_SELECTED = 'MODEL_SELECTED';
export const MAKES_FAILED = 'MAKES_FAILED';
export const MODELS_FAILED = 'MODELS_FAILED';
export const VEHICLES_FAILED = 'VEHICLES_FAILED';
export const SEARCH_RESET = 'SEARCH_RESET';
export const MAKES_LOADING = 'MAKES_LOADING';
export const MODELS_LOADING = 'MODELS_LOADING';
export const VEHICLES_LOADING = 'VEHICLES_LOADING';

function makesFetched(makesList) {
  return {
    type: MAKES_FETCHED,
    makesList,
  };
}

export function makeSelected(selected) {
  return {
    type: MAKE_SELECTED,
    selected,
  };
}

function makesFailed() {
  return {
    type: MAKES_FAILED,
  };
}

function makesLoading() {
  return {
    type: MAKES_LOADING,
  };
}

function modelsFetched(modelsList) {
  return {
    type: MODELS_FETCHED,
    modelsList,
  };
}

export function modelSelected(selected) {
  return {
    type: MODEL_SELECTED,
    selected,
  };
}

function modelsFailed() {
  return {
    type: MODELS_FAILED,
  };
}

function modelsLoading() {
  return {
    type: MODELS_LOADING,
  };
}

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

export function resetSearch() {
  return {
    type: SEARCH_RESET,
  };
}

export function getMakes() {
  return dispatch => {
    dispatch(makesLoading());
    return getMakesApi()
      .then(response => dispatch(makesFetched(response)))
      .catch(() => dispatch(makesFailed()));
  };
}

export function getModels(model) {
  return dispatch => {
    dispatch(modelsLoading());
    return getModelsApi(model)
      .then(response => dispatch(modelsFetched(response)))
      .catch(() => dispatch(modelsFailed()));
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
