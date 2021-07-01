import React from 'react';
import PropTypes from 'prop-types';
import {
  monthTextPadeg,
  dayNumber,
  hourStart,
  minuteStart,
  hourEnd,
  minuteEnd,
} from '../utils/toGetDate';

function PopupCalendarDone({ clickedCalendarCard, onCloseClick }) {
  const monthOfMeeting = monthTextPadeg(clickedCalendarCard);
  const dayNumberOfMeeting = dayNumber(clickedCalendarCard);
  const hourStartOfMeeting = hourStart(clickedCalendarCard);
  const minuteStartOfMeeting = minuteStart(clickedCalendarCard);
  const hourEndOfMeeting = hourEnd(clickedCalendarCard);
  const minuteEndOfMeeting = minuteEnd(clickedCalendarCard);

  return (
    <form className="popup__container popup__container_type_done">
      <div className="calendar__image-done" />
      <button
        className="popup__close popup__cancel"
        type="button"
        aria-label="Close"
        onClick={onCloseClick}
      />
      <h2 className="section-title calendar__title_type_popup calendar__title_type_popup-done ">
        {`Вы записаны на мероприятие
        ${clickedCalendarCard.title}
        ${dayNumberOfMeeting} ${' '}
        ${monthOfMeeting}${' '}с${' '}${hourStartOfMeeting}:${minuteStartOfMeeting}–
        ${hourEndOfMeeting}:${minuteEndOfMeeting}`}
      </h2>
      <h2 className="section-title calendar__title_type_popup calendar__title_type_popup-done">
        Если у вас не получится прийти — отмените, пожалуйста, запись.
      </h2>
      <button className="button calendar__back popup__cancel" type="button" onClick={onCloseClick}>
        Вернуться к календарю
      </button>
    </form>
  );
}

PopupCalendarDone.defaultProps = {
  clickedCalendarCard: {},
  onCloseClick: undefined,
};

PopupCalendarDone.propTypes = {
  clickedCalendarCard: PropTypes.instanceOf(Object),
  onCloseClick: PropTypes.func,
};

export default PopupCalendarDone;
