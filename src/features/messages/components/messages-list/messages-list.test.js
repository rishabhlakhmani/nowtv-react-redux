import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { screen } from '@testing-library/react';
import MessagesList from './messages-list.component';
import { renderWithProviders } from '../../../../shared/utils/test.utils';

const MESSAGES = [
  {
    id: '0b971ce3-85de-42a1-8b36-6d5ffd6df57c',
    userId: '2984bb94-d4ad-4f51-8885-757e42b19fc9',
    message:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
    timestamp: '2016-09-15T09:28:18Z',
  },

  {
    id: '1469e146-075f-46d2-888b-8d3152da1be9',
    userId: 'cff77726-363e-4ba6-a953-4dc431cdd383',
    message: 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.',
    timestamp: '2016-08-21T02:55:32Z',
  },
];

describe('MessagesList', function () {
  it('should render the component', function () {
    let messagesList = renderWithProviders(
      <MemoryRouter>
        <MessagesList messages={MESSAGES} />
      </MemoryRouter>
    );
    expect(messagesList.container).toMatchSnapshot();
  });

  it('should render the Messages List', function () {
    renderWithProviders(
      <MemoryRouter>
        <MessagesList messages={MESSAGES} />
      </MemoryRouter>
    );

    expect(screen.getAllByTestId('message-card').length).toBe(2);
  });
});
