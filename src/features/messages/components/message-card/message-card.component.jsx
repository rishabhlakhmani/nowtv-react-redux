import React, { useState } from 'react';
import { Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './message-card.component.css';
import { membersHooks } from '../../../members/hooks/members.hooks';

export default function MessageCard({ message }) {
  // It is being used in Javascript Tooltip
  const [showTooltip, setShowTooltip] = useState(false);
  const member = membersHooks.useGetMembers(message.userId);
  const navigateToMembersMessages = membersHooks.useNavigateToMembersMessages(message.userId);

  return (
    <Card className="card-container" data-testid="message-card">
      <Card.Img
        variant="top"
        src={member?.avatar || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'}
        alt="Image"
      />
      <Card.Body>
        <Card.Title onClick={navigateToMembersMessages}>
          {member?.firstName} {member?.lastName}
        </Card.Title>

        {/* CSS Tooltip */}

        <div className="message">
          <Card.Text>{message.message}</Card.Text>
          <span className="css-tooltip custom-tooltip">{member?.email}</span>
        </div>

         {/* JS Tooltip */}

        {/* <div className="message" onMouseOver={() => setShowTooltip(true)} onMouseOut={() => setShowTooltip(false)}>
          <Card.Text>{message.message}</Card.Text>
          {showTooltip && <span className="js-tooltip custom-tooltip">{member.email}</span>}
        </div> */}

        {/* React Libary Tooltip */}

        {/* <OverlayTrigger placement="bottom" overlay={<Tooltip>{member.email}</Tooltip>}>
          <Card.Text>{message.message}</Card.Text>
        </OverlayTrigger> */}
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">{new Date(message.timestamp).toLocaleString()}</small>
      </Card.Footer>
    </Card>
  );
}

MessageCard.propTypes = {
  message: PropTypes.object,
};
