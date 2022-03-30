import React from 'react';
import { render, screen } from '@testing-library/react';
import {Provider} from 'react-redux';
import store from '../../redux/store/store';
import { MemoryRouter } from "react-router-dom";

import About from './about';


test("Renderiza el DOM de About", () => {
  render(
    <MemoryRouter>
    <Provider store={store}>
      <About />
    </Provider>
    </MemoryRouter>
  );
  screen.debug();
});


describe('About', () => {
    test('Debe tener un titulo', () => {
      render( <MemoryRouter>
        <Provider store={store}>
          <About />
        </Provider>
        </MemoryRouter>);
  
      expect(screen.getByText(/Sobre el proyecto/i)).toBeInTheDocument();
    });
  });