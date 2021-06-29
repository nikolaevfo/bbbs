import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

function PopupCalendarDescription({
  clickedCalendarCard,
  onCloseClick,
  onSubmitAppointCalendarClick,
}) {
  const monthOfMeeting = format(new Date(clickedCalendarCard.startAt), 'LLLL', { locale: ru });
  const dayNameOfMeeting = format(new Date(clickedCalendarCard.startAt), 'EEEE', { locale: ru });
  const dayNumberOfMeeting = format(new Date(clickedCalendarCard.startAt), 'd', { locale: ru });
  const hourStartOfMeeting = format(new Date(clickedCalendarCard.startAt), 'k', { locale: ru });
  const minuteStartOfMeeting = format(new Date(clickedCalendarCard.startAt), 'mm', { locale: ru });
  const hourEndOfMeeting = format(new Date(clickedCalendarCard.endAt), 'k', { locale: ru });
  const minuteEndOfMeeting = format(new Date(clickedCalendarCard.endAt), 'mm', { locale: ru });
  const freeSeats =
    clickedCalendarCard.remainSeats || clickedCalendarCard.seats - clickedCalendarCard.takenSeats;
  let freeSeatsText = '';
  if (clickedCalendarCard.booked) {
    freeSeatsText = '';
  } else if (freeSeats > 0) {
    freeSeatsText = `Осталось ${freeSeats} мест`;
  } else {
    freeSeatsText = 'Запись закрыта';
  }
  let buttonSignText = '';
  if (clickedCalendarCard.booked) {
    buttonSignText = 'Отменить запись';
  } else {
    buttonSignText = 'Записаться';
  }

  function handleAppointCalendarPopupClick() {
    onSubmitAppointCalendarClick(clickedCalendarCard);
  }
  return (
    // <div className="popup popup_type_description popup_opened">
    <form className="popup__container popup__container_type_calendar">
      <button
        className="popup__close popup__cancel"
        type="button"
        aria-label="Close"
        onClick={onCloseClick}
      />
      <div className="calendar__caption">
        <div className="calendar__info">
          <p className="calendar__type">Волонтёры + дети</p>
          <p className="calendar__weekday">{`${monthOfMeeting} / ${dayNameOfMeeting}`}</p>
        </div>
        <div className="calendar__about">
          <h2 className="section-title calendar__title calendar__title_type_popup">
            {clickedCalendarCard.title}
          </h2>
          <p className="calendar__date">{dayNumberOfMeeting}</p>
        </div>
      </div>
      <div className="calendar__meetup">
        <ul className="calendar__info-list">
          <li className="calendar__info-item">
            <p className="calendar__time">{`${hourStartOfMeeting}:${minuteStartOfMeeting} – ${hourEndOfMeeting}:${minuteEndOfMeeting}`}</p>
          </li>
          <li className="calendar__info-item">
            <p className="calendar__place">{clickedCalendarCard.address}</p>
          </li>
          <li className="calendar__info-item">
            <p className="calendar__contact">{clickedCalendarCard.contact}</p>
          </li>
        </ul>
        <div className="calendar__description">
          <p className="paragraph calendar__desc-paragraph">{clickedCalendarCard.description}</p>
        </div>
        <div className="calendar__submit">
          <button
            className="button button_theme_light button_action_confirm"
            type="button"
            onClick={handleAppointCalendarPopupClick}
            disabled={freeSeats <= 0}
          >
            {buttonSignText}
          </button>
          <p className="calendar__place-left">{freeSeatsText}</p>
        </div>
      </div>
    </form>
    // </div>
  );
}

PopupCalendarDescription.defaultProps = {
  clickedCalendarCard: {},
  onCloseClick: undefined,
  onSubmitAppointCalendarClick: undefined,
};

PopupCalendarDescription.propTypes = {
  clickedCalendarCard: PropTypes.instanceOf(Object),
  onCloseClick: PropTypes.func,
  onSubmitAppointCalendarClick: PropTypes.func,
};

export default PopupCalendarDescription;
