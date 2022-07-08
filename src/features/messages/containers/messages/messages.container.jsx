import React, { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import PageLayout from '../../../../shared/components/page-layout/page-layout.component';
import { useGoBack } from '../../../../shared/hooks/navigate-back.hook';
import { messagesHooks } from '../../hooks/messages.hook';
import MessagesList from '../../components/messages-list/messages-list.component';
import { sortByDateAndTime } from '../../../../shared/helpers/sortByDate.helper';

export default function Messages() {
  let { userId } = useParams();
  const messages = messagesHooks.useGetMessages();
  const fetchMessages = messagesHooks.useFetchMessages();
  const fetchMessagesByUser = messagesHooks.useFetchMessagesByUser();
  const goBack = useGoBack();
  const sortedMessages = useMemo(() => sortByDateAndTime([...messages]), [messages]);

  useEffect(() => {
    if (userId) {
      fetchMessagesByUser(userId);
    } else {
      fetchMessages();
    }
  }, [userId, fetchMessages, fetchMessagesByUser]);

  return (
    <PageLayout
      title="Messages List"
      content={sortedMessages.length ? <MessagesList messages={sortedMessages} /> : <div> No Messages available. </div>}
      button={userId ? 'Back' : ''}
      onBtnClick={goBack}
    />
  );
}
