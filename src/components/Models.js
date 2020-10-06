import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getModels } from 'actions';
import Error from 'components/Error';

Models.propTypes = {
  dispatch: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  selectedMake: PropTypes.string.isRequired,
  isEmptyPlaceholderDisplayed: PropTypes.bool.isRequired,
};

function mapStateToProps({ models, makes }) {
  return {
    error: models.error,
    selectedMake: makes.selected,
    isEmptyPlaceholderDisplayed: !models.error && Boolean(makes.selected) && models.list.length === 0,
  };
}

function Models({ dispatch, selectedMake, error, isEmptyPlaceholderDisplayed }) {
  function handleRetryClick() {
    dispatch(getModels(selectedMake));
  }

  return (
    <>
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
