/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import StoryForm from './StoryForm';
import PostedStoryEditing from './PostedStoryEditing';
import ProfileCalendarCard from './ProfileCalendarCard';
// import { CurrentContext } from '../contexts/CurrentContext';

import api from '../utils/api/api';

import {
  setProfileNarrativesCardsRedux,
  setProfileCalendarCardsRedux,
  setCityChoicePopupOpenRedux,
  setIsStoryFormRedactOpenRedux,
  setIsLoggedInRedux,
} from '../redux/actions';

function Profile({
  // onDeleteStoryClick,
  // onCityChoiceClick,
  // onProfileInit,
  // profileNarrativesCards,
  // onAddNarrative,
  // onChangeNarrative,
  // profileCalendarCards,
  // currentCity,
  // onSignOut,
  profileNarrativesCardsRedux,
  setProfileNarrativesCardsRedux,
  setProfileCalendarCardsRedux,
  profileCalendarCardsRedux,
  currentCityIdRedux,
  currentCityRedux,
  setCityChoicePopupOpenRedux,
  isLoggedInRedux,
  setIsStoryFormRedactOpenRedux,
  isStoryFormRedactOpenRedux,
  setIsLoggedInRedux,
}) {
  // const context = React.useContext(CurrentContext);
  const isLoggedIn = isLoggedInRedux;

  // загрузка данных
  React.useEffect(() => {
    const access = localStorage.getItem('access');
    api
      .getProfileNarratives(access)
      .then((res) => {
        setProfileNarrativesCardsRedux(res.data);
      })
      .catch((err) => console.log(err));

    api
      .getCalendarCards(access, currentCityIdRedux, isLoggedIn)
      .then((res) => {
        const cardsList = res.data.calendarCards;
        setProfileCalendarCardsRedux(cardsList);
      })
      .catch((err) => console.log(err));
  }, []);

  // const [showStoryForm, setShowStoryForm] = useState(false);

  function handleCityChoiceClick() {
    setCityChoicePopupOpenRedux(true);
  }

  const history = useHistory();

  function handleSignOut() {
    localStorage.clear();
    setIsLoggedInRedux(false);
    history.push('/');
  }

  return (
    <section className=" page__section personal-area">
      <div className="personal-area__user-info">
        <span className="paragraph personal-area__user-link personal-area__user-link_type_city-text">
          {currentCityRedux}.
        </span>
        <button
          type="button"
          className="paragraph personal-area__user-link personal-area__user-link_type_city"
          onClick={handleCityChoiceClick}
        >
          Изменить город
        </button>
        <button
          type="button"
          onClick={handleSignOut}
          className="paragraph personal-area__user-link personal-area__user-link_type_exit"
        >
          Выйти
        </button>
      </div>
      <div className="personal-area__sign-up">
        {profileCalendarCardsRedux.length > 0 ? (
          <h2 className="section-title personal-area__title personal-area__title_type_sign-up">
            Вы записаны на мероприятия:
          </h2>
        ) : (
          <h2 className="section-title personal-area__title personal-area__title_type_sign-up">
            У вас нет записи на мероприятия
          </h2>
        )}
        {profileCalendarCardsRedux.length > 0 && (
          <div className="personal-area__calendar-wrapper">
            {profileCalendarCardsRedux.map((item) => (
              <ProfileCalendarCard card={item} key={item.id} />
            ))}
          </div>
        )}
      </div>
      <div className="personal-area__story">
        <h2 className="section-title personal-area__title">
          Составьте историю вашей дружбы с младшим. Эта страница доступна только вам.
        </h2>
        {!isStoryFormRedactOpenRedux && (
          <div className="personal-area__add-meeting">
            <button
              className="personal-area__add-meeting-button"
              type="button"
              aria-label="addStory"
              onClick={() => setIsStoryFormRedactOpenRedux(true)}
            />
            <p className="caption personal-area__meeting-caption">Добавить встречу</p>
          </div>
        )}
        {isStoryFormRedactOpenRedux && (
          <StoryForm
          // profileNarrativesCards={profileNarrativesCards}
          // onAddNarrative={onAddNarrative}
          // onDeleteClick={() => setIsStoryFormRedactOpenRedux(false)}
          />
        )}
        {profileNarrativesCardsRedux.map((item) => (
          <PostedStoryEditing
            key={item.id}
            // onDeleteClick={onDeleteStoryClick}
            card={item}
            // onChangeNarrative={onChangeNarrative}
          />
        ))}
      </div>
    </section>
  );
}

Profile.defaultProps = {
  // onDeleteStoryClick: undefined,
  // onCityChoiceClick: undefined,
  // onProfileInit: undefined,
  // profileNarrativesCards: [],
  // onAddNarrative: undefined,
  // onChangeNarrative: undefined,
  // profileCalendarCards: [],
  // currentCity: '',
  // onSignOut: undefined,
};

Profile.propTypes = {
  // onDeleteStoryClick: PropTypes.func,
  // onCityChoiceClick: PropTypes.func,
  // onProfileInit: PropTypes.func,
  // profileNarrativesCards: PropTypes.instanceOf(Array),
  // onAddNarrative: PropTypes.func,
  // onChangeNarrative: PropTypes.func,
  // profileCalendarCards: PropTypes.instanceOf(Array),
  // currentCity: PropTypes.string,
  // onSignOut: PropTypes.func,
};

const mapStateToProps = (state) => ({
  profileNarrativesCardsRedux: state.profile.profileNarrativesCards,
  profileCalendarCardsRedux: state.profile.profileCalendarCards,
  isStoryFormRedactOpenRedux: state.profile.isStoryFormRedactOpen,
  currentCityIdRedux: state.app.currentCityId,
  currentCityRedux: state.app.currentCity,
  isLoggedInRedux: state.app.isLoggedIn,
});

const mapDispatchToProps = {
  // setDeleteStoryPopupOpenRedux,
  setProfileNarrativesCardsRedux,
  setProfileCalendarCardsRedux,
  setCityChoicePopupOpenRedux,
  setIsStoryFormRedactOpenRedux,
  setIsLoggedInRedux,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
