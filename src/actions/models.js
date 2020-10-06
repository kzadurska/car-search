import { getModelsApi } from 'api';

export const MODELS_FETCHED = 'MODELS_FETCHED';
export const MODEL_SELECTED = 'MODEL_SELECTED';
export const MODELS_FAILED = 'MODELS_FAILED';
export const MODELS_LOADING = 'MODELS_LOADING';

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

export function getModels(model) {
  return dispatch => {
    dispatch(modelsLoading());
    return getModelsApi(model)
      .then(response => dispatch(modelsFetched(response)))
      .catch(() => dispatch(modelsFailed()));
  };
}
