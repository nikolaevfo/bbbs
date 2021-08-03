/* eslint-disable no-unused-vars */
/* eslint-disable import/named */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Modal from 'react-modal';

import { connect } from 'react-redux';

import {
  setCityChoicePopupOpenRedux,
  setCurrentCityIdRedux,
  setCurrentCityRedux,
  setIsPopupSigninOpenRedux,
  setIsLoggedInRedux,
  setCurrentUserRedux,
  setIsPopupErrorOpenRedux,
  //
  setMainPageDataRedux,
  setMainPageCalendarCardRedux,
  //
  setIsPopupCalendarDescriptionOpenRedux,
  setIsPopupCalendarConfirmOpenRedux,
  setIsPopupCalendarDoneOpenRedux,
  //
  setIsPopupWhereToGoOpenRedux,
} from '../redux/actions';

import { CurrentContext } from '../contexts/CurrentContext';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Calendar from './Calendar';
import Profile from './Profile';
import About from './About';
import WhereToGo from './WhereToGo';
import Questions from './Questions';
import PopupDeleteStory from './PopupDeleteStory';
import PopupCityChoice from './PopupCityChoice';
import PopupCalendarDescription from './PopupCalendarDescription';
import PopupCalendarConfirm from './PopupCalendarConfirm';
import PopupCalendarDone from './PopupCalendarDone';
import PopupSignin from './PopupSignin';
import PopupError from './PopupError';
import PopupWhereToGo from './PopupWhereToGo';
import ReadAndWatch from './ReadAndWatch';
import Dictionary from './Dictionary';
import Video from './Video';
import Articles from './Articles';
import Films from './Films';
import Books from './Books';
import Rights from './Rights';
import Stories from './Stories';

function App({
  // app
  currentCityIdRedux,
  isCityChoicePopupOpenRedux,
  setCityChoicePopupOpenRedux,
  setCurrentCityIdRedux,
  setCurrentCityRedux,
  isPopupSigninOpenRedux,
  setIsPopupSigninOpenRedux,
  isLoggedInRedux,
  currentUserRedux,
  setIsLoggedInRedux,
  setCurrentUserRedux,
  isPopupErrorOpenRedux,
  setIsPopupErrorOpenRedux,
  // profile
  isDeleteStoryPopupOpenRedux,
  //
  isPopupCalendarDescriptionOpenRedux,
  isPopupCalendarConfirmOpenRedux,
  isPopupCalendarDoneOpenRedux,
  setIsPopupCalendarDescriptionOpenRedux,
  setIsPopupCalendarConfirmOpenRedux,
  //
  isPopupWhereToGoOpenRedux,
  setIsPopupWhereToGoOpenRedux,
}) {
  // context
  const isLoggedIn = isLoggedInRedux;
  const currentUser = currentUserRedux;

  const currentCityId = currentCityIdRedux;

  // signin=================================================================================
  function handelAppInit() {
    setIsPopupSigninOpenRedux(!localStorage.getItem('access'));
  }

  React.useEffect(() => {
    handelAppInit();
  }, [currentUser]);

  // проверка авторизации при запуске==================================
  React.useEffect(() => {
    if (localStorage.getItem('access')) {
      // api.ckeckToken(JSON.parse(localStorage.access));
      setIsLoggedInRedux(true);
      const localUsername = JSON.parse(localStorage.username);
      setCurrentUserRedux({ username: localUsername });
    }
    if (localStorage.getItem('city')) {
      setCurrentCityIdRedux(JSON.parse(localStorage.cityId));
      setCurrentCityRedux(JSON.parse(localStorage.city));
    }
  }, []);

  // city modal open on init=======================================================================
  React.useEffect(() => {
    if (isLoggedIn && !currentCityId) {
      setCityChoicePopupOpenRedux(true);
    }
  }, [isLoggedIn]);

  Modal.setAppElement('#root');

  return (
    <CurrentContext.Provider value={{}}>
      <div className="page">
        <Header />
        <Switch>
          <Route exact path="/">
            <Helmet>
              <title>Главная</title>
            </Helmet>
            <Main />
          </Route>
          <Route exact path="/profile">
            <Helmet>
              <title>Профиль</title>
            </Helmet>
            <Profile />
          </Route>
          <Route exact path="/calendar">
            <Helmet>
              <title>Календарь</title>
            </Helmet>
            <Calendar />
          </Route>

          <Route exact path="/place">
            <Helmet>
              <title>Куда пойти</title>
            </Helmet>
            <WhereToGo />
          </Route>

          <Route exact path="/questions">
            <Helmet>
              <title>Ответы на вопросы</title>
            </Helmet>
            <Questions />
          </Route>

          <Route exact path="/read-and-watch">
            <Helmet>
              <title>Читать и смотреть</title>
            </Helmet>
            <ReadAndWatch />
          </Route>

          <Route exact path="/dictionary">
            <Helmet>
              <title>Справочник</title>
            </Helmet>
            <Dictionary />
          </Route>

          <Route exact path="/video">
            <Helmet>
              <title>Видео</title>
            </Helmet>
            <Video />
          </Route>

          <Route exact path="/articles">
            <Helmet>
              <title>Статьи</title>
            </Helmet>
            <Articles />
          </Route>

          <Route exact path="/films">
            <Helmet>
              <title>Фильмы</title>
            </Helmet>
            <Films />
          </Route>

          <Route exact path="/books">
            <Helmet>
              <title>Книги</title>
            </Helmet>
            <Books />
          </Route>

          <Route exact path="/rights">
            <Helmet>
              <title>Права детей</title>
            </Helmet>
            <Rights />
          </Route>

          <Route exact path="/stories">
            <Helmet>
              <title>Истории</title>
            </Helmet>
            <Stories />
          </Route>

          <Route exact path="/about">
            <Helmet>
              <title>О проекте</title>
            </Helmet>
            <About />
          </Route>
        </Switch>
        <Footer />
        <PopupDeleteStory isOpen={isDeleteStoryPopupOpenRedux} />
        <Modal
          isOpen={isCityChoicePopupOpenRedux}
          onRequestClose={() => {
            setCityChoicePopupOpenRedux(false);
          }}
          shouldCloseOnOverlayClick
          className="popup__modal"
          overlayClassName="popup__overlay"
        >
          <PopupCityChoice />
        </Modal>

        <Modal
          isOpen={isPopupSigninOpenRedux}
          className="popup__modal"
          overlayClassName="popup__overlay"
        >
          <PopupSignin />
        </Modal>
        <Modal
          isOpen={isPopupCalendarDescriptionOpenRedux}
          onRequestClose={() => {
            setIsPopupCalendarDescriptionOpenRedux(false);
          }}
          shouldCloseOnOverlayClick
          className="popup__modal"
          overlayClassName="popup__overlay"
        >
          <PopupCalendarDescription />
        </Modal>

        <Modal
          isOpen={isPopupCalendarConfirmOpenRedux}
          onRequestClose={() => setIsPopupCalendarConfirmOpenRedux(false)}
          shouldCloseOnOverlayClick
          className="popup__modal"
          overlayClassName="popup__overlay"
        >
          <PopupCalendarConfirm />
        </Modal>

        <Modal
          isOpen={isPopupCalendarDoneOpenRedux}
          onRequestClose={() => {
            setIsPopupCalendarDoneOpenRedux(false);
          }}
          shouldCloseOnOverlayClick
          className="popup__modal"
          overlayClassName="popup__overlay"
        >
          <PopupCalendarDone />
        </Modal>

        <Modal
          isOpen={isPopupErrorOpenRedux}
          onRequestClose={() => setIsPopupErrorOpenRedux(false)}
          shouldCloseOnOverlayClick
          className="popup__modal"
          overlayClassName="popup__overlay"
        >
          <PopupError />
        </Modal>

        <Modal
          isOpen={isPopupWhereToGoOpenRedux}
          onRequestClose={() => setIsPopupWhereToGoOpenRedux(false)}
          shouldCloseOnOverlayClick
          className="popup__modal"
          overlayClassName="popup__overlay"
        >
          <PopupWhereToGo />
        </Modal>
      </div>
    </CurrentContext.Provider>
  );
}

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return {
    isCityChoicePopupOpenRedux: state.app.isCityChoicePopupOpen,
    currentCityIdRedux: state.app.currentCityId,
    isPopupSigninOpenRedux: state.app.isPopupSigninOpen,
    isLoggedInRedux: state.app.isLoggedIn,
    currentUserRedux: state.app.currentUser,
    isPopupErrorOpenRedux: state.app.isPopupErrorOpen,
    //
    mainPageCalendarCardRedux: state.mainPage.mainPageCalendarCard,
    //
    isDeleteStoryPopupOpenRedux: state.profile.isDeleteStoryPopupOpen,
    //
    isPopupCalendarDescriptionOpenRedux: state.calendar.isPopupCalendarDescriptionOpen,
    clickedCalendarCardRedux: state.calendar.clickedCalendarCard,
    isPopupCalendarConfirmOpenRedux: state.calendar.isPopupCalendarConfirmOpen,
    isPopupCalendarDoneOpenRedux: state.calendar.isPopupCalendarDoneOpen,
    //
    isPopupWhereToGoOpenRedux: state.place.isPopupWhereToGoOpen,
  };
};

const mapDispatchToProps = {
  setIsPopupSigninOpenRedux,
  setCityChoicePopupOpenRedux,
  setCurrentCityIdRedux,
  setCurrentCityRedux,
  setIsLoggedInRedux,
  setCurrentUserRedux,
  setIsPopupErrorOpenRedux,
  //
  setMainPageDataRedux,
  setMainPageCalendarCardRedux,
  //
  setIsPopupCalendarDescriptionOpenRedux,
  setIsPopupCalendarConfirmOpenRedux,
  setIsPopupCalendarDoneOpenRedux,
  //
  setIsPopupWhereToGoOpenRedux,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
