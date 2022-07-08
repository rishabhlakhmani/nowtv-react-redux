import { createSlice } from '@reduxjs/toolkit';
import { fetchMessages, fetchMessagesByUser } from './messages.thunk';

const initialState = {
  messages: [],
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchMessages.fulfilled, (state, action) => {
      state.messages = [...action.payload];
    });
    builder.addCase(fetchMessagesByUser.fulfilled, (state, action) => {
      state.messages = [...action.payload];
    });
  },
});

export const messagesActions = messagesSlice.actions;
export default messagesSlice.reducer;
