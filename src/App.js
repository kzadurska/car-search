import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { GlobalStyles } from 'styles';
import { resetSearch } from 'actions';
import Makes from 'components/Makes';
import Models from 'components/Models';
import Vehicles from 'components/vehicles';
import Button from 'components/Button';

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function App({ dispatch }) {
  function handleResetSearchClick() {
    dispatch(resetSearch());
  }
  return (
    <>
      <GlobalStyles />

      <main css="display: flex; flex-direction: column; align-items: center;">
        <header>
          <h1>Car search</h1>
        </header>
        <Makes />
        <Models />
        <Vehicles />
        <Button onClick={handleResetSearchClick}>Clear search</Button>
      </main>
    </>
  );
}

export default connect()(App);
