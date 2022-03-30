import React from 'react';
import { render, screen } from '@testing-library/react';
import {Provider} from 'react-redux';
import store from '../../redux/store/store';
import { MemoryRouter } from "react-router-dom";

import OrderABC from './orderABC';



describe("ProductPage", () => {
  it("must display a title", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <OrderABC />
        </Provider>
      </MemoryRouter>
    );
    expect(screen.queryByText(/ascendente/i)).toBeInTheDocument();
  });
});
