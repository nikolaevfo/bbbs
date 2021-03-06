/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import PropTypes from 'prop-types';
import {
  monthTextPadeg,
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
  setIsPopupCalendarConfirmOpenRedux,
  setIsPopupCalendarDoneOpenRedux,
  setPopupCalendarWichWasOpenRedux,
  //
  setMainPageCalendarCardRedux,
} from '../redux/actions';

import api from '../utils/api/api';

function PopupCalendarConfirm({
  calendarDataRedux,
  clickedCalendarCardRedux,
  //
  setPopupErrorTextRedux,
  setIsPopupErrorOpenRedux,
  setCalendarDataRedux,
  setIsPopupCalendarConfirmOpenRedux,
  setIsPopupCalendarDoneOpenRedux,
  setPopupCalendarWichWasOpenRedux,
  //
  mainPageCalendarCardRedux,
  setMainPageCalendarCardRedux,
}) {
  const monthOfMeeting = monthTextPadeg(clickedCalendarCardRedux);
  const dayNumberOfMeeting = dayNumber(clickedCalendarCardRedux);
  const hourStartOfMeeting = hourStart(clickedCalendarCardRedux);
  const minuteStartOfMeeting = minuteStart(clickedCalendarCardRedux);
  const hourEndOfMeeting = hourEnd(clickedCalendarCardRedux);
  const minuteEndOfMeeting = minuteEnd(clickedCalendarCardRedux);

  const history = useHistory();

  function handleAppointCalendarPopupClick() {
    // onSubmitAppointCalendarClick(clickedCalendarCardRedux);
    setPopupCalendarWichWasOpenRedux('isPopupCalendarConfirmOpen');
    setPopupErrorTextRedux('Что-то пошло не так, попробуйте записаться снова');
    const access = localStorage.getItem('access');
    api
      .appointToEvent(access, clickedCalendarCardRedux.id)
      .then(() => {
        // console.log(res);
      })
      .catch(() => {
        setIsPopupCalendarConfirmOpenRedux(false);
        setIsPopupErrorOpenRedux(true);
      });

    if (history.location.pathname === '/') {
      const newCard = { ...mainPageCalendarCardRedux };
      newCard.booked = true;
      setMainPageCalendarCardRedux(newCard);
      setIsPopupCalendarConfirmOpenRedux(false);
    } else {
      const newCardsArray = calendarDataRedux.slice(0);
      const ind = newCardsArray.indexOf(clickedCalendarCardRedux);
      newCardsArray[ind].booked = true;
      setCalendarDataRedux(newCardsArray);
      setIsPopupCalendarConfirmOpenRedux(false);
    }
    setIsPopupCalendarDoneOpenRedux(true);
  }

  return (
    <form className="popup__container popup__container_type_confirmation">
      <button
        className="popup__close popup__cancel"
        type="button"
        aria-label="Close"
        onClick={() => setIsPopupCalendarConfirmOpenRedux(false)}
      />
      <h2 className="section-title calendar__title_type_popup calendar__title_type_confirmation">
        {`Подтвердить запись на мероприятие
        ${clickedCalendarCardRedux.title}
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
        <button
          className="button popup__cancel"
          type="button"
          onClick={() => setIsPopupCalendarConfirmOpenRedux(false)}
        >
          Отменить
        </button>
      </div>
    </form>
  );
}

PopupCalendarConfirm.defaultProps = {};

PopupCalendarConfirm.propTypes = {};

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
  setIsPopupCalendarConfirmOpenRedux,
  setIsPopupCalendarDoneOpenRedux,
  setPopupCalendarWichWasOpenRedux,
  //
  setMainPageCalendarCardRedux,
};
export default connect(mapStateToProps, mapDispatchToProps)(PopupCalendarConfirm);
