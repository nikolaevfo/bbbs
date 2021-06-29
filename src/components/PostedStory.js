import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

function PostedStory({ onDeleteClick, isEditClicked, setEditClicked, card }) {
  const monthOfMeeting = format(new Date(card.date), 'LLLL', { locale: ru });
  const dayNumberOfMeeting = format(new Date(card.date), 'd', { locale: ru });
  const yearOfMeeting = format(new Date(card.date), 'y', { locale: ru });

  function handleEdition() {
    setEditClicked(!isEditClicked);
  }

  function handleDeleteClick() {
    onDeleteClick(card);
  }

  let imgEmoji = './images/personal-area/good.svg';
  let emojiText = 'Было классно!';
  let emojiInputClassName = 'personal-area__rate personal-area__rate_type_good';
  let emojiLabelClassName =
    'personal-area__radio-phrase personal-area__radio-phrase_type_good personal-area__radio-phrase_type_good_posted';

  if (card.rating === 'neutral') {
    imgEmoji = './images/personal-area/neutral.svg';
    emojiText = 'Нормально';
    emojiInputClassName = 'personal-area__rate personal-area__rate_type_neutral';
    emojiLabelClassName =
      'personal-area__radio-phrase personal-area__radio-phrase_type_neutral personal-area__radio-phrase_type_neutral_posted';
  } else if (card.rating === 'bad') {
    imgEmoji = './images/personal-area/bad.svg';
    emojiText = 'Что-то пошло не так';
    emojiInputClassName = 'personal-area__rate personal-area__rate_type_bad';
    emojiLabelClassName =
      'personal-area__radio-phrase personal-area__radio-phrase_type_bad personal-area__radio-phrase_type_bad_posted';
  }
  return (
    <form className="card-container card-container_type_personal-area">
      <div className="card card_content_media">
        <img src="./images/personal-area/lk.png" alt="Катя" className="personal-area__photo" />
      </div>
      <div className="card personal-area__card personal-area__date-container">
        <div className="personal-area__text-wrap">
          <h2 className="section-title personal-area__card-title">{card.place}</h2>
          <p className="paragraph">{card.description}</p>
        </div>
        <div className="personal-area__card-date">
          <p className="personal-area__card-weekday">{`${monthOfMeeting}, ${yearOfMeeting}`}</p>
          {/* <p className="personal-area__card-weekday">декабрь, 2020</p> */}
          <p className="personal-area__card-day">{dayNumberOfMeeting}</p>
          {/* <p className="personal-area__card-day">05</p> */}
        </div>
        <div className="personal-area__actions">
          <div className="personal-area__rating">
            <div className="personal-area__radio-label">
              <input
                type="radio"
                name="rate"
                // id="good-rate"
                className={emojiInputClassName}
                defaultChecked
              />
              <img className="personal-area__rate-icon" alt="rate" src={imgEmoji} />
              <label htmlFor="good-rate" className={emojiLabelClassName}>
                {emojiText}
              </label>
            </div>
          </div>
          <div className="personal-area__action-elements">
            <p className="caption personal-area__opened-info">{`Открыто ${card.name}`}</p>
            <button
              className="caption personal-area__button
        personal-area__button_action_edit-card"
              type="button"
              onClick={handleEdition}
            >
              Редактировать
            </button>
            <button
              onClick={handleDeleteClick}
              className="caption personal-area__button
        personal-area__button_action_delete-card"
              type="button"
            >
              Удалить
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
export default PostedStory;

PostedStory.defaultProps = {
  onDeleteClick: undefined,
  isEditClicked: undefined,
  setEditClicked: undefined,
  card: {},
  // mainText: undefined,
  // place: undefined,
};

PostedStory.propTypes = {
  onDeleteClick: PropTypes.func,
  isEditClicked: PropTypes.bool,
  setEditClicked: PropTypes.func,
  card: PropTypes.instanceOf(Object),
  // mainText: PropTypes.string,
  // place: PropTypes.string,
};
