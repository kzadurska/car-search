import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getVehicles } from 'actions';
import Error from 'components/Error';

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
  selectedMake: PropTypes.string.isRequired,
  selectedModel: PropTypes.string.isRequired,
  isDropdownDisplayed: PropTypes.bool.isRequired,
  isEmptyPlaceholderDisplayed: PropTypes.bool.isRequired,
};

function mapStateToProps({ makes, models, vehicles }) {
  return {
    selectedMake: makes.selected,
    selectedModel: models.selected,
    vehicles: vehicles.list,
    error: vehicles.error,
    isDropdownDisplayed:
      !vehicles.error && Boolean(makes.selected) && Boolean(models.selected) && vehicles.list.length > 0,
    isEmptyPlaceholderDisplayed:
      !vehicles.error && Boolean(makes.selected) && Boolean(models.selected) && vehicles.list.length === 0,
  };
}

function Vehicles({ dispatch, error, selectedModel, vehicles, isDropdownDisplayed, isEmptyPlaceholderDisplayed }) {
  function handleRetryClick() {
    dispatch(getVehicles(selectedModel));
  }

  return (
    <>
      {isDropdownDisplayed && (
        <div css="display: flex; width: 100%; flex-wrap: wrap; justify-content: space-between;">
          {vehicles.map(({ make, model, enginePowerPS, enginePowerKW, engineCapacity, bodyType, fuelType }) => (
            <div
              key={`${make}_${model}_${engineCapacity}`}
              css="display: flex; flex-direction: column; align-items: flex-start; margin: 8px; padding: 16px; border-radius: 4px; background: #f6f6f6; width: 250px;"
            >
              <div>
                {make} {model} {bodyType}
              </div>
              <div>Fuel type: {fuelType}</div>
              <div>Capacity: {engineCapacity} cc</div>
              <div>
                Engine power: {enginePowerPS} hp, {enginePowerKW} kW
              </div>
              <div />
            </div>
          ))}
        </div>
      )}

      {isEmptyPlaceholderDisplayed && <div css="margin-top: 24px;">No vehicles to display</div>}

      {error && (
        <Error onClick={handleRetryClick}>
          <div>Failed to fetch models.</div>
        </Error>
      )}
    </>
  );
}

export default connect(mapStateToProps)(Vehicles);
