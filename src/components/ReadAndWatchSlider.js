/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ReadAndWatchSliderCardGuide from './ReadAndWatchSliderCardGuide';

function ReadAndWatchSlider({ readAndWatchDataRedux, link }) {
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
      <section className="preview page__section">
        <div className="preview__title-wrap">
          <NavLink to={link} className="link">
            <h1 className="chapter-title chapter-title_clickable">
              {readAndWatchDataRedux.guide && readAndWatchDataRedux.guide.title}
            </h1>
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
            {readAndWatchDataRedux.guide &&
              readAndWatchDataRedux.guide.cards.map((item) => (
                <ReadAndWatchSliderCardGuide data={item} key={item.id} />
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

const mapStateToProps = (state) => ({
  readAndWatchDataRedux: state.readAndWatch.readAndWatchData,
});

export default connect(mapStateToProps, null)(ReadAndWatchSlider);
