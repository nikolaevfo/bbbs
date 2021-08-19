/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ReadAndWatchSliderCardDictionary from './ReadAndWatchSliderCardDictionary';
import ReadAndWatchSliderCardVideo from './ReadAndWatchSliderCardVideo';
import ReadAndWatchSliderCardArticles from './ReadAndWatchSliderCardArticles';
import ReadAndWatchSliderCardFilms from './ReadAndWatchSliderCardFilms';
import ReadAndWatchSliderCardBooks from './ReadAndWatchSliderCardBooks';

function ReadAndWatchSlider({ data, link }) {
  const trackSliderRef = React.useRef();
  const [isBtnNextActive, setIsBtnNextActive] = React.useState(true);
  const [isBtnPrevActive, setIsBtnPrevActive] = React.useState(false);

  const [imgQuantity, setImgQuantity] = React.useState(0);
  const [sliderImgWidth, setSliderImgWidth] = React.useState(420);
  const [imgOnPage, setImgOnPage] = React.useState(3);
  const [position, setPosition] = React.useState(0);
  const [sliderStep, setSliderStep] = React.useState(450);
  const [sliderLength, setSliderLength] = React.useState([]);

  const sliderGap = 30;

  React.useEffect(() => {
    if (data) {
      setImgQuantity(data.cards.length);
      console.log(`imgQuantity1 ${data.cards.length}`);
    }
  }, [data]);

  React.useEffect(() => {
    if (document.documentElement.clientWidth < 1100) {
      setSliderImgWidth(290);
      setImgOnPage(1);
    } else if (document.documentElement.clientWidth < 1450) {
      setSliderImgWidth(370);
      setImgOnPage(2);
    }
  }, [imgQuantity]);

  React.useEffect(() => {
    setSliderStep(sliderImgWidth + sliderGap);
  }, [sliderImgWidth]);

  React.useEffect(() => {
    // console.log(`imgQuantity ${data.cards.length}`);
    console.log(`setSliderStep ${sliderStep}`);
    console.log(`imgOnPage ${imgOnPage}`);
    setSliderLength(sliderStep * (imgQuantity - imgOnPage));
  }, [sliderStep, imgQuantity]);

  function checkArrowIsActive(pos) {
    console.log(sliderLength);
    console.log(pos);
    if (pos === -sliderLength) {
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
    setPosition(currentPosition - sliderStep);
    trackSliderRef.current.style.transform = `translateX(${currentPosition - sliderStep}px)`;
    checkArrowIsActive(currentPosition - sliderStep);
  }
  function handleBtnPrev() {
    const currentPosition = position;
    setPosition(currentPosition + sliderStep);
    trackSliderRef.current.style.transform = `translateX(${currentPosition + sliderStep}px)`;
    checkArrowIsActive(currentPosition + sliderStep);
  }

  function Greeting({ item }) {
    if (link === '/dictionary') {
      return <ReadAndWatchSliderCardDictionary data={item} key={item.id} />;
    }
    if (link === '/video') {
      return <ReadAndWatchSliderCardVideo data={item} key={item.id} />;
    }
    if (link === '/articles') {
      return <ReadAndWatchSliderCardArticles data={item} key={item.id} />;
    }
    if (link === '/films') {
      return <ReadAndWatchSliderCardFilms data={item} key={item.id} />;
    }
    if (link === '/books') {
      return <ReadAndWatchSliderCardBooks data={item} key={item.id} />;
    }
  }
  return (
    <>
      <section className="preview page__section">
        <div className="preview__title-wrap">
          <NavLink to={link} className="link">
            <h1 className="chapter-title chapter-title_clickable">{data && data.title}</h1>
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
            {data && data.cards.map((item) => <Greeting item={item} />)}
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
