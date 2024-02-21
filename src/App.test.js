import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux'; // Make sure to import Provider
import store from './store';
import { MemoryRouter } from 'react-router-dom';

import App from './App'; // Make sure App component is imported
// import { router } from './router'; // Make sure router is imported

test('renders learn react link', () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <App /> {/* Render your App component */}
      </Provider>
    </MemoryRouter>
  );
});