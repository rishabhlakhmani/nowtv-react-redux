import { createSelector } from '@reduxjs/toolkit';

const getMessagesState = (state) => state.messages;

const getAllMessages = createSelector(getMessagesState, (state) => state.messages);

export const messagesSelectors = {
  getAllMessages,
};
