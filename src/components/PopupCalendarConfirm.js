/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
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
  setIsLoggedInRedux,
  setPopupErrorTextRedux,
  setIsPopupErrorOpenRedux,
  setCalendarDataRedux,
  setMonthListRedux,
  setIsPopupCalendarDescriptionOpenRedux,
  setClickedCalendarCardRedux,
  setIsPopupCalendarConfirmOpenRedux,
  setIsPopupCalendarDoneOpenRedux,
  setPopupCalendarWichWasOpenRedux,
} from '../redux/actions';

import api from '../utils/api/api';

function PopupCalendarConfirm({
  // clickedCalendarCard,
  // onSubmitAppointCalendarClick,
  // onCloseClick,
  calendarDataRedux,
  monthListRedux,
  isPopupCalendarDescriptionOpenRedux,
  clickedCalendarCardRedux,
  isPopupCalendarConfirmOpenRedux,
  isPopupCalendarDoneOpenRedux,
  isPopupErrorOpenRedux,
  currentCityIdRedux,
  currentUserRedux,
  isLoggedInRedux,
  //
  setIsLoggedInRedux,
  setPopupErrorTextRedux,
  setIsPopupErrorOpenRedux,
  setCalendarDataRedux,
  setMonthListRedux,
  setIsPopupCalendarDescriptionOpenRedux,
  setClickedCalendarCardRedux,
  setIsPopupCalendarConfirmOpenRedux,
  setIsPopupCalendarDoneOpenRedux,
  setPopupCalendarWichWasOpenRedux,
}) {
  const monthOfMeeting = monthTextPadeg(clickedCalendarCardRedux);
  const dayNumberOfMeeting = dayNumber(clickedCalendarCardRedux);
  const hourStartOfMeeting = hourStart(clickedCalendarCardRedux);
  const minuteStartOfMeeting = minuteStart(clickedCalendarCardRedux);
  const hourEndOfMeeting = hourEnd(clickedCalendarCardRedux);
  const minuteEndOfMeeting = minuteEnd(clickedCalendarCardRedux);

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
    // todo вынести в функцию
    const newCardsArray = calendarDataRedux.slice(0);
    const ind = newCardsArray.indexOf(clickedCalendarCardRedux);
    newCardsArray[ind].booked = true;
    setCalendarDataRedux(newCardsArray);
    setIsPopupCalendarConfirmOpenRedux(false);
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

PopupCalendarConfirm.defaultProps = {
  // clickedCalendarCard: {},
  // onSubmitAppointCalendarClick: undefined,
  // onCloseClick: undefined,
  // onCloseClick: undefined,
  // onSubmit: undefined,
  // isFormValid: true,
  // handleChange: undefined,
};

PopupCalendarConfirm.propTypes = {
  // clickedCalendarCard: PropTypes.instanceOf(Object),
  // onSubmitAppointCalendarClick: PropTypes.func,
  // onCloseClick: PropTypes.func,
  // onCloseClick: PropTypes.func,
  // onSubmit: PropTypes.func,
  // isFormValid: PropTypes.bool,
  // handleChange: PropTypes.func,
};

const mapStateToProps = (state) => ({
  calendarDataRedux: state.calendar.calendarData,
  monthListRedux: state.calendar.monthList,
  isPopupCalendarDescriptionOpenRedux: state.calendar.isPopupCalendarDescriptionOpen,
  clickedCalendarCardRedux: state.calendar.clickedCalendarCard,
  isPopupCalendarConfirmOpenRedux: state.calendar.isPopupCalendarConfirmOpen,
  isPopupCalendarDoneOpenRedux: state.calendar.isPopupCalendarDoneOpen,
  isPopupErrorOpenRedux: state.calendar.isPopupErrorOpen,
  currentCityIdRedux: state.app.currentCityId,
  currentUserRedux: state.app.currentUser,
  isLoggedInRedux: state.app.isLoggedIn,
});

const mapDispatchToProps = {
  setIsLoggedInRedux,
  setPopupErrorTextRedux,
  setIsPopupErrorOpenRedux,
  setCalendarDataRedux,
  setMonthListRedux,
  setIsPopupCalendarDescriptionOpenRedux,
  setClickedCalendarCardRedux,
  setIsPopupCalendarConfirmOpenRedux,
  setIsPopupCalendarDoneOpenRedux,
  setPopupCalendarWichWasOpenRedux,
};
export default connect(mapStateToProps, mapDispatchToProps)(PopupCalendarConfirm);
