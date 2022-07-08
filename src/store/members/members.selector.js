import { createSelector } from '@reduxjs/toolkit';

const getMembersState = (state) => state.members;

const getMemberById = (id) =>
  createSelector(getMembersState, (state) => state.members.find((member) => member.id === id));

export const membersSelectors = {
  getMemberById,
};
