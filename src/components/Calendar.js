/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { CurrentContext } from '../contexts/CurrentContext';
import scrollToUp from '../hooks/scrollToUp';
import { monthText } from '../utils/toGetDate';

import CalendarCard from './CalendarCard';

import {
  setIsLoggedInRedux,
  setCalendarDataRedux,
  setMonthListRedux,
  setIsPopupCalendarDescriptionOpenRedux,
  setClickedCalendarCardRedux,
  setIsPopupCalendarConfirmOpenRedux,
  setIsPopupCalendarDoneOpenRedux,
  setPopupCalendarWichWasOpenRedux,
} from '../redux/actions';

import api from '../utils/api/api';
import toGetMonthListShorter from '../utils/toGetMonthListShorter';

function Calendar({
  // onCalendarInit,
  // calendarData,
  onOpenCalendarDescriptionPopup,
  onAppointCalendarClick,
  // monthList,
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
  setCalendarDataRedux,
  setMonthListRedux,
  setIsPopupCalendarDescriptionOpenRedux,
  setClickedCalendarCardRedux,
  setIsPopupCalendarConfirmOpenRedux,
  setIsPopupCalendarDoneOpenRedux,
  setPopupCalendarWichWasOpenRedux,
}) {
  // const context = React.useContext(CurrentContext);
  // перемотка в начало страницы
  scrollToUp();

  // загрузка данных
  React.useEffect(() => {
    const access = localStorage.getItem('access');
    api
      .getCalendarCards(access, currentCityIdRedux, isLoggedInRedux)
      .then((res) => {
        const cardsList = res.data.calendarCards;
        setCalendarDataRedux(cardsList);
        const newMonthList = toGetMonthListShorter(cardsList);
        setMonthListRedux(newMonthList);
      })
      .catch((err) => console.log(err));
  }, [currentUserRedux]);

  const [cardsListFiltered, setCardsListFiltered] = useState([]);
  const [monthChecked, setMonthChecked] = useState('');

  // function getMonthName(card) {
  //   return format(new Date(card.startAt), 'LLLL', { locale: ru });
  // }

  function handleMonthElementClick(e) {
    setMonthChecked(e.target.id);
    setCardsListFiltered(calendarDataRedux.filter((item) => monthText(item) === e.target.id));
  }
  React.useEffect(() => {
    if (calendarDataRedux) {
      setCardsListFiltered(calendarDataRedux.slice(0));
    }
  }, [monthListRedux]);

  return (
    <>
      <div className="main">
        <section className="lead page__section">
          <h1 className="main-title">Календарь</h1>
          <div className="tags calendar__tags">
            <ul className="tags__list tags__list_type_calendar">
              {monthListRedux.map((item) => (
                <li className="tags__list-item" key={item}>
                  <button
                    className={`button tags__button ${
                      item === monthChecked && 'tags__button_active'
                    }`}
                    type="button"
                    onClick={handleMonthElementClick}
                    id={item}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="calendar-container page__section">
          <>
            {cardsListFiltered.map((item) => (
              <CalendarCard
                key={item.id}
                id={item.id}
                card={item}
                onOpenCalendarDescriptionPopup={onOpenCalendarDescriptionPopup}
                onAppointCalendarCardClick={onAppointCalendarClick}
              />
            ))}
          </>
        </section>
      </div>
    </>
  );
}

Calendar.defaultProps = {
  // onCalendarInit: undefined,
  // calendarData: [],
  // onOpenCalendarDescriptionPopup: undefined,
  // onAppointCalendarClick: undefined,
  // monthList: [],
};

Calendar.propTypes = {
  // onCalendarInit: PropTypes.func,
  // calendarData: PropTypes.instanceOf(Array),
  // onOpenCalendarDescriptionPopup: PropTypes.func,
  // onAppointCalendarClick: PropTypes.func,
  // monthList: PropTypes.instanceOf(Array),
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
});

const mapDispatchToProps = {
  // setDeleteStoryPopupOpenRedux,
  // setProfileNarrativesCardsRedux,
  // setProfileCalendarCardsRedux,
  // setCityChoicePopupOpenRedux,
  // setIsStoryFormRedactOpenRedux,
  setIsLoggedInRedux,
  setCalendarDataRedux,
  setMonthListRedux,
  setIsPopupCalendarDescriptionOpenRedux,
  setClickedCalendarCardRedux,
  setIsPopupCalendarConfirmOpenRedux,
  setIsPopupCalendarDoneOpenRedux,
  setPopupCalendarWichWasOpenRedux,
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
