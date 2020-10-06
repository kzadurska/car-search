import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { modelSelected, getVehicles, getModels } from 'actions';
import Error from 'components/Error';

Models.propTypes = {
  dispatch: PropTypes.func.isRequired,
  models: PropTypes.arrayOf(PropTypes.string).isRequired,
  error: PropTypes.bool.isRequired,
  selectedMake: PropTypes.string.isRequired,
  isDropdownDisplayed: PropTypes.bool.isRequired,
  isEmptyPlaceholderDisplayed: PropTypes.bool.isRequired,
};

function mapStateToProps({ models, makes }) {
  return {
    models: models.list,
    error: models.error,
    selectedMake: makes.selected,
    isDropdownDisplayed: !models.error && models.length > 0,
    isEmptyPlaceholderDisplayed: !models.error && makes.selected && models.list.length === 0,
  };
}

function Models({ dispatch, selectedMake, models, error, isDropdownDisplayed, isEmptyPlaceholderDisplayed }) {
  function handleModelSelect(event) {
    const { value } = event.target;

    dispatch(modelSelected(value));
    dispatch(getVehicles(value));
  }

  function handleRetryClick() {
    dispatch(getModels(selectedMake));
  }

  return (
    <>
      {isDropdownDisplayed && (
        <select onChange={handleModelSelect} css="margin-top: 24px;">
          <option value="">--Please choose an option--</option>
          {models.map(model => (
            <option key={model} value={model}>
              {model}
            </option>
          ))}
        </select>
      )}
      {isEmptyPlaceholderDisplayed && <div css="margin-top: 24px;">No models to display</div>}

      {error && (
        <Error onClick={handleRetryClick}>
          <div>Failed to fetch models.</div>
        </Error>
      )}
    </>
  );
}

export default connect(mapStateToProps)(Models);
