import { getMakesApi } from 'api';

export const MAKES_FETCHED = 'MAKES_FETCHED';
export const MAKE_SELECTED = 'MAKE_SELECTED';
export const MAKES_FAILED = 'MAKES_FAILED';
export const MAKES_LOADING = 'MAKES_LOADING';

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

export function getMakes() {
  return dispatch => {
    dispatch(makesLoading());
    return getMakesApi()
      .then(response => dispatch(makesFetched(response)))
      .catch(() => dispatch(makesFailed()));
  };
}
