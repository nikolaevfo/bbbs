/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
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
  //
  setMainPageCalendarCardRedux,
} from '../redux/actions';

import api from '../utils/api/api';

function CalendarCard({
  card,
  id,
  // onOpenCalendarDescriptionPopup,
  // onAppointCalendarCardClick,
  //
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
  //
  mainPageCalendarCardRedux,
  setMainPageCalendarCardRedux,
}) {
  const monthOfMeeting = monthText(card);
  const dayNameOfMeeting = dayName(card);
  const dayNumberOfMeeting = dayNumber(card);
  const hourStartOfMeeting = hourStart(card);
  const minuteStartOfMeeting = minuteStart(card);
  const hourEndOfMeeting = hourEnd(card);
  const minuteEndOfMeeting = minuteEnd(card);

  const freeSeats = card.remainSeats || card.seats - card.takenSeats;

  const freeSeatsText = toGetFreeSeatsText(card, freeSeats);

  const history = useHistory();

  let buttonSignText = '';
  if (card.booked) {
    buttonSignText = 'Отменить запись';
  } else {
    buttonSignText = 'Записаться';
  }

  function handleOpenCalendarCardClick() {
    // onOpenCalendarDescriptionPopup(card);
    setIsPopupCalendarDescriptionOpenRedux(true);
    setClickedCalendarCardRedux(card);
  }
  function handleAppointCalendarCardClick() {
    // onAppointCalendarCardClick(card);
    const access = localStorage.getItem('access');
    setPopupErrorTextRedux('Что-то пошло не так, попробуйте записаться снова');
    if (!card.booked) {
      setClickedCalendarCardRedux(card);
      setIsPopupCalendarConfirmOpenRedux(true);
    } else {
      api
        .deleteAppointToEvent(access, card.id)
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
        const ind = newCardsArray.indexOf(card);
        newCardsArray[ind].booked = false;
        setCalendarDataRedux(newCardsArray);
      }
    }
  }
  return (
    <article className={`calendar ${card.booked ? 'calendar_selected' : ''}`} id={id}>
      <div className="calendar__caption">
        <div className="calendar__info">
          <p className="calendar__type">Волонтёры + дети</p>
          <p className="calendar__weekday">{`${monthOfMeeting} / ${dayNameOfMeeting}`}</p>
        </div>
        <div className="calendar__about">
          <h2 className="section-title calendar__title">{card.title}</h2>
          <p className="calendar__date">{dayNumberOfMeeting}</p>
        </div>
      </div>
      <div className="calendar__meetup">
        <ul className="calendar__info-list">
          <li className="calendar__info-item">
            <p className="calendar__time">{`${hourStartOfMeeting}:${minuteStartOfMeeting} – ${hourEndOfMeeting}:${minuteEndOfMeeting}`}</p>
          </li>
          <li className="calendar__info-item">
            <p className="calendar__place">{card.address}</p>
          </li>
          <li className="calendar__info-item">
            <p className="calendar__contact">{card.contact}</p>
          </li>
        </ul>
        <div className="calendar__submit">
          <button
            className={`button button_theme_light calendar__button  calendar__button_action_sign-up ${
              card.booked ? 'calendar__button_selected' : ''
            }`}
            type="button"
            disabled={freeSeats <= 0}
            onClick={handleAppointCalendarCardClick}
          >
            {buttonSignText}
          </button>
          <p className="calendar__place-left">{freeSeatsText}</p>
          <button
            className="button calendar__button-dots button_theme_light"
            type="button"
            onClick={handleOpenCalendarCardClick}
          >
            &#8226;&#8226;&#8226;
          </button>
        </div>
      </div>
    </article>
  );
}

CalendarCard.defaultProps = {
  card: {},
  id: undefined,
  // onOpenCalendarDescriptionPopup: undefined,
  // onAppointCalendarCardClick: undefined,
};

CalendarCard.propTypes = {
  card: PropTypes.instanceOf(Object),
  id: PropTypes.number,
  // onOpenCalendarDescriptionPopup: PropTypes.func,
  // onAppointCalendarCardClick: PropTypes.func,
};

const mapStateToProps = (state) => ({
  calendarDataRedux: state.calendar.calendarData,
  monthListRedux: state.calendar.monthList,
  isPopupCalendarDescriptionOpenRedux: state.calendar.isPopupCalendarDescriptionOpen,
  clickedCalendarCardRedux: state.calendar.clickedCalendarCard,
  isPopupCalendarConfirmOpenRedux: state.calendar.isPopupCalendarConfirmOpen,
  isPopupCalendarDoneOpenRedux: state.calendar.isPopupCalendarDoneOpen,
  isPopupErrorOpenRedux: state.calendar.isPopupErrorOpen,
  // profileCalendarCardsRedux: state.profile.profileCalendarCards,
  // isStoryFormRedactOpenRedux: state.profile.isStoryFormRedactOpen,
  // currentCityRedux: state.app.currentCity,
  currentCityIdRedux: state.app.currentCityId,
  currentUserRedux: state.app.currentUser,
  isLoggedInRedux: state.app.isLoggedIn,
  //
  mainPageCalendarCardRedux: state.mainPage.mainPageCalendarCard,
});

const mapDispatchToProps = {
  // setDeleteStoryPopupOpenRedux,
  // setProfileNarrativesCardsRedux,
  // setProfileCalendarCardsRedux,
  // setCityChoicePopupOpenRedux,
  // setIsStoryFormRedactOpenRedux,
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
  //
  setMainPageCalendarCardRedux,
};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarCard);
