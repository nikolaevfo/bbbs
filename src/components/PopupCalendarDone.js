/* eslint-disable no-shadow */
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

import { setIsPopupCalendarDoneOpenRedux } from '../redux/actions';

function PopupCalendarDone({ clickedCalendarCardRedux, setIsPopupCalendarDoneOpenRedux }) {
  const monthOfMeeting = monthTextPadeg(clickedCalendarCardRedux);
  const dayNumberOfMeeting = dayNumber(clickedCalendarCardRedux);
  const hourStartOfMeeting = hourStart(clickedCalendarCardRedux);
  const minuteStartOfMeeting = minuteStart(clickedCalendarCardRedux);
  const hourEndOfMeeting = hourEnd(clickedCalendarCardRedux);
  const minuteEndOfMeeting = minuteEnd(clickedCalendarCardRedux);

  return (
    <form className="popup__container popup__container_type_done">
      <div className="calendar__image-done" />
      <button
        className="popup__close popup__cancel"
        type="button"
        aria-label="Close"
        onClick={() => setIsPopupCalendarDoneOpenRedux(false)}
      />
      <h2 className="section-title calendar__title_type_popup calendar__title_type_popup-done ">
        {`Вы записаны на мероприятие
        ${clickedCalendarCardRedux.title}
        ${dayNumberOfMeeting} ${' '}
        ${monthOfMeeting}${' '}с${' '}${hourStartOfMeeting}:${minuteStartOfMeeting}–
        ${hourEndOfMeeting}:${minuteEndOfMeeting}`}
      </h2>
      <h2 className="section-title calendar__title_type_popup calendar__title_type_popup-done">
        Если у вас не получится прийти — отмените, пожалуйста, запись.
      </h2>
      <button
        className="button calendar__back popup__cancel"
        type="button"
        onClick={() => setIsPopupCalendarDoneOpenRedux(false)}
      >
        Вернуться к календарю
      </button>
    </form>
  );
}

PopupCalendarDone.defaultProps = {
  // clickedCalendarCard: {},
  // onCloseClick: undefined,
};

PopupCalendarDone.propTypes = {
  // clickedCalendarCard: PropTypes.instanceOf(Object),
  // onCloseClick: PropTypes.func,
};

const mapStateToProps = (state) => ({
  clickedCalendarCardRedux: state.calendar.clickedCalendarCard,
});

const mapDispatchToProps = {
  setIsPopupCalendarDoneOpenRedux,
};

export default connect(mapStateToProps, mapDispatchToProps)(PopupCalendarDone);
