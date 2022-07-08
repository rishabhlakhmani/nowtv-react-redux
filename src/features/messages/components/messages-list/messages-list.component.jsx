import React from 'react';
import PropTypes from 'prop-types';
import MessageCard from '../message-card/message-card.component';
import './messages-list.component.css';

export default function MessagesList({ messages }) {
  return (
    <div className="w-100 d-flex flex-wrap justify-content-center messages-container">
      {messages.map((message) => (
        <MessageCard key={message.id} message={message} />
      ))}
    </div>
  );
}

MessagesList.propTypes = {
  messages: PropTypes.array,
};
