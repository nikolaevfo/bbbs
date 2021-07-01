import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import ImageUploader from './ImageUploader';

import imageOfNarrative1 from '../images/personal-area/lk.png';

function StoryFormOnEdit({ card, onChangeNarrative, setEditClicked }) {
  const monthOfMeeting = format(new Date(card.date), 'MM', { locale: ru });
  const dayNumberOfMeeting = format(new Date(card.date), 'dd', { locale: ru });
  const yearOfMeeting = format(new Date(card.date), 'y', { locale: ru });

  const { register, handleSubmit, formState, setValue } = useForm({ mode: 'onChange' });
  const [goodRateChecked, setGoodRateChecked] = React.useState(false);
  const [neutralRateChecked, setNeutralRateChecked] = React.useState(false);
  const [badRateChecked, setBadRateChecked] = React.useState(false);
  const { errors } = formState;

  const [isFormValid, setIsFormValid] = React.useState(true);

  function onChangeGood() {
    setNeutralRateChecked(false);
    setBadRateChecked(false);
    setGoodRateChecked(true);
  }

  function onChangeNeutral() {
    setGoodRateChecked(false);
    setBadRateChecked(false);
    setNeutralRateChecked(true);
  }

  function onChangeBad() {
    setGoodRateChecked(false);
    setNeutralRateChecked(false);
    setBadRateChecked(true);
  }

  function onSubmit(data) {
    let rate = 'good';
    if (neutralRateChecked) {
      rate = 'neutral';
    } else if (badRateChecked) {
      rate = 'bad';
    }
    onChangeNarrative({
      id: card.id,
      place: data.place,
      description: data.story,
      date: data.date,
      name: 'Анастасии П.',
      img: { imageOfNarrative1 },
      rating: rate,
    });
    setEditClicked(false);
  }

  React.useEffect(() => {
    if (errors.place || errors.date || errors.story) {
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
    }
  }, [formState]);

  React.useEffect(() => {
    setValue('place', card.place);
    setValue('date', `${yearOfMeeting}-${monthOfMeeting}-${dayNumberOfMeeting}`);
    setValue('story', card.description);
    onChangeGood();
    document.getElementById('good-rate').checked = true;
  }, []);

  return (
    <div className="card-container card-container_type_personal-area">
      <div className="card personal-area__card personal-area__card_type_add-photo">
        <ImageUploader />
      </div>
      <div className="card personal-area__card personal-area__card_type_content">
        <form
          className="personal-area__form"
          onSubmit={handleSubmit(onSubmit)}
          name="add-story-form"
        >
          <input
            // eslint-disable-next-line
            {...register('place', { required: true, minLength: 2, maxLength: 30 })}
            type="text"
            // defaultValue={card.place}
            className="personal-area__form-input"
          />
          <input
            // eslint-disable-next-line
            {...register('date', { required: true })}
            type="date"
            // value={`${yearOfMeeting}-${monthOfMeeting}-${dayNumberOfMeeting}`}
            placeholder="Дата&emsp;"
            className="personal-area__form-input"
          />
          <textarea
            // type="text"
            // eslint-disable-next-line
            {...register('story', { required: true, minLength: 2 })}
            className="personal-area__form-input personal-area__form-input_type_textarea"
            // defaultValue={card.description}
          />
          <div className="personal-area__rating">
            <div className="personal-area__radio-label">
              <input
                type="radio"
                // eslint-disable-next-line
                {...register('rate', { required: true })}
                name="rate"
                id="good-rate"
                className="personal-area__rate personal-area__rate_type_good"
                onClick={onChangeGood}
              />
              <img
                className="personal-area__rate-icon"
                alt="good rate"
                src="./images/personal-area/good.svg"
              />
              {/* eslint-disable-next-line */}
              <label
                htmlFor="good-rate"
                className="personal-area__radio-phrase personal-area__radio-phrase_type_good"
              >
                {goodRateChecked && 'Было классно!'}
                {!goodRateChecked &&
                  !badRateChecked &&
                  !neutralRateChecked &&
                  'Оцените проведенное время'}
              </label>
            </div>
            <div className="personal-area__radio-label">
              <input
                type="radio"
                // eslint-disable-next-line
                {...register('rate', { required: true })}
                name="rate"
                id="neutral-rate"
                onClick={onChangeNeutral}
                className="personal-area__rate personal-area__rate_type_neutral"
              />
              <img
                className="personal-area__rate-icon"
                alt="neutral rate"
                src="./images/personal-area/neutral.svg"
              />
              {/* eslint-disable-next-line */}
              <label
                htmlFor="neutral-rate"
                className="personal-area__radio-phrase personal-area__radio-phrase_type_neutral"
              >
                {neutralRateChecked ? 'Нормально' : ''}
              </label>
            </div>
            <div className="personal-area__radio-label">
              <input
                type="radio"
                // eslint-disable-next-line
                {...register('rate', { required: true })}
                name="rate"
                id="bad-rate"
                onClick={onChangeBad}
                className="personal-area__rate personal-area__rate_type_bad"
              />
              <img
                className="personal-area__rate-icon"
                alt="neutral rate"
                src="./images/personal-area/bad.svg"
              />
              {/* eslint-disable-next-line */}
              <label
                htmlFor="bad-rate"
                className="personal-area__radio-phrase personal-area__radio-phrase_type_bad"
              >
                {badRateChecked ? 'Что-то пошло не так' : ''}
              </label>
            </div>
          </div>
          <div className="personal-area__buttons">
            <button disabled={!isFormValid} className="button button__add-story" type="submit">
              Редактировать
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default StoryFormOnEdit;

StoryFormOnEdit.defaultProps = {
  card: {},
  onChangeNarrative: undefined,
  setEditClicked: undefined,
};

StoryFormOnEdit.propTypes = {
  card: PropTypes.instanceOf(Object),
  onChangeNarrative: PropTypes.func,
  setEditClicked: PropTypes.func,
};
