import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getMakes } from 'actions';
import Error from 'components/Error';

Makes.propTypes = {
  dispatch: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
};

function mapStateToProps({ makes }) {
  return {
    error: makes.error,
  };
}

function Makes({ dispatch, error }) {
  return (
    <>
      {error && (
        <Error onClick={() => dispatch(getMakes())}>
          <div>Failed to fetch makes.</div>
        </Error>
      )}
    </>
  );
}

export default connect(mapStateToProps)(Makes);
