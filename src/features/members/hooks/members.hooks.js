import { useSelector } from 'react-redux';
import { membersSelectors } from '../../../store/members/members.selector';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

const useGetMembers = (memberId) => useSelector(membersSelectors.getMemberById(memberId));

const useNavigateToMembersMessages = (userId) => {
  const navigate = useNavigate();

  return useCallback(() => navigate(`/messages/${userId}`), [navigate, userId]);
};

export const membersHooks = {
  useGetMembers,
  useNavigateToMembersMessages,
};
