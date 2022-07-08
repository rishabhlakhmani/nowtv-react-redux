import { fetchMessages } from './messages.thunk';
import { configureStore } from '@reduxjs/toolkit';

describe('fetchMessages', () => {
  it('should return some data when successful', async () => {
    // const resSpy = jest.spyOn(getMessages).mockResolvedValueOnce(MESSAGES);
    const store = configureStore({
      reducer: function (state = [], action) {
        switch (action.type) {
          case 'messages/fetchMessages/fulfilled':
            return [...action.payload];
          default:
            return state;
        }
      },
    });
    await store.dispatch(fetchMessages());
    const state = store.getState();

    expect(state.length).not.toEqual(0);
  });
});