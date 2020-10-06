import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { GlobalStyles } from 'styles';

import { getMakes } from 'actions';

import Header from 'components/Header';
import Makes from 'components/Makes';
import Models from 'components/Models';
import Vehicles from 'components/Vehicles';

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function App({ dispatch }) {
  useEffect(() => {
    dispatch(getMakes());
  }, []);

  return (
    <>
      <GlobalStyles />

      <Header />
      <main css="display: flex; flex-direction: column; align-items: center; padding: 16px;">
        <Makes />
        <Models />
        <Vehicles />
      </main>
    </>
  );
}

export default connect()(App);
