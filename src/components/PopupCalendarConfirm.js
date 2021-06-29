import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

function PopupCalendarConfirm({ clickedCalendarCard, onSubmitAppointCalendarClick, onCloseClick }) {
  const monthOfMeeting = format(new Date(clickedCalendarCard.startAt), 'MMMM', { locale: ru });
  const dayNumberOfMeeting = format(new Date(clickedCalendarCard.startAt), 'd', { locale: ru });
  const hourStartOfMeeting = format(new Date(clickedCalendarCard.startAt), 'k', { locale: ru });
  const minuteStartOfMeeting = format(new Date(clickedCalendarCard.startAt), 'mm', { locale: ru });
  const hourEndOfMeeting = format(new Date(clickedCalendarCard.endAt), 'k', { locale: ru });
  const minuteEndOfMeeting = format(new Date(clickedCalendarCard.endAt), 'mm', { locale: ru });

  function handleAppointCalendarPopupClick() {
    onSubmitAppointCalendarClick(clickedCalendarCard);
  }

  return (
    <form className="popup__container popup__container_type_confirmation">
      <button
        className="popup__close popup__cancel"
        type="button"
        aria-label="Close"
        onClick={onCloseClick}
      />
      <h2 className="section-title calendar__title_type_popup calendar__title_type_confirmation">
        {`Подтвердить запись на мероприятие
        ${clickedCalendarCard.title}
        ${dayNumberOfMeeting} ${' '}
        ${monthOfMeeting}${' '}с${' '}${hourStartOfMeeting}:${minuteStartOfMeeting}–
        ${hourEndOfMeeting}:${minuteEndOfMeeting}`}
      </h2>
      <div className="calendar__buttons">
        <button
          className="button button_theme_light calendar__confirm"
          type="button"
          onClick={handleAppointCalendarPopupClick}
        >
          Подтвердить запись
        </button>
        <button className="button popup__cancel" type="button" onClick={onCloseClick}>
          Отменить
        </button>
      </div>
    </form>
  );
}

PopupCalendarConfirm.defaultProps = {
  clickedCalendarCard: {},
  onSubmitAppointCalendarClick: undefined,
  onCloseClick: undefined,
  // onCloseClick: undefined,
  // onSubmit: undefined,
  // isFormValid: true,
  // handleChange: undefined,
};

PopupCalendarConfirm.propTypes = {
  clickedCalendarCard: PropTypes.instanceOf(Object),
  onSubmitAppointCalendarClick: PropTypes.func,
  onCloseClick: PropTypes.func,
  // onCloseClick: PropTypes.func,
  // onSubmit: PropTypes.func,
  // isFormValid: PropTypes.bool,
  // handleChange: PropTypes.func,
};

export default PopupCalendarConfirm;
