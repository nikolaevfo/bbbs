import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { Helmet } from 'react-helmet';
import Modal from 'react-modal';
import api from '../utils/api';
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
import PopupCityChoice from './PopupCityChoice';
import PopupDeleteStory from './PopupDeleteStory';
import PopupCalendarDescription from './PopupCalendarDescription';
import PopupCalendarConfirm from './PopupCalendarConfirm';
import PopupCalendarDone from './PopupCalendarDone';
import PopupCalendarSignin from './PopupCalendarSignin';
import PopupCalendarError from './PopupCalendarError';
import ReadAndWatch from './ReadAndWatch';
import Dictionary from './Dictionary';
import Video from './Video';
import Articles from './Articles';
import Films from './Films';
import Books from './Books';
import Rights from './Rights';
import Stories from './Stories';

function App() {
  // context
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isDeleteStoryPopupOpen, setDeleteStoryPopupOpen] = React.useState(false);
  const [isCityChoicePopupOpen, setCityChoicePopupOpen] = React.useState(false);
  const [currentCityId, setCurrentCityId] = useState(undefined);
  const [currentCity, setCurrentCity] = useState(undefined);
  const [isPopupCalendarSigninOpen, setIsPopupCalendarSigninOpen] = useState(false);

  // city modal open on init=======================================================================
  React.useEffect(() => {
    if (isLoggedIn && !currentCityId) {
      setCityChoicePopupOpen(true);
    }
  }, [isLoggedIn]);

  // Profile =====================================================================
  const [profileNarrativesCards, setProfileNarrativesCards] = React.useState([]);
  const [profileCalendarCards, setProfileCalendarCards] = React.useState([]);
  function handleProfileInit() {
    const access = localStorage.getItem('access');
    api
      .getProfileNarratives(access)
      .then((res) => {
        setProfileNarrativesCards(res.data);
      })
      .catch((err) => console.log(err));

    api
      .getCalendarCardsLoggedIn(access)
      .then((res) => {
        const cardsList = res.data.calendarCards;
        setProfileCalendarCards(cardsList);
      })
      .catch((err) => console.log(err));
  }

  function handleAddNarrative(data) {
    const newArray = profileNarrativesCards.slice();
    newArray.push(data);
    setProfileNarrativesCards(newArray);
    // todo должно быть обращение к апи
  }

  function handleChangeNarrative(data) {
    const newArray = [];
    profileNarrativesCards.forEach((item) => {
      if (item.id !== data.id) {
        newArray.push(item);
      } else {
        newArray.push(data);
      }
    });
    setProfileNarrativesCards(newArray);
    // todo должно быть обращение к апи
  }

  const [checkedToDeleteProfileStory, setCheckedToDeleteProfileStory] = React.useState(undefined);

  // const history = useHistory();

  function handleDeleteStoryPopupClick(card) {
    setDeleteStoryPopupOpen(!isDeleteStoryPopupOpen);
    setCheckedToDeleteProfileStory(card);
  }

  function handleCityChoicePopupClick() {
    setCityChoicePopupOpen(!isCityChoicePopupOpen);
  }

  function closeDeleteStoryPopup() {
    setDeleteStoryPopupOpen(false);
  }

  function closeCityChoicePopup() {
    setCityChoicePopupOpen(false);
  }

  function handleDeleteProfileStory() {
    const newArray = [];
    profileNarrativesCards.forEach((item) => {
      if (item.id !== checkedToDeleteProfileStory.id) {
        newArray.push(item);
      }
    });
    setProfileNarrativesCards(newArray);
    closeDeleteStoryPopup();
    // todo должно быть обращение к апи
  }

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
  let scrollPrev = 0;
  function handleScroll() {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100 && scrolled > scrollPrev) {
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
    scrollPrev = scrolled;
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // header

  // main page=======================================================================================
  const [mainPageData, setMainPageData] = useState({});
  const [mainPageCalendarCard, setMainPageCalendarCard] = useState({});

  React.useEffect(() => {
    const access = localStorage.getItem('access');
    api
      .getMainPageInfo(access)
      .then((response) => {
        setMainPageData(response.data);
        setMainPageCalendarCard(response.data.event);
      })
      .catch((err) => {
        console.log(`Ошибка при получении данных с сервера: ${err}`);
      });
  }, []);
  // main page

  // calendar===============================================================================
  const [calendarData, setCalendarData] = useState(null);
  const [monthList, setMonthList] = useState([]);

  const [isPopupCalendarDescriptionOpen, setIsPopupCalendarDescriptionOpen] = useState(false);
  const [clickedCalendarCard, setClickedCalendarCard] = useState([]);
  const [isPopupCalendarConfirmOpen, setIsPopupCalendarConfirmOpen] = useState(false);
  const [isPopupCalendarDoneOpen, setIsPopupCalendarDoneOpen] = useState(false);
  const [isPopupCalendarErrorOpen, setIsPopupCalendarErrorOpen] = useState(false);

  // popupCalendarErrorText
  const [popupCalendarErrorText, setPopupCalendarErrorText] = useState('');

  // попап, который был открыт перед возникновением ошибки
  const [popupCalendarWichWasOpen, setPopupCalendarWichWasOpen] = useState(undefined);

  // close all popups================================
  function handlePopupCloseClick() {
    setIsPopupCalendarSigninOpen(false);
    setIsPopupCalendarDescriptionOpen(false);
    setIsPopupCalendarConfirmOpen(false);
    setIsPopupCalendarDoneOpen(false);
    setCityChoicePopupOpen(false);
  }

  function handelCalendarInit() {
    const toGetMonthListShorter = (arr) => {
      const result = [];
      for (let i = 0; i < arr.length; i += 1) {
        const data = format(new Date(arr[i].startAt), 'LLLL', { locale: ru });
        if (!result.includes(data)) {
          result.push(data);
        }
      }
      return result;
    };
    const access = localStorage.getItem('access');
    if (isLoggedIn) {
      // получение карточек для зарегестрированного пользователя
      api
        .getCalendarCardsLoggedIn(access)
        .then((res) => {
          const cardsList = res.data.calendarCards;
          setCalendarData(cardsList);
          const newMonthList = toGetMonthListShorter(cardsList);
          setMonthList(newMonthList);
        })
        .catch((err) => console.log(err));
    } else {
      // получение карточек для незарегестрированного пользователя
      api
        .getCalendarCardsLoggedOut(access, currentCityId)
        .then((res) => {
          const cardsList = res.data.calendarCards;
          setCalendarData(cardsList);
          const newMonthList = toGetMonthListShorter(cardsList);
          setMonthList(newMonthList);
        })
        .catch((err) => console.log(err));
    }
  }

  // PopupCalendarSignin ===============================
  function handlePopupCalendarSigninLoggedIn(userData) {
    setPopupCalendarErrorText('Что-то пошло не так, войти снова');
    api
      .login(userData)
      .then((res) => {
        setCurrentUser({ username: res.data.username, password: res.data.password });
        localStorage.setItem('access', JSON.stringify(res.access));
        setIsLoggedIn(true);
        setIsPopupCalendarSigninOpen(false);
      })
      .catch(() => {
        handlePopupCloseClick();
        setPopupCalendarWichWasOpen('isPopupCalendarSigninOpen');
        setIsPopupCalendarErrorOpen(true);
      });
    setCityChoicePopupOpen(true);
  }
  function handlePopupCalendarSigninCloseClick() {
    handlePopupCloseClick();
    setCityChoicePopupOpen(true);
    // history.push('/');
  }

  // PopupCalendarDescription===========================

  function handleOpenCalendarDescriptionPopup(card) {
    setClickedCalendarCard(card);
    setIsPopupCalendarDescriptionOpen(true);
  }

  // записаться/отписаться от события
  function handleChangeAppoitnCalendar(card, bool) {
    if (calendarData) {
      const newCardsArray = calendarData.slice(0);
      const ind = newCardsArray.indexOf(card);
      newCardsArray[ind].booked = bool;
      setCalendarData(newCardsArray);
    } else {
      setMainPageCalendarCard({ ...mainPageCalendarCard, booked: bool });
    }
  }

  // подтверждение или отписка на основной странице
  function handleCalendarAppointBtnClick(card) {
    const access = localStorage.getItem('access');
    setPopupCalendarErrorText('Что-то пошло не так, попробуйте записаться снова');
    if (!card.booked) {
      setClickedCalendarCard(card);
      setIsPopupCalendarConfirmOpen(true);
    } else {
      api
        .deleteAppointToEvent(access, card.id)
        .then(() => {
          // console.log(res);
        })
        .catch(() => {
          setIsPopupCalendarErrorOpen(true);
        });
      handleChangeAppoitnCalendar(card, false);
    }
  }

  // подтверждение или запись в попапе
  function handleSubmitAppointCalendarClick(card) {
    if (isPopupCalendarDescriptionOpen) {
      setPopupCalendarWichWasOpen('isPopupCalendarDescriptionOpen');
    } else if (isPopupCalendarConfirmOpen) {
      setPopupCalendarWichWasOpen('isPopupCalendarConfirmOpen');
    }
    const access = localStorage.getItem('access');
    setPopupCalendarErrorText('Что-то пошло не так, попробуйте записаться снова');
    if (!card.booked) {
      api
        .appointToEvent(access, card.id)
        .then(() => {
          // console.log(res);
        })
        .catch(() => {
          handlePopupCloseClick();
          setIsPopupCalendarErrorOpen(true);
        });
      handleChangeAppoitnCalendar(card, true);
      handlePopupCloseClick();
      setIsPopupCalendarDoneOpen(true);
    } else {
      api
        .deleteAppointToEvent(access, card.id)
        .then(() => {
          // console.log(res);
        })
        .catch(() => {
          handlePopupCloseClick();
          setIsPopupCalendarErrorOpen(true);
        });
      handleChangeAppoitnCalendar(card, false);
      handlePopupCloseClick();
    }
  }

  // popupCalendarError
  function handlePopupCalendarErrorClose() {
    if (popupCalendarWichWasOpen === 'isPopupCalendarDescriptionOpen') {
      setIsPopupCalendarErrorOpen(false);
      setIsPopupCalendarDescriptionOpen(true);
    } else if (popupCalendarWichWasOpen === 'isPopupCalendarConfirmOpen') {
      setIsPopupCalendarErrorOpen(false);
      setIsPopupCalendarConfirmOpen(true);
    } else if (popupCalendarWichWasOpen === 'isPopupCalendarSigninOpen') {
      setIsPopupCalendarErrorOpen(false);
      setIsPopupCalendarSigninOpen(true);
    }
    setIsPopupCalendarErrorOpen(false);
  }

  // Questions =============================================================================
  const [questionsData, setQuestionsData] = useState([]);
  const [questionsTagsData, setQuestionsTagsData] = useState([]);
  function handleQuestionsInit() {
    api
      .getQuestionsCards()
      .then((res) => {
        setQuestionsData(res.data.questionsCards);
      })
      .catch((err) => console.log(err));

    api
      .getQuestionsTags()
      .then((res) => {
        setQuestionsTagsData(res.data.questionsTags);
      })
      .catch((err) => console.log(err));
  }

  // whereToGo ===============================================================================
  const [whereToGoCardsData, setWhereToGoCardsData] = useState([]);
  const [whereToGoTagsData, setWhereToGoTagsData] = useState([]);
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

  // signin=================================================================================
  function handelAppInit() {
    if (isLoggedIn) {
      setIsPopupCalendarSigninOpen(false);
    } else {
      setIsPopupCalendarSigninOpen(true);
    }
  }

  React.useEffect(() => {
    handelAppInit();
  }, [currentUser]);

  Modal.setAppElement('#root');

  return (
    <CurrentContext.Provider value={{ currentUser, isLoggedIn }}>
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
              mainPageData={mainPageData}
              mainPageCalendarCard={mainPageCalendarCard}
              onOpenCalendarDescriptionPopup={handleOpenCalendarDescriptionPopup}
              onAppointCalendarCardClick={handleCalendarAppointBtnClick}
            />
          </Route>
          <Route exact path="/profile">
            <Helmet>
              <title>Профиль</title>
            </Helmet>
            <Profile
              onDeleteStoryClick={handleDeleteStoryPopupClick}
              onCityChoiceClick={handleCityChoicePopupClick}
              onProfileInit={handleProfileInit}
              profileNarrativesCards={profileNarrativesCards}
              onAddNarrative={handleAddNarrative}
              onChangeNarrative={handleChangeNarrative}
              profileCalendarCards={profileCalendarCards}
              currentCity={currentCity}
            />
          </Route>
          <Route exact path="/calendar">
            <Helmet>
              <title>Календарь</title>
            </Helmet>
            <Calendar
              onCalendarInit={handelCalendarInit}
              calendarData={calendarData}
              onOpenCalendarDescriptionPopup={handleOpenCalendarDescriptionPopup}
              onAppointCalendarClick={handleCalendarAppointBtnClick}
              monthList={monthList}
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
            />
          </Route>

          <Route exact path="/questions">
            <Helmet>
              <title>Ответы на вопросы</title>
            </Helmet>
            <Questions
              onQuestionsInit={handleQuestionsInit}
              questionsData={questionsData}
              questionsTagsData={questionsTagsData}
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
          isOpen={isDeleteStoryPopupOpen}
          onClose={closeDeleteStoryPopup}
          onDeleteProfileStory={handleDeleteProfileStory}
        />
        <PopupCityChoice
          isOpen={isCityChoicePopupOpen}
          onClose={closeCityChoicePopup}
          onChangeCurrentCityId={setCurrentCityId}
          onChangeCurrentCity={setCurrentCity}
        />
        <Modal
          isOpen={isPopupCalendarSigninOpen}
          className="popup__modal"
          overlayClassName="popup__overlay"
        >
          <PopupCalendarSignin
            onCloseClick={handlePopupCalendarSigninCloseClick}
            onSubmit={handlePopupCalendarSigninLoggedIn}
          />
        </Modal>
        <Modal
          isOpen={isPopupCalendarDescriptionOpen}
          onRequestClose={() => {
            handlePopupCloseClick();
          }}
          shouldCloseOnOverlayClick
          className="popup__modal"
          overlayClassName="popup__overlay"
        >
          <PopupCalendarDescription
            clickedCalendarCard={clickedCalendarCard}
            onCloseClick={handlePopupCloseClick}
            onSubmitAppointCalendarClick={handleSubmitAppointCalendarClick}
          />
        </Modal>

        <Modal
          isOpen={isPopupCalendarConfirmOpen}
          onRequestClose={() => {
            handlePopupCloseClick();
          }}
          shouldCloseOnOverlayClick
          className="popup__modal"
          overlayClassName="popup__overlay"
        >
          <PopupCalendarConfirm
            clickedCalendarCard={clickedCalendarCard}
            onSubmitAppointCalendarClick={handleSubmitAppointCalendarClick}
            onCloseClick={handlePopupCloseClick}
          />
        </Modal>

        <Modal
          isOpen={isPopupCalendarDoneOpen}
          onRequestClose={() => {
            handlePopupCloseClick();
          }}
          shouldCloseOnOverlayClick
          className="popup__modal"
          overlayClassName="popup__overlay"
        >
          <PopupCalendarDone
            clickedCalendarCard={clickedCalendarCard}
            onCloseClick={handlePopupCloseClick}
          />
        </Modal>

        <Modal
          isOpen={isPopupCalendarErrorOpen}
          onRequestClose={() => {
            handlePopupCalendarErrorClose();
          }}
          shouldCloseOnOverlayClick
          className="popup__modal"
          overlayClassName="popup__overlay"
        >
          <PopupCalendarError
            onCloseClick={handlePopupCalendarErrorClose}
            text={popupCalendarErrorText}
          />
        </Modal>

        {/* <Modal
          isOpen={isCityChoicePopupOpen}
          onRequestClose={() => {
            handlePopupCloseClick();
          }}
          shouldCloseOnOverlayClick
          className="popup__modal"
          overlayClassName="popup__overlay"
        >
          <PopupCityChoice />
        </Modal> */}
      </div>
    </CurrentContext.Provider>
  );
}

export default App;
