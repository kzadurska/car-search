import { getMakesApi, getModelsApi, getVehiclesApi } from 'api';

export const MAKES_FETCHED = 'MAKES_FETCHED';
export const MODELS_FETCHED = 'MODELS_FETCHED';
export const VEHICLES_FETCHED = 'VEHICLES_FETCHED';
export const MAKE_SELECTED = 'MAKE_SELECTED';
export const MODEL_SELECTED = 'MODEL_SELECTED';
export const MAKES_FAILED = 'MAKES_FAILED';
export const MODELS_FAILED = 'MODELS_FAILED';
export const VEHICLES_FAILED = 'VEHICLES_FAILED';

function makesFetched(makesList) {
  return {
    type: MAKES_FETCHED,
    makesList,
  };
}

function makeSelected(selected) {
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

function modelsFetched(modelsList) {
  return {
    type: MODELS_FETCHED,
    modelsList,
  };
}

function modelSelected(selected) {
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

export function getMakes() {
  return dispatch => {
    return getMakesApi()
      .then(response => dispatch(makesFetched(response)))
      .catch(() => dispatch(makesFailed()));
  };
}

export function selectMake(make) {
  return dispatch => {
    dispatch(makeSelected(make));
    make && dispatch(getModels(make));
  };
}

export function getModels(model) {
  return dispatch => {
    return getModelsApi(model)
      .then(response => dispatch(modelsFetched(response)))
      .catch(() => dispatch(modelsFailed()));
  };
}

export function selectModel(model) {
  return dispatch => {
    dispatch(modelSelected(model));
    model && dispatch(getVehicles(model));
  };
}

export function getVehicles(model) {
  return (dispatch, getState) => {
    return getVehiclesApi(getState().makes.selected, model)
      .then(response => dispatch(vehiclesFetched(response)))
      .catch(() => dispatch(vehiclesFailed()));
  };
}
