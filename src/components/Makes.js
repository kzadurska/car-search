import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getMakes, makeSelected, getModels } from 'actions';
import Error from 'components/Error';

Makes.propTypes = {
  dispatch: PropTypes.func.isRequired,
  makes: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedMake: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
};

function mapStateToProps({ makes }) {
  return {
    makes: makes.list,
    error: makes.error,
    selectedMake: makes.selected,
  };
}

function Makes({ dispatch, makes, error, selectedMake }) {
  useEffect(() => {
    dispatch(getMakes());
  }, []);

  function handleMakeSelect(event) {
    const { value } = event.target;

    dispatch(makeSelected(value));
    dispatch(getModels(value));
  }

  return (
    <>
      {!error && (
        <select onChange={handleMakeSelect} value={selectedMake}>
          <option value="">--Please choose an option--</option>
          {makes.map(make => (
            <option key={make} value={make}>
              {make}
            </option>
          ))}
        </select>
      )}

      {error && (
        <Error onClick={() => dispatch(getMakes())}>
          <div>Failed to fetch makes.</div>
        </Error>
      )}
    </>
  );
}

export default connect(mapStateToProps)(Makes);
