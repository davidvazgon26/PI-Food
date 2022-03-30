import React from 'react';
import { render, screen } from '@testing-library/react';
import {Provider} from 'react-redux';
import store from '../../redux/store/store';

import Demo from './demo';

xtest("renders learn react link", () => {
  render(
    <Provider store={store}>
      <Demo />
    </Provider>
  );
  screen.debug();
});



xdescribe('App', () => {
    test('renders App component', () => {
      render(<Demo/>);
        screen.debug();
      expect(screen.getByText('Search:')).toBeInTheDocument();
    });
  });


xdescribe('ProductPage', () => {
    it("must display a title", ()=>{
        render(<Demo/>);
        expect(screen.queryByText(/product page/i)).toBeInTheDocument();
    })
})