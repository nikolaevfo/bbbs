import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StoryForm from './StoryForm';
import PostedStoryEditing from './PostedStoryEditing';
import ProfileCalendarCard from './ProfileCalendarCard';

function Profile({
  onDeleteStoryClick,
  onCityChoiceClick,
  onProfileInit,
  profileNarrativesCards,
  onAddNarrative,
  onChangeNarrative,
  profileCalendarCards,
  currentCity,
}) {
  // загрузка данных
  React.useEffect(() => {
    onProfileInit();
  }, []);

  const [showStoryForm, setShowStoryForm] = useState(false);

  return (
    <section className=" page__section personal-area">
      <div className="personal-area__user-info">
        <span className="paragraph personal-area__user-link personal-area__user-link_type_city-text">
          {currentCity}.
        </span>
        <button
          type="button"
          className="paragraph personal-area__user-link personal-area__user-link_type_city"
          onClick={onCityChoiceClick}
        >
          Изменить город
        </button>
        <button
          type="button"
          className="paragraph personal-area__user-link personal-area__user-link_type_exit"
        >
          Выйти
        </button>
      </div>
      <div className="personal-area__sign-up">
        {profileCalendarCards.length > 0 ? (
          <h2 className="section-title personal-area__title personal-area__title_type_sign-up">
            Вы записаны на мероприятия:
          </h2>
        ) : (
          <h2 className="section-title personal-area__title personal-area__title_type_sign-up">
            У вас нет записи на мероприятия
          </h2>
        )}
        {profileCalendarCards.length > 0 && (
          <div className="personal-area__calendar-wrapper">
            {profileCalendarCards.map((item) => (
              <ProfileCalendarCard card={item} key={item.id} />
            ))}
          </div>
        )}
      </div>
      <div className="personal-area__story">
        <h2 className="section-title personal-area__title">
          Составьте историю вашей дружбы с младшим. Эта страница доступна только вам.
        </h2>
        {!showStoryForm && (
          <div className="personal-area__add-meeting">
            <button
              className="personal-area__add-meeting-button"
              type="button"
              aria-label="addStory"
              onClick={() => setShowStoryForm(true)}
            />
            <p className="caption personal-area__meeting-caption">Добавить встречу</p>
          </div>
        )}
        {showStoryForm && (
          <StoryForm
            profileNarrativesCards={profileNarrativesCards}
            onAddNarrative={onAddNarrative}
            onDeleteClick={() => setShowStoryForm(false)}
          />
        )}
        {profileNarrativesCards.map((item) => (
          <PostedStoryEditing
            key={item.id}
            onDeleteClick={onDeleteStoryClick}
            card={item}
            onChangeNarrative={onChangeNarrative}
          />
        ))}
        {/* <PostedStoryEditing
          onDeleteClick={onDeleteStoryClick}
          profileNarrativesCards={profileNarrativesCards}
        /> */}
      </div>
    </section>
  );
}
export default Profile;

Profile.defaultProps = {
  onDeleteStoryClick: undefined,
  onCityChoiceClick: undefined,
  onProfileInit: undefined,
  profileNarrativesCards: [],
  onAddNarrative: undefined,
  onChangeNarrative: undefined,
  profileCalendarCards: [],
  currentCity: '',
};

Profile.propTypes = {
  onDeleteStoryClick: PropTypes.func,
  onCityChoiceClick: PropTypes.func,
  onProfileInit: PropTypes.func,
  profileNarrativesCards: PropTypes.instanceOf(Array),
  onAddNarrative: PropTypes.func,
  onChangeNarrative: PropTypes.func,
  profileCalendarCards: PropTypes.instanceOf(Array),
  currentCity: PropTypes.string,
};
