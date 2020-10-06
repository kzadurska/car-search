import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getModels } from 'actions';
import Error from 'components/Error';
import Loader from 'components/Loader';

Models.propTypes = {
  dispatch: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  selectedMake: PropTypes.string.isRequired,
  isEmptyPlaceholderDisplayed: PropTypes.bool.isRequired,
};

function mapStateToProps({ models, makes }) {
  return {
    error: models.error,
    loading: models.loading,
    selectedMake: makes.selected,
    isEmptyPlaceholderDisplayed:
      !models.error && !models.loading && Boolean(makes.selected) && models.list.length === 0,
  };
}

function Models({ dispatch, selectedMake, error, loading, isEmptyPlaceholderDisplayed }) {
  function handleRetryClick() {
    dispatch(getModels(selectedMake));
  }

  return (
    <>
      {loading && <Loader />}

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
