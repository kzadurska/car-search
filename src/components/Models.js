import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { selectModel } from 'actions';
import Error from 'components/Error';

Models.propTypes = {
  dispatch: PropTypes.func.isRequired,
  models: PropTypes.array.isRequired,
};

function mapStateToProps({ models }) {
  console.log(models);
  return {
    models: models.list,
    selectedModel: models.selected,
    error: models.error,
  };
}

function Models({ dispatch, selectedMake, models, selectedModel, error }) {
  function handleModelSelect(event) {
    dispatch(selectModel(event.target.value));
  }

  return (
    <>
      {!error && models.length > 0 && (
        <select onChange={handleModelSelect} css="margin-top: 24px;">
          <option value="">--Please choose an option--</option>
          {models.map(model => (
            <option key={model} value={model}>
              {model}
            </option>
          ))}
        </select>
      )}
      {!error && selectedMake && models.length === 0 && <div css="margin-top: 24px;">No models to display</div>}

      {/* {TODO: dorob akcje tutaj} */}
      {error && (
        <Error onClick={null}>
          <div>Failed to fetch models.</div>
        </Error>
      )}
    </>
  );
}

export default connect(mapStateToProps)(Models);
