import React from 'react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import App from './app';
import { renderWithProviders } from './shared/utils/test.utils';

describe('App', function () {
  it('should render the component properly with routes', function () {
    let app = render(<App />, { wrapper: BrowserRouter });
    expect(app.container).toMatchSnapshot();
  });

  it('should render the default route to Messages List', function () {
    const routeToMessages = '/messages';

    renderWithProviders(
      <MemoryRouter initialEntries={[routeToMessages]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/Messages List/i)).toBeInTheDocument();
  });

  it('should render page not found if route does not match', function () {
    const inValidRoute = '/invalid';

    render(
      <MemoryRouter initialEntries={[inValidRoute]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/Page not Found/i)).toBeInTheDocument();
  });
});
