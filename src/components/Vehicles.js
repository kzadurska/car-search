import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import { getVehicles } from 'actions';
import Error from 'components/Error';
import Loader from 'components/Loader';

Vehicles.propTypes = {
  dispatch: PropTypes.func.isRequired,
  vehicles: PropTypes.arrayOf(
    PropTypes.shape({
      make: PropTypes.string.isRequired,
      model: PropTypes.string.isRequired,
      enginePowerPS: PropTypes.number.isRequired,
      enginePowerKW: PropTypes.number.isRequired,
      engineCapacity: PropTypes.number.isRequired,
      bodyType: PropTypes.string.isRequired,
      fuelType: PropTypes.string.isRequired,
    })
  ).isRequired,
  error: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  selectedModel: PropTypes.string.isRequired,
  isVehiclesListDisplayed: PropTypes.bool.isRequired,
  isEmptyPlaceholderDisplayed: PropTypes.bool.isRequired,
};

function mapStateToProps({ makes, models, vehicles }) {
  return {
    selectedModel: models.selected,
    vehicles: vehicles.list,
    error: vehicles.error,
    loading: vehicles.loading,
    isVehiclesListDisplayed: !vehicles.error && !vehicles.loading && vehicles.list.length > 0,
    isEmptyPlaceholderDisplayed:
      !vehicles.error &&
      !vehicles.loading &&
      Boolean(makes.selected) &&
      Boolean(models.selected) &&
      vehicles.list.length === 0,
  };
}

function Vehicles({
  dispatch,
  error,
  loading,
  selectedModel,
  vehicles,
  isVehiclesListDisplayed,
  isEmptyPlaceholderDisplayed,
}) {
  function handleRetryClick() {
    dispatch(getVehicles(selectedModel));
  }

  return (
    <>
      {loading && <Loader />}

      {isVehiclesListDisplayed && (
        <div css="display: flex; width: 100%; flex-wrap: wrap; justify-content: space-between;">
          {vehicles.map(({ make, model, enginePowerPS, enginePowerKW, engineCapacity, bodyType, fuelType }) => (
            <div
              key={uuidv4()}
              css="display: flex; flex-direction: column; align-items: flex-start; margin: 8px; padding: 16px; border-radius: 4px; background: #f6f6f6; width: 250px;"
            >
              <div>
                {make} {model} {bodyType}
              </div>
              <div>Fuel type: {fuelType}</div>
              <div>Capacity: {engineCapacity} cc</div>
              <div>
                Power: {enginePowerPS} hp, {enginePowerKW} kW
              </div>
              <div />
            </div>
          ))}
        </div>
      )}

      {isEmptyPlaceholderDisplayed && <div css="margin-top: 24px;">No vehicles to display</div>}

      {error && (
        <Error onClick={handleRetryClick}>
          <div>Failed to fetch vehivles.</div>
        </Error>
      )}
    </>
  );
}

export default connect(mapStateToProps)(Vehicles);
