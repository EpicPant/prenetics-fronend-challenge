import React from 'react';
import App from '../../component/App';
import { render, cleanup, screen } from '@testing-library/react';


describe('App Testing', () => {

  afterEach(cleanup);

  beforeEach(() => {
    render(<App />)
  });

  test('if renders a <Sidebar />', async () => {
    expect(screen.getAllByTestId('sidebar').length).toBe(1);
  });

  test('if renders a <TopNav/>', () => {
    expect(screen.getAllByTestId('top-nav').length).toBe(1);
  });

  test('if renders <TestResutPage/>', () => {
    expect(screen.getAllByTestId('test-result-page-loading').length).toBe(1);
  });

});