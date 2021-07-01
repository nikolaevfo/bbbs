import React from 'react';
import PropTypes from 'prop-types';

function showTags(tags) {
  if (!tags) {
    return '';
  }
  return tags
    .reduce((result, tag) => {
      const concat = `${result}${tag.name} + `;
      return concat;
    }, '')
    .slice(0, -3);
}

function BlockCalendar({ event }) {
  return (
    <article className="calendar main-calendar">
      <div className="calendar__caption">
        <div className="calendar__info">
          <p className="calendar__type">{showTags(event.tags)}</p>
          <p className="calendar__weekday">Декабрь / понедельник</p>
        </div>
        <div className="calendar__about">
          <h2 className="section-title calendar__title">{event.title}</h2>
          <p className="calendar__date">05</p>
        </div>
      </div>
      <div className="calendar__meetup">
        <ul className="calendar__info-list">
          <li className="calendar__info-item">
            <p className="calendar__time">12:00–14:00</p>
          </li>
          <li className="calendar__info-item">
            <p className="calendar__place">{event.address}</p>
          </li>
          <li className="calendar__info-item">
            <p className="calendar__contact">{event.contact}</p>
          </li>
        </ul>
        <div className="calendar__submit">
          <button
            className="button button_theme_light calendar__button_action_sign-up"
            type="button"
          >
            Записаться
          </button>
          <p className="calendar__place-left">
            Осталось
            {event.remainSeats}
            мест
          </p>
          <button className="button calendar__button-dots button_theme_light" type="button">
            &#8226;&#8226;&#8226;
          </button>
        </div>
      </div>
    </article>
  );
}

BlockCalendar.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number,
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        slug: PropTypes.string,
      }),
    ),
    title: PropTypes.string,
    startAt: PropTypes.string,
    endAt: PropTypes.string,
    address: PropTypes.string,
    contact: PropTypes.string,
    remainSeats: PropTypes.number,
    description: PropTypes.string,
    booked: PropTypes.bool,
  }),
};

BlockCalendar.defaultProps = {
  event: {},
};

export default BlockCalendar;
