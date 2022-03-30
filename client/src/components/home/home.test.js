import React from 'react';
import { render, screen } from '@testing-library/react';
import {Provider} from 'react-redux';
import store from '../../redux/store/store';
import { MemoryRouter } from "react-router-dom";

import Home from './home';

test("renders learn react link", () => {
  render(
    <MemoryRouter>
    <Provider store={store}>
      <Home />
    </Provider>
    </MemoryRouter>
  );
  screen.debug();
});

describe('App', () => {
  test('renders App component', () => {
    render(<MemoryRouter>
      <Provider store={store}>
        <Home />
      </Provider>
      </MemoryRouter>);

    expect(screen.getByText(/Ingresar/i)).toBeInTheDocument();
  });
});
