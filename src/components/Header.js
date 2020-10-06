import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { queries } from 'styles';

import { modelSelected, getModels } from 'actions/models';
import { makeSelected } from 'actions/makes';
import { getVehicles } from 'actions/vehicles';
import { resetSearch } from 'actions/reset';

import Button from 'components/Button';
import Select from 'components/Select';

Header.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isResetButtonDisplayed: PropTypes.bool.isRequired,
  isMakesDropdownDisabled: PropTypes.bool.isRequired,
  isModelsDropdownDisabled: PropTypes.bool.isRequired,
  selectedMake: PropTypes.string.isRequired,
  selectedModel: PropTypes.string.isRequired,
  makes: PropTypes.arrayOf(PropTypes.string).isRequired,
  models: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function mapStateToProps({ models, makes }) {
  return {
    isResetButtonDisplayed: Boolean(makes.selected),
    isMakesDropdownDisabled: makes.error || makes.loading,
    isModelsDropdownDisabled: makes.error || models.error || models.loading || models.list.length === 0,
    selectedMake: makes.selected,
    selectedModel: models.selected,
    makes: makes.list,
    models: models.list,
  };
}

function Header({
  dispatch,
  isMakesDropdownDisabled,
  isModelsDropdownDisabled,
  isResetButtonDisplayed,
  selectedMake,
  selectedModel,
  makes,
  models,
}) {
  function handleMakeSelect(event) {
    const { value } = event.target;

    dispatch(makeSelected(value));
    dispatch(getModels(value));
  }

  function handleModelSelect(event) {
    const { value } = event.target;

    dispatch(modelSelected(value));
    dispatch(getVehicles(value));
  }

  function handleResetSearchClick() {
    dispatch(resetSearch());
  }

  return (
    <StyledHeader>
      <Select onChange={handleMakeSelect} value={selectedMake} disabled={isMakesDropdownDisabled}>
        <option value="">--Please choose an option--</option>
        {makes.map(make => (
          <option key={make} value={make}>
            {make}
          </option>
        ))}
      </Select>

      <Select onChange={handleModelSelect} value={selectedModel} disabled={isModelsDropdownDisabled}>
        <option value="">--Please choose an option--</option>
        {models.map(model => (
          <option key={model} value={model}>
            {model}
          </option>
        ))}
      </Select>

      {isResetButtonDisplayed && <Button onClick={handleResetSearchClick}>Clear search</Button>}
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 13px 0px;

  @media ${queries.mobile} {
    padding: 8px 16px;
  }

  @media ${queries.desktop} {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

export default connect(mapStateToProps)(Header);
