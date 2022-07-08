import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Messages from './messages.container';
import { renderWithProviders } from '../../../../shared/utils/test.utils';

describe('Messages', function () {
  it('should render the component', function () {
    let messages = renderWithProviders(
      <MemoryRouter>
        <Messages />
      </MemoryRouter>
    );
    expect(messages.container).toMatchSnapshot();
  });

  it('should render the Messages List', function () {
    const initialMessages = [
      {
        id: 'fa94a88c-35bb-4a22-baa8-19910a883a6b',
        userId: '25bc59fd-1832-4eb4-964b-ff319e763494',
        message: 'Nunc rhoncus dui vel sem.',
        timestamp: '2016-09-09T05:04:05Z',
      },
    ];

    const { getByText } = renderWithProviders(
      <MemoryRouter>
        <Messages />
      </MemoryRouter>,
      {
        preloadedState: {
          messages: {
            messages: initialMessages,
          },
        },
      }
    );

    expect(getByText(initialMessages[0].message)).toBeInTheDocument();
    expect(getByText(initialMessages[0].message)).toBeInTheDocument();
  });

  it('should render No Messages available. when there is no message', function () {
    const { getByText } = renderWithProviders(
      <MemoryRouter>
        <Messages />
      </MemoryRouter>
    );

    expect(getByText(/No Messages available/i)).toBeInTheDocument();
  });
});
