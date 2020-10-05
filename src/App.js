import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { GlobalStyles } from 'styles';
import { getMakes, selectMake, selectModel } from 'actions';

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  makes: PropTypes.array.isRequired,
};

function mapStateToProps({ makes, models, vehicles }) {
  return {
    makes: makes.list,
    selectedMake: makes.selected,
    models: models.list,
    selectedModel: models.selected,
    vehicles: vehicles.list,
  };
}

function App({ dispatch, makes, selectedMake, models, selectedModel, vehicles }) {
  useEffect(() => {
    dispatch(getMakes());
  }, []);

  function handleMakeSelect(event) {
    dispatch(selectMake(event.target.value));
  }

  function handleModelSelect(event) {
    dispatch(selectModel(event.target.value));
  }

  return (
    <>
      <GlobalStyles />

      <main css="display: flex; flex-direction: column; align-items: center;">
        <header>
          <h1>Car search</h1>
        </header>
        <p>Click to choose your car</p>
        <select onChange={handleMakeSelect}>
          <option value="">--Please choose an option--</option>
          {makes.map(make => (
            <option key={make} value={make}>
              {make}
            </option>
          ))}
        </select>
        {models.length > 0 && (
          <select onChange={handleModelSelect} css="margin-top: 24px;">
            <option value="">--Please choose an option--</option>
            {models.map(model => (
              <option key={model} value={model}>
                {model}
              </option>
            ))}
          </select>
        )}
        {selectedMake && models.length === 0 && <div css="margin-top: 24px;">No models to display</div>}
        {selectedMake && selectedModel && vehicles.length > 0 && (
          <div css="display: flex; width: 100%; flex-wrap: wrap; justify-content: space-between;">
            {vehicles.map(
              ({ make, model, enginePowerPS, enginePowerKW, engineCapacity, bodyType, fuelType }, index) => (
                <div
                  key={index}
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
              )
            )}
          </div>
        )}
        {selectedMake && selectedModel && vehicles.length === 0 && (
          <div css="margin-top: 24px;">No vehicles to display</div>
        )}
      </main>
    </>
  );
}

export default connect(mapStateToProps)(App);