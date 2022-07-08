import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { messagesSelectors } from '../../../store/messages/messages.selector';
import { fetchMessages, fetchMessagesByUser } from '../../../store/messages/messages.thunk';

const useGetMessages = () => useSelector(messagesSelectors.getAllMessages);

const useFetchMessages = () => {
  const dispatch = useDispatch();

  return useCallback(() => dispatch(fetchMessages()), [dispatch]);
};

const useFetchMessagesByUser = () => {
  const dispatch = useDispatch();

  return useCallback((id) => dispatch(fetchMessagesByUser(id)), [dispatch]);
};

export const messagesHooks = {
  useGetMessages,
  useFetchMessages,
  useFetchMessagesByUser,
};
