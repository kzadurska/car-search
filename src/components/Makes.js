import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getMakes, selectMake } from 'actions';
import Error from 'components/Error';

Makes.propTypes = {
  dispatch: PropTypes.func.isRequired,
  makes: PropTypes.array.isRequired,
  error: PropTypes.bool.isRequired,
};

function mapStateToProps({ makes }) {
  return {
    makes: makes.list,
    error: makes.error,
  };
}

function Makes({ dispatch, makes, error }) {
  useEffect(() => {
    dispatch(getMakes());
  }, []);

  function handleMakeSelect(event) {
    dispatch(selectMake(event.target.value));
  }

  function fetchMakes() {
    dispatch(getMakes());
  }

  return (
    <>
      {!error && (
        <select onChange={handleMakeSelect}>
          <option value="">--Please choose an option--</option>
          {makes.map(make => (
            <option key={make} value={make}>
              {make}
            </option>
          ))}
        </select>
      )}
      {error && (
        <Error onClick={fetchMakes}>
          <div>Failed to fetch makes.</div>
        </Error>
      )}
    </>
  );
}

export default connect(mapStateToProps)(Makes);
