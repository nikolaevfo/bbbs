/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import toGetFreeSeatsText from '../utils/toGetFreeSeatsText';
import {
  monthText,
  dayName,
  dayNumber,
  hourStart,
  minuteStart,
  hourEnd,
  minuteEnd,
} from '../utils/toGetDate';

import {
  setPopupErrorTextRedux,
  setIsPopupErrorOpenRedux,
  setCalendarDataRedux,
  setIsPopupCalendarDescriptionOpenRedux,
  setIsPopupCalendarDoneOpenRedux,
  setPopupCalendarWichWasOpenRedux,
  //
  setMainPageCalendarCardRedux,
} from '../redux/actions';

import api from '../utils/api/api';

function PopupCalendarDescription({
  clickedCalendarCardRedux,
  calendarDataRedux,
  mainPageCalendarCardRedux,
  setCalendarDataRedux,
  setIsPopupCalendarDescriptionOpenRedux,
  setIsPopupCalendarDoneOpenRedux,
  setMainPageCalendarCardRedux,
  setIsPopupErrorOpenRedux,
  setPopupErrorTextRedux,
  setPopupCalendarWichWasOpenRedux,
}) {
  const monthOfMeeting = monthText(clickedCalendarCardRedux);
  const dayNameOfMeeting = dayName(clickedCalendarCardRedux);
  const dayNumberOfMeeting = dayNumber(clickedCalendarCardRedux);
  const hourStartOfMeeting = hourStart(clickedCalendarCardRedux);
  const minuteStartOfMeeting = minuteStart(clickedCalendarCardRedux);
  const hourEndOfMeeting = hourEnd(clickedCalendarCardRedux);
  const minuteEndOfMeeting = minuteEnd(clickedCalendarCardRedux);

  const history = useHistory();

  const freeSeats =
    clickedCalendarCardRedux.remainSeats ||
    clickedCalendarCardRedux.seats - clickedCalendarCardRedux.takenSeats;

  const freeSeatsText = toGetFreeSeatsText(clickedCalendarCardRedux, freeSeats);

  let buttonSignText = '';
  if (clickedCalendarCardRedux.booked) {
    buttonSignText = 'Отменить запись';
  } else {
    buttonSignText = 'Записаться';
  }

  function disappoint(access) {
    api
      .deleteAppointToEvent(access, clickedCalendarCardRedux.id)
      .then(() => {
        // console.log(res);
      })
      .catch(() => {
        setIsPopupErrorOpenRedux(true);
      });
    // handleChangeAppoitnCalendarRedux(card, false);

    if (history.location.pathname === '/') {
      const newCard = { ...mainPageCalendarCardRedux };
      newCard.booked = false;
      setMainPageCalendarCardRedux(newCard);
    } else {
      const newCardsArray = calendarDataRedux.slice(0);
      const ind = newCardsArray.indexOf(clickedCalendarCardRedux);
      newCardsArray[ind].booked = false;
      setCalendarDataRedux(newCardsArray);
    }
    setIsPopupCalendarDescriptionOpenRedux(false);
  }

  function appoint(access) {
    api
      .appointToEvent(access, clickedCalendarCardRedux.id)
      .then(() => {
        // console.log(res);
      })
      .catch(() => {
        setIsPopupCalendarDescriptionOpenRedux(false);
        setIsPopupErrorOpenRedux(true);
      });

    if (history.location.pathname === '/') {
      const newCard = { ...mainPageCalendarCardRedux };
      newCard.booked = true;
      setMainPageCalendarCardRedux(newCard);
    } else {
      const newCardsArray = calendarDataRedux.slice(0);
      const ind = newCardsArray.indexOf(clickedCalendarCardRedux);
      newCardsArray[ind].booked = true;
      setCalendarDataRedux(newCardsArray);
    }

    setIsPopupCalendarDescriptionOpenRedux(false);
    setIsPopupCalendarDoneOpenRedux(true);
  }

  function handleAppointCalendarPopupClick() {
    // onSubmitAppointCalendarClick(clickedCalendarCardRedux);
    setPopupCalendarWichWasOpenRedux('isPopupCalendarDescriptionOpen');
    setPopupErrorTextRedux('Что-то пошло не так, попробуйте снова');
    const access = localStorage.getItem('access');
    if (clickedCalendarCardRedux.booked) {
      disappoint(access);
    } else {
      appoint(access);
    }
  }
  return (
    <form className="popup__container popup__container_type_calendar">
      <button
        className="popup__close popup__cancel"
        type="button"
        aria-label="Close"
        onClick={() => {
          setIsPopupCalendarDescriptionOpenRedux(false);
        }}
      />
      <div className="calendar__caption">
        <div className="calendar__info">
          <p className="calendar__type">Волонтёры + дети</p>
          <p className="calendar__weekday">{`${monthOfMeeting} / ${dayNameOfMeeting}`}</p>
        </div>
        <div className="calendar__about">
          <h2 className="section-title calendar__title calendar__title_type_popup">
            {clickedCalendarCardRedux.title}
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
            <p className="calendar__place">{clickedCalendarCardRedux.address}</p>
          </li>
          <li className="calendar__info-item">
            <p className="calendar__contact">{clickedCalendarCardRedux.contact}</p>
          </li>
        </ul>
        <div className="calendar__description">
          <p className="paragraph calendar__desc-paragraph">
            {clickedCalendarCardRedux.description}
          </p>
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
  );
}

PopupCalendarDescription.defaultProps = {};

PopupCalendarDescription.propTypes = {};

const mapStateToProps = (state) => ({
  calendarDataRedux: state.calendar.calendarData,
  clickedCalendarCardRedux: state.calendar.clickedCalendarCard,
  //
  mainPageCalendarCardRedux: state.mainPage.mainPageCalendarCard,
});

const mapDispatchToProps = {
  setPopupErrorTextRedux,
  setIsPopupErrorOpenRedux,
  setCalendarDataRedux,
  setIsPopupCalendarDescriptionOpenRedux,
  setIsPopupCalendarDoneOpenRedux,
  setPopupCalendarWichWasOpenRedux,
  //
  setMainPageCalendarCardRedux,
};

export default connect(mapStateToProps, mapDispatchToProps)(PopupCalendarDescription);
