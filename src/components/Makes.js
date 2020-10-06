import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getMakes } from 'actions/makes';
import Error from 'components/Error';
import Loader from 'components/Loader';

Makes.propTypes = {
  dispatch: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps({ makes }) {
  return {
    error: makes.error,
    loading: makes.loading,
  };
}

function Makes({ dispatch, error, loading }) {
  return (
    <>
      {loading && <Loader />}

      {error && (
        <Error onClick={() => dispatch(getMakes())}>
          <div>Failed to fetch makes.</div>
        </Error>
      )}
    </>
  );
}

export default connect(mapStateToProps)(Makes);
