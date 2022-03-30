import React from 'react';
import { render, screen } from '@testing-library/react';
import {Provider} from 'react-redux';
import store from '../../redux/store/store';
import { MemoryRouter } from "react-router-dom";

import Detail from './recipeDetail.jsx';

describe("ProductPage", () => {
  it("must display a title", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Detail />
        </Provider>
      </MemoryRouter>
    );
    expect(screen.queryByText(/summary/i)).toBeInTheDocument();
  });
});