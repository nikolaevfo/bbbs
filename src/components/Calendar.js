import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { CurrentContext } from '../contexts/CurrentContext';

import CalendarCard from './CalendarCard';

function Calendar({
  onCalendarInit,
  calendarData,
  onOpenCalendarDescriptionPopup,
  onAppointCalendarClick,
  monthList,
}) {
  const context = React.useContext(CurrentContext);
  // перемотка в начало страницы
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // загрузка данных
  React.useEffect(() => {
    onCalendarInit();
  }, [context.currentUser]);

  const [cardsListFiltered, setCardsListFiltered] = useState([]);
  const [monthChecked, setMonthChecked] = useState('');

  function getMonthName(card) {
    return format(new Date(card.startAt), 'LLLL', { locale: ru });
  }

  function handleMonthElementClick(e) {
    setMonthChecked(e.target.id);
    setCardsListFiltered(calendarData.filter((item) => getMonthName(item) === e.target.id));
  }
  React.useEffect(() => {
    if (calendarData) {
      setCardsListFiltered(calendarData.slice(0));
    }
  }, [monthList]);

  return (
    <>
      <div className="main">
        <section className="lead page__section">
          <h1 className="main-title">Календарь</h1>
          <div className="tags calendar__tags">
            <ul className="tags__list tags__list_type_calendar">
              {monthList.map((item) => (
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
  onCalendarInit: undefined,
  calendarData: [],
  onOpenCalendarDescriptionPopup: undefined,
  onAppointCalendarClick: undefined,
  monthList: [],
};

Calendar.propTypes = {
  onCalendarInit: PropTypes.func,
  calendarData: PropTypes.instanceOf(Array),
  onOpenCalendarDescriptionPopup: PropTypes.func,
  onAppointCalendarClick: PropTypes.func,
  monthList: PropTypes.instanceOf(Array),
};

export default Calendar;
