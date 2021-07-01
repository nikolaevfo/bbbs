import React from 'react';
import PropTypes from 'prop-types';
import { monthTextPadeg, dayNumber } from '../utils/toGetDate';

function ProfileCalendarCard({ card }) {
  const monthOfMeeting = monthTextPadeg(card);
  const dayNumberOfMeeting = dayNumber(card);

  return (
    <article className="personal-area__calendar-card">
      <div className="personal-area__calendar-card-date">
        <p className="personal-area__calendar-card-day">{dayNumberOfMeeting}</p>
        <p className="personal-area__calendar-card-month">{monthOfMeeting}</p>
      </div>
      <p className="personal-area__calendar-card-title">{card.title}</p>
    </article>
  );
}

ProfileCalendarCard.defaultProps = {
  card: {},
};

ProfileCalendarCard.propTypes = {
  card: PropTypes.instanceOf(Object),
};

export default ProfileCalendarCard;
