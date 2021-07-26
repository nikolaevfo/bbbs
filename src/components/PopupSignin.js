/* eslint-disable import/named */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { useFormWithValidation } from '../hooks/useForm';
import api from '../utils/api/api';

import {
  setisPopupSigninOpenRedux,
  setCityChoicePopupOpenRedux,
  setPopupErrorTextRedux,
} from '../redux/actions';

function PopupSignin({
  setisPopupSigninOpenRedux,
  setCityChoicePopupOpenRedux,
  setPopupErrorTextRedux,
}) {
  const { values, handleChange, isValid, resetForm, setIsValid } = useFormWithValidation();

  React.useEffect(() => {
    resetForm();
    setIsValid(false);
  }, []);

  function handlePopupCalendarSigninLoggedIn(userData) {
    setPopupErrorTextRedux('Что-то пошло не так, войти снова');
    api
      .login(userData)
      .then((res) => {
        setCurrentUser({ username: res.data.username, password: res.data.password });
        localStorage.clear();
        localStorage.setItem('access', JSON.stringify(res.data.access));
        localStorage.setItem('username', JSON.stringify(res.data.username));
        setIsLoggedIn(true);
        setisPopupSigninOpenRedux(false);
      })
      .catch((err) => {
        handlePopupCloseClick();
        setPopupCalendarWichWasOpen('isPopupSigninOpen');
        setIsPopupErrorOpen(true);
        console.log(err);
      });
    setCityChoicePopupOpenRedux(true);
  }

  function handleCloseClick() {
    setisPopupSigninOpenRedux(false);
    setCityChoicePopupOpenRedux(true);
  }

  function handlerSubmitForm(e) {
    e.preventDefault();
    onSubmit({
      login: values.login,
      password: values.password,
    });
  }
  return (
    // <div className="popup popup_type_sign-in popup_opened">
    <form
      className="popup__container popup__container_type_sign-in"
      onSubmit={handlePopupCalendarSigninLoggedIn}
    >
      <button
        className="popup__close popup__cancel"
        type="button"
        aria-label="Close"
        onClick={handleCloseClick}
      />
      <h2 className="section-title popup__title_type_sign-in">Вход</h2>
      <p className="paragraph popup__sign-in">
        Вход в личный кабинет доступен наставникам программы «Старшие Братья Старшие Сёстры».
      </p>
      <p className="paragraph popup__sign-in">
        Пожалуйста, введите логин и пароль из письма. Если вам не приходило письмо, свяжитесь с
        вашим куратором.
      </p>
      <input
        type="text"
        name="login"
        className="popup__input"
        required
        placeholder="Логин"
        onChange={handleChange}
        minLength={2}
      />
      <input
        type="password"
        name="password"
        className="popup__input"
        required
        placeholder="Пароль"
        onChange={handleChange}
        minLength={6}
      />
      <Link to="/" className="popup__forgot-password">
        Забыли пароль?
      </Link>
      <button className="button button_theme_light popup__enter" type="submit" disabled={!isValid}>
        Войти
      </button>
    </form>
    // </div>
  );
}

PopupSignin.defaultProps = {
  // onCloseClick: undefined,
  // onSubmit: undefined,
};

PopupSignin.propTypes = {
  // onCloseClick: PropTypes.func,
  // onSubmit: PropTypes.func,
};

// const mapStateToProps = (state) => ({
//   profileNarrativesCardsRedux: state.profile.profileNarrativesCards,
//   currentCityIdRedux: state.app.currentCityId,
//   currentCityRedux: state.app.currentCity,
// });

const mapDispatchToProps = {
  setisPopupSigninOpenRedux,
  setCityChoicePopupOpenRedux,
  setPopupErrorTextRedux,
};

export default connect(null, mapDispatchToProps)(PopupSignin);
