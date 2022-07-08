import { combineReducers, configureStore } from '@reduxjs/toolkit';

import messagesReducer from './messages/messages.slice';
import membersReducer from './members/members.slice';

const rootReducer = combineReducers({
  messages: messagesReducer,
  members: membersReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
