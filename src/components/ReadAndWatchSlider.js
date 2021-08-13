/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import ReadAndWatchSliderCardDictionary from './ReadAndWatchSliderCardDictionary';

function ReadAndWatchSlider({ text, link }) {
  const trackSliderRef = React.useRef();
  const [isBtnNextActive, setIsBtnNextActive] = React.useState(true);
  const [isBtnPrevActive, setIsBtnPrevActive] = React.useState(false);
  const [position, setPosition] = React.useState(0);

  // let position = 0;
  function checkArrowIsActive(pos) {
    if (pos === -2000) {
      setIsBtnNextActive(false);
    } else {
      setIsBtnNextActive(true);
    }

    if (pos === 0) {
      setIsBtnPrevActive(false);
    } else {
      setIsBtnPrevActive(true);
    }
  }

  function handleBtnNext() {
    const currentPosition = position;
    setPosition(currentPosition - 400);
    trackSliderRef.current.style.transform = `translateX(${currentPosition - 400}px)`;
    checkArrowIsActive(currentPosition - 400);
  }
  function handleBtnPrev() {
    const currentPosition = position;
    setPosition(currentPosition + 400);
    trackSliderRef.current.style.transform = `translateX(${currentPosition + 400}px)`;
    checkArrowIsActive(currentPosition + 400);
  }
  return (
    <>
      <section className="rights preview page__section">
        <div className="preview__title-wrap">
          <NavLink to={link} className="link">
            <h1 className="chapter-title chapter-title_clickable">{text}</h1>
          </NavLink>
          <div className="preview__bottons">
            <button
              className={`preview__button preview__button_left ${
                isBtnPrevActive ? 'preview__button_left-active' : ''
              }`}
              type="button"
              aria-label="кнопка влево"
              onClick={handleBtnPrev}
              disabled={!isBtnPrevActive}
            />
            <button
              className={`preview__button preview__button_rigrh ${
                isBtnNextActive ? 'preview__button_rigrh-active' : ''
              }`}
              type="button"
              aria-label="кнопка вправо"
              onClick={handleBtnNext}
              disabled={!isBtnNextActive}
            />
          </div>
        </div>
        <div className="preview__slider-wrapper">
          <div className="preview__row" ref={trackSliderRef}>
            <ReadAndWatchSliderCardDictionary />
            <ReadAndWatchSliderCardDictionary />
            <ReadAndWatchSliderCardDictionary />
            <ReadAndWatchSliderCardDictionary />
            <ReadAndWatchSliderCardDictionary />
            <ReadAndWatchSliderCardDictionary />
            <ReadAndWatchSliderCardDictionary />
            <ReadAndWatchSliderCardDictionary />
          </div>
        </div>
        {/* <div className="preview__row"> */}
        {/* <ReadAndWatchSliderCardDictionary />
          <ReadAndWatchSliderCardDictionary />
          <ReadAndWatchSliderCardDictionary />
          <ReadAndWatchSliderCardDictionary />
          <ReadAndWatchSliderCardDictionary />
          <ReadAndWatchSliderCardDictionary />
          <ReadAndWatchSliderCardDictionary />
          <ReadAndWatchSliderCardDictionary /> */}
        {/* <article className="preview__card catalog-card">
            <div className="card card_form_square rights__card">
              <a href="article.html" className="rights__link">
                <img
                  src="../images/catalog/catalog-hulk-boys.jpg"
                  alt="Психологические особенности детей-сирот"
                  className="catalog-card__image"
                />
              </a>
            </div>
            <h2 className="section-title catalog-card__title">
              Психологические особенности детей-сирот
            </h2>
          </article>
          <article className="preview__card catalog-card">
            <div className="card card_color_green card_form_circle rights__card">
              <a href="article.html" className="rights__link">
                <img
                  src="../images/catalog/catalog-coffee.jpg"
                  alt="Привязанность"
                  className="catalog-card__image"
                />
              </a>
            </div>
            <h2 className="section-title catalog-card__title">Привязанность</h2>
          </article>
          <article className="preview__card catalog-card">
            <div className="card card_color_yellow card_form_arch rights__card">
              <a href="article.html" className="rights__link">
                <img
                  src="../images/catalog/catalog-beach.jpg"
                  alt="Особенности социально дезадаптивных детей"
                  className="catalog-card__image"
                />
              </a>
            </div>
            <h2 className="section-title catalog-card__title">
              Особенности социально дезадаптивных детей
            </h2>
          </article>
          <article className="preview__card catalog-card">
            <div className="card card_color_pink card_form_circle rights__card">
              <a href="article.html" className="rights__link">
                <img
                  src="../images/catalog/catalog-coffee.jpg"
                  alt="Социальная адаптация"
                  className="catalog-card__image"
                />
              </a>
            </div>
            <h2 className="section-title catalog-card__title">Социальная адаптация</h2>
          </article>
          <article className="preview__card catalog-card">
            <div className="card card_color_blue card_form_arch rights__card">
              <a href="article.html" className="rights__link">
                <img
                  src="../images/catalog/catalog-blue-hand.jpg"
                  alt="Социально дезадаптивные дети"
                  className="catalog-card__image"
                />
              </a>
            </div>
            <h2 className="section-title catalog-card__title">Социально дезадаптивные дети</h2>
          </article>
          <article className="preview__card catalog-card">
            <div className="card card_color_pink card_form_square rights__card">
              <a href="article.html" className="rights__link">
                <img
                  src="../images/catalog/catalog-spear.jpg"
                  alt="Проявление агрессии у детей-сирот"
                  className="catalog-card__image"
                />
              </a>
            </div>
            <h2 className="section-title catalog-card__title">Проявление агрессии у детей-сирот</h2>
          </article> */}
        {/* </div> */}
      </section>
    </>
  );
}

export default ReadAndWatchSlider;
