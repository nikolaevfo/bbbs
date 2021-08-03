/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  setCityChoicePopupOpenRedux,
  setCurrentCityIdRedux,
  setCurrentCityRedux,
} from '../redux/actions';

function PopupCityChoice({
  setCityChoicePopupOpenRedux,
  setCurrentCityIdRedux,
  setCurrentCityRedux,
}) {
  function handleCityClick(e) {
    // onChangeCurrentCityId(e.target.id);
    localStorage.setItem('cityId', JSON.stringify(e.target.id));
    localStorage.setItem('city', JSON.stringify(e.target.textContent));
    // onChangeCurrentCity(e.target.textContent);
    setCurrentCityIdRedux(e.target.id);
    setCurrentCityRedux(e.target.textContent);
    setCityChoicePopupOpenRedux(false);
  }

  return (
    <div className="popup__container popup__container_type_cities">
      <h2 className="cities__title section-title">Выберите ваш город</h2>
      <ul className="cities__capitals">
        <li className="cities__name">
          <button type="button" className="cities__link" onClick={handleCityClick} id="1">
            Москва
          </button>
        </li>
        <li className="cities__name">
          <button type="button" className="cities__link" onClick={handleCityClick} id="2">
            Санкт-Петербург
          </button>
        </li>
      </ul>
      <ul className="cities__region">
        <li className="cities__name">
          <button type="button" className="cities__link" onClick={handleCityClick} id="3">
            Алексин
          </button>
        </li>
        <li className="cities__name">
          <button type="button" className="cities__link" onClick={handleCityClick} id="4">
            Барнаул
          </button>
        </li>
        <li className="cities__name">
          <button type="button" className="cities__link" onClick={handleCityClick} id="5">
            Екатеринбург
          </button>
        </li>
        <li className="cities__name">
          <button type="button" className="cities__link" onClick={handleCityClick} id="6">
            Зубцов
          </button>
        </li>
        <li className="cities__name">
          <button type="button" className="cities__link" onClick={handleCityClick} id="7">
            Калининград
          </button>
        </li>
        <li className="cities__name">
          <button type="button" className="cities__link" onClick={handleCityClick} id="8">
            Киреевск
          </button>
        </li>
        <li className="cities__name">
          <button type="button" className="cities__link" onClick={handleCityClick} id="9">
            Коломна
          </button>
        </li>
        <li className="cities__name">
          <button type="button" className="cities__link" onClick={handleCityClick} id="10">
            Новомосковск
          </button>
        </li>
        <li className="cities__name">
          <button type="button" className="cities__link" onClick={handleCityClick} id="11">
            Орехово-Зуево
          </button>
        </li>
        <li className="cities__name">
          <button type="button" className="cities__link" onClick={handleCityClick} id="12">
            Тверь
          </button>
        </li>
        <li className="cities__name">
          <button type="button" className="cities__link" onClick={handleCityClick} id="13">
            Тула
          </button>
        </li>
      </ul>
    </div>
  );
}

PopupCityChoice.defaultProps = {};

PopupCityChoice.propTypes = {};

const mapDispatchToProps = {
  setCityChoicePopupOpenRedux,
  setCurrentCityIdRedux,
  setCurrentCityRedux,
};

export default connect(null, mapDispatchToProps)(PopupCityChoice);
