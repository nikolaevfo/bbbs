/* eslint-disable no-unused-vars */
/* eslint-disable import/named */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Modal from 'react-modal';

import { connect } from 'react-redux';

import {
  // setCityChoicePopupOpenRedux,
  // setCurrentCityIdRedux,
  // setCurrentCityRedux,
  setCityChoicePopupOpenRedux,
  setCurrentCityIdRedux,
  setCurrentCityRedux,
  setIsPopupSigninOpenRedux,
  setIsLoggedInRedux,
  setCurrentUserRedux,
  //
  setMainPageDataRedux,
  setMainPageCalendarCardRedux,
  //
  setIsPopupCalendarDescriptionOpenRedux,
  setIsPopupCalendarConfirmOpenRedux,
  setIsPopupCalendarDoneOpenRedux,
} from '../redux/actions';

import api from '../utils/api/api';

import isBackScroll from '../utils/isBackScroll';
import toGetMonthListShorter from '../utils/toGetMonthListShorter';

import { CurrentContext } from '../contexts/CurrentContext';
// import { IsLoggedInContext } from '../contexts/IsLoggedInContext';

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
  // main
  setMainPageDataRedux,
  setMainPageCalendarCardRedux,
  mainPageCalendarCardRedux,
  // profile
  isDeleteStoryPopupOpenRedux,
  //
  isPopupCalendarDescriptionOpenRedux,
  isPopupCalendarConfirmOpenRedux,
  isPopupCalendarDoneOpenRedux,
  isPopupErrorOpenRedux,
  setIsPopupCalendarDescriptionOpenRedux,
  setIsPopupCalendarConfirmOpenRedux,
}) {
  // context
  // const [currentUser, setCurrentUser] = useState({});
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isLoggedIn = isLoggedInRedux;
  const currentUser = currentUserRedux;

  // const history = useHistory();

  // const [isDeleteStoryPopupOpen, setDeleteStoryPopupOpen] = React.useState(false); //+
  // const [isCityChoicePopupOpen, setCityChoicePopupOpen] = React.useState(false); //+
  // const [currentCityId, setCurrentCityId] = useState(undefined); //+
  // const [currentCity, setCurrentCity] = useState(undefined); //+
  // const [isPopupSigninOpen, setisPopupSigninOpen] = useState(false); //+

  const currentCityId = currentCityIdRedux;

  // header======================================================================================
  const [headerClasses, setHeaderClasses] = useState({
    header: '',
    menuBurger: '',
    menuListSWrap: 'menu__lists-wrap_hidden',
    menuListSocial: 'menu__list_hidden',
    headerOuted: '',
  });
  // переключение классов мобильной версии меню
  function handleMenuButton() {
    if (headerClasses.header === '') {
      setHeaderClasses({
        ...headerClasses,
        header: 'header_displayed',
        menuBurger: 'menu__burger_active',
        menuListSWrap: '',
        menuListSocial: '',
      });
    } else {
      setHeaderClasses({
        ...headerClasses,
        header: '',
        menuBurger: '',
        menuListSWrap: 'menu__lists-wrap_hidden',
        menuListSocial: 'menu__list_hidden',
      });
    }
  }
  function handleCloseBurgerMenu() {
    setHeaderClasses({
      ...headerClasses,
      header: '',
      menuBurger: '',
      menuListSWrap: 'menu__lists-wrap_hidden',
      menuListSocial: 'menu__list_hidden',
    });
  }
  // реализация появления меню при обратном скролле
  const handleScroll = () => {
    if (isBackScroll()) {
      setHeaderClasses({
        ...headerClasses,
        headerOuted: 'header_outed',
      });
    } else {
      setHeaderClasses({
        ...headerClasses,
        headerOuted: '',
      });
    }
  };
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // header

  // popupError
  function handlePopupErrorClose() {
    // if (popupCalendarWichWasOpen === 'isPopupCalendarDescriptionOpen') {
    //   setIsPopupErrorOpen(false);
    //   setIsPopupCalendarDescriptionOpen(true);
    // } else if (popupCalendarWichWasOpen === 'isPopupCalendarConfirmOpen') {
    //   setIsPopupErrorOpen(false);
    //   setIsPopupCalendarConfirmOpen(true);
    // } else if (popupCalendarWichWasOpen === 'isPopupSigninOpen') {
    //   setIsPopupErrorOpen(false);
    //   setIsPopupSigninOpenRedux(true);
    // }
    // setIsPopupErrorOpen(false);
  }

  // Questions =============================================================================

  // whereToGo ===============================================================================
  const [whereToGoCardsData, setWhereToGoCardsData] = useState([]); //+
  const [whereToGoTagsData, setWhereToGoTagsData] = useState([]); //+
  function handleWhereToGoInit() {
    api
      .whereToGoCards()
      .then((res) => {
        setWhereToGoCardsData(res.data.whereToGoCards);
      })
      .catch((err) => console.log(err));

    api
      .whereToGoTags()
      .then((res) => {
        setWhereToGoTagsData(res.data.whereToGoTags);
      })
      .catch((err) => console.log(err));
  }

  const [isPopupWhereToGoOpen, setIsPopupWhereToGoOpen] = useState(false); //+

  function handlePopupWhereToGoOpen() {
    setIsPopupWhereToGoOpen(true);
  }

  function handlePopupWhereToGoClose() {
    setIsPopupWhereToGoOpen(false);
  }

  function handlePopupWhereToGoSubmit(data) {
    // TODO запрос к АПИ
    console.log(data);
    handlePopupWhereToGoClose();
  }

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
        <Header
          headerClasses={headerClasses}
          handleMenuButton={handleMenuButton}
          onCloseBurgerMenu={handleCloseBurgerMenu}
        />
        <Switch>
          <Route exact path="/">
            <Helmet>
              <title>Главная</title>
            </Helmet>
            <Main
            // mainPageData={mainPageData}
            // mainPageCalendarCard={mainPageCalendarCard}
            // onOpenCalendarDescriptionPopup={handleOpenCalendarDescriptionPopup}
            // onAppointCalendarCardClick={handleCalendarAppointBtnClick}
            />
          </Route>
          <Route exact path="/profile">
            <Helmet>
              <title>Профиль</title>
            </Helmet>
            <Profile
            // onDeleteStoryClick={handleDeleteStoryPopupClick}
            // onCityChoiceClick={handleCityChoicePopupClick}
            // onProfileInit={handleProfileInit}
            // profileNarrativesCards={profileNarrativesCards}
            // onAddNarrative={handleAddNarrative}
            // onChangeNarrative={handleChangeNarrative}
            // profileCalendarCards={profileCalendarCards}
            // currentCity={currentCity}
            // onSignOut={handleSignOut}
            />
          </Route>
          <Route exact path="/calendar">
            <Helmet>
              <title>Календарь</title>
            </Helmet>
            <Calendar
            // onCalendarInit={handelCalendarInit}
            // calendarData={calendarData}
            // onOpenCalendarDescriptionPopup={handleOpenCalendarDescriptionPopup}
            // onAppointCalendarClick={handleCalendarAppointBtnClick}
            // monthList={monthList}
            />
          </Route>

          <Route exact path="/place">
            <Helmet>
              <title>Куда пойти</title>
            </Helmet>
            <WhereToGo
              onWhereToGoInit={handleWhereToGoInit}
              whereToGoCardsData={whereToGoCardsData}
              whereToGoTagsData={whereToGoTagsData}
              onPopupOpen={handlePopupWhereToGoOpen}
            />
          </Route>

          <Route exact path="/questions">
            <Helmet>
              <title>Ответы на вопросы</title>
            </Helmet>
            <Questions
            // onQuestionsInit={handleQuestionsInit}
            // questionsData={questionsData}
            // questionsTagsData={questionsTagsData}
            // onSubmit={handlerSubmitQuestionsForm}
            />
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
        <PopupDeleteStory
          isOpen={isDeleteStoryPopupOpenRedux}
          // onClose={closeDeleteStoryPopup}
          // onDeleteProfileStory={handleDeleteProfileStory}
        />
        <Modal
          isOpen={isCityChoicePopupOpenRedux}
          onRequestClose={() => {
            setCityChoicePopupOpenRedux(false);
          }}
          shouldCloseOnOverlayClick
          className="popup__modal"
          overlayClassName="popup__overlay"
        >
          <PopupCityChoice
          // onClose={() => {
          //   setCityChoicePopupOpenRedux(false);
          // }}
          // onChangeCurrentCityId={setCurrentCityId}
          // onChangeCurrentCity={setCurrentCity}
          />
        </Modal>

        <Modal
          isOpen={isPopupSigninOpenRedux}
          className="popup__modal"
          overlayClassName="popup__overlay"
        >
          <PopupSignin
          // onCloseClick={handlePopupCalendarSigninCloseClick}
          // onSubmit={handlePopupCalendarSigninLoggedIn}
          />
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
          <PopupCalendarDescription
          // clickedCalendarCard={clickedCalendarCard}
          // onCloseClick={handlePopupCloseClick}
          // onSubmitAppointCalendarClick={handleSubmitAppointCalendarClick}
          />
        </Modal>

        <Modal
          isOpen={isPopupCalendarConfirmOpenRedux}
          onRequestClose={() => setIsPopupCalendarConfirmOpenRedux(false)}
          shouldCloseOnOverlayClick
          className="popup__modal"
          overlayClassName="popup__overlay"
        >
          <PopupCalendarConfirm
          // clickedCalendarCard={clickedCalendarCard}
          // onSubmitAppointCalendarClick={handleSubmitAppointCalendarClick}
          // onCloseClick={handlePopupCloseClick}
          />
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
          <PopupCalendarDone
          // clickedCalendarCard={clickedCalendarCard}
          // onCloseClick={handlePopupCloseClick}
          />
        </Modal>

        <Modal
          isOpen={isPopupErrorOpenRedux}
          onRequestClose={() => {
            handlePopupErrorClose();
          }}
          shouldCloseOnOverlayClick
          className="popup__modal"
          overlayClassName="popup__overlay"
        >
          <PopupError
            onCloseClick={handlePopupErrorClose}
            // text={popupErrorText}
          />
        </Modal>

        <Modal
          isOpen={isPopupWhereToGoOpen}
          onRequestClose={() => {
            handlePopupWhereToGoClose();
          }}
          shouldCloseOnOverlayClick
          className="popup__modal"
          overlayClassName="popup__overlay"
        >
          <PopupWhereToGo
            onCloseClick={handlePopupWhereToGoClose}
            onSubmit={handlePopupWhereToGoSubmit}
          />
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
    //
    mainPageCalendarCardRedux: state.mainPage.mainPageCalendarCard,
    //
    isDeleteStoryPopupOpenRedux: state.profile.isDeleteStoryPopupOpen,
    //
    isPopupCalendarDescriptionOpenRedux: state.calendar.isPopupCalendarDescriptionOpen,
    clickedCalendarCardRedux: state.calendar.clickedCalendarCard,
    isPopupCalendarConfirmOpenRedux: state.calendar.isPopupCalendarConfirmOpen,
    isPopupCalendarDoneOpenRedux: state.calendar.isPopupCalendarDoneOpen,
    isPopupErrorOpenRedux: state.calendar.isPopupErrorOpen,
  };
};

const mapDispatchToProps = {
  // setCityChoicePopupOpenRedux,
  // setCurrentCityIdRedux,
  // setCurrentCityRedux,
  setIsPopupSigninOpenRedux,
  setCityChoicePopupOpenRedux,
  setCurrentCityIdRedux,
  setCurrentCityRedux,
  setIsLoggedInRedux,
  setCurrentUserRedux,
  //
  setMainPageDataRedux,
  setMainPageCalendarCardRedux,
  //
  setIsPopupCalendarDescriptionOpenRedux,
  setIsPopupCalendarConfirmOpenRedux,
  setIsPopupCalendarDoneOpenRedux,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
