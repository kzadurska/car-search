import React from 'react';

import { GlobalStyles } from 'styles';
import Makes from 'components/Makes';
import Models from 'components/Models';
import Vehicles from 'components/vehicles';

export default function App() {
  return (
    <>
      <GlobalStyles />

      <main css="display: flex; flex-direction: column; align-items: center;">
        <header>
          <h1>Car search</h1>
        </header>
        <p>Click to choose your car</p>
        <Makes />
        <Models />
        <Vehicles />
      </main>
    </>
  );
}
