import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

function ProfileCalendarCard({ card }) {
  const monthOfMeeting = format(new Date(card.startAt), 'LLLL', { locale: ru });
  const dayNumberOfMeeting = format(new Date(card.startAt), 'd', { locale: ru });

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
