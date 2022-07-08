import { createSlice } from '@reduxjs/toolkit';
import members from '../../data/members.json';

const initialState = {
  // Assumption: Considering this state as a persistent (database)
  members: members,
};

const membersSlice = createSlice({
  name: 'members',
  initialState,
  reducers: {},
});

export const membersActions = membersSlice.actions;
export default membersSlice.reducer;
