import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

function PopupCalendarDone({ clickedCalendarCard, onCloseClick }) {
  const monthOfMeeting = format(new Date(clickedCalendarCard.startAt), 'MMMM', { locale: ru });
  const dayNumberOfMeeting = format(new Date(clickedCalendarCard.startAt), 'd', { locale: ru });
  const hourStartOfMeeting = format(new Date(clickedCalendarCard.startAt), 'k', { locale: ru });
  const minuteStartOfMeeting = format(new Date(clickedCalendarCard.startAt), 'mm', { locale: ru });
  const hourEndOfMeeting = format(new Date(clickedCalendarCard.endAt), 'k', { locale: ru });
  const minuteEndOfMeeting = format(new Date(clickedCalendarCard.endAt), 'mm', { locale: ru });

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
